/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Meta } from "@storybook/react";
import { ComponentFrameworkMockGeneratorReact,StringPropertyMock,WholeNumberPropertyMock,EnumPropertyMock,DataSetMock } from "@shko.online/componentframework-mock";
import {
    IInputs,
    IOutputs,
} from "@powercat/shimmer/Shimmer/generated/ManifestTypes";
import { Shimmer } from "@powercat/shimmer/Shimmer"
import { ItemColumns } from "@powercat/shimmer/Shimmer/ManifestConstants";
import { within, waitFor, userEvent } from '@storybook/testing-library';

const Delay = () =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
    })

export default {
    title: 'PCF Components/Shimmer',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        SpaceBetweenshimmer: {
            control: 'select',
            options: ["0", "10px", "20px", "30px", "40px", "50px"]
        }
    },
} as Meta;

type SpaceBetweenshimmer = "0" | "10px" | "20px" | "30px" | "40px" | "50px";
const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(Shimmer, {
            Theme: StringPropertyMock,
            AccessibilityLabel: StringPropertyMock,
            RowCount: WholeNumberPropertyMock,
            SpacebetweenShimmer: EnumPropertyMock<SpaceBetweenshimmer>,
            items: DataSetMock,
        });

    const itemsLogicalName = '!!!items';

    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: itemsLogicalName,
            LogicalName: itemsLogicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: ItemColumns.Type,
            Attributes: ['myId', ItemColumns.Type, ItemColumns.RowKey, ItemColumns.Height, ItemColumns.Width].map(
                (logicalName) =>
                    ({
                        EntityLogicalName: itemsLogicalName,
                        LogicalName: logicalName,
                    } as ShkoOnline.StringAttributeMetadata),
            ),
        },
    ]);

    mockGenerator.context._parameters.items._Bind(itemsLogicalName, 'items');
    mockGenerator.context._parameters.items._InitItems(args.items || []);

    mockGenerator.metadata.initCanvasItems([
        {
            AccessibilityLabel: args.AccessibilityLabel,
            Theme: args.Theme,
            RowCount: 3,
            SpacebetweenShimmer: args.SpacebetweenShimmer,
        },
    ]);

    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
   
};

export const Primary = Template.bind({});
Primary.args = {
    Theme: JSON.stringify({
        palette: {
            themePrimary: '#test-primary',
        },
    }),
    AccessibilityLabel: "Shimmer Component",
    RowCount: 3,
    SpacebetweenShimmer: "10px",
    items: [
        {
            id: '1',
            [ItemColumns.Height]: 25,
            [ItemColumns.Width]: '3.8',
            [ItemColumns.RowKey]: '1',
            [ItemColumns.Type]: 'circle',
        },
        {
            id: '2',
            [ItemColumns.Height]: 10,
            [ItemColumns.Width]: '5',
            [ItemColumns.RowKey]: '1',
            [ItemColumns.Type]: 'gap',
        },
        {
            id: '3',
            [ItemColumns.Height]: 20,
            [ItemColumns.Width]: '100',
            [ItemColumns.RowKey]: '1',
            [ItemColumns.Type]: 'line',
        },
        {
            id: '4',
            [ItemColumns.Height]: 10,
            [ItemColumns.Width]: '10',
            [ItemColumns.RowKey]: '2',
            [ItemColumns.Type]: 'gap',
        },
        {
            id: '5',
            [ItemColumns.Height]: 20,
            [ItemColumns.Width]: '100',
            [ItemColumns.RowKey]: '2',
            [ItemColumns.Type]: 'line',
        }
    ]
}

Primary.play = async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText("Edit number..."),);
    await waitFor(Delay, { timeout: 2000 });
    console.log(args.checked);
}
