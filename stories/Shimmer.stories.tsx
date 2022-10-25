/*
  Unless explicitly acquired and licensed from Licensor under another
  license, the contents of this file are subject to the Reciprocal Public
  License ("RPL") Version 1.5, or subsequent versions as allowed by the RPL,
  and You may not copy or use this file in either source code or executable
  form, except in compliance with the terms and conditions of the RPL.

  All software distributed under the RPL is provided strictly on an "AS
  IS" basis, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND
  LICENSOR HEREBY DISCLAIMS ALL SUCH WARRANTIES, INCLUDING WITHOUT
  LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
  PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. See the RPL for specific
  language governing rights and limitations under the RPL. 
*/

import { Meta } from "@storybook/react";
import { ComponentFrameworkMockGeneratorReact } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React";
import {
    IInputs,
    IOutputs,
} from "@powercat/shimmer/Shimmer/generated/ManifestTypes";
import { Shimmer } from "@powercat/shimmer/Shimmer"
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { WholeNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock';
import { EnumPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { ItemColumns } from "@powercat/shimmer/Shimmer/ManifestConstants";
import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
import { within, waitFor, userEvent } from '@storybook/testing-library';

const Delay = () =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
    })

export default {
    title: 'PCF Components/Shimmer',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
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

    
    mockGenerator.metadata.initCanvasItems([
        {
            AccessibilityLabel: args.AccessibilityLabel,
            Theme: args.Theme,
            RowCount: 3,
            SpacebetweenShimmer: args.SpacebetweenShimmer,
        },
    ]);
    
    var displayNameMetadata =
    mockGenerator.metadata.getAttributeMetadata('!!items', ItemColumns.Type) ||
    ({ EntityLogicalName: '!!items', LogicalName: ItemColumns.Type } as ShkoOnline.StringAttributeMetadata);
mockGenerator.metadata.upsertAttributeMetadata('!!items', displayNameMetadata);
mockGenerator.metadata.initItems({
    '@odata.context': '#!!items',
    value: args.items || [],
});
   
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
