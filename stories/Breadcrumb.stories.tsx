/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

import { Meta } from '@storybook/react';
import { ComponentFrameworkMockGeneratorReact, StringPropertyMock, WholeNumberPropertyMock, DataSetMock } from '@shko.online/componentframework-mock';
import { IInputs, IOutputs } from '@powercat/breadcrumb/Breadcrumb/generated/ManifestTypes';
import { Breadcrumb } from '@powercat/breadcrumb/Breadcrumb';
import { action } from '@storybook/addon-actions';
import { ItemColumns } from '@powercat/breadcrumb/Breadcrumb/ManifestConstants';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'PCF Components/Breadcrumb',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        onClick: { action: 'clicked' },
        LastSelected: { control: 'select', options: ['Text1', 'Text2', 'Text3', 'Text4'] },
    },
} as Meta;
const Template = (args) => {
    const [, updateArgs] = useArgs();
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(Breadcrumb, {
            items: DataSetMock,
            AccessibilityLabel: StringPropertyMock,
            MaxDisplayedItems: WholeNumberPropertyMock,
            OverflowIndex: WholeNumberPropertyMock,
            InputEvent: StringPropertyMock,
            Theme: StringPropertyMock,
        });

    const itemsLogicalName = '!!!items';

    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: itemsLogicalName,
            LogicalName: itemsLogicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: ItemColumns.DisplayName,
            Attributes: ['myId', ItemColumns.DisplayName, ItemColumns.Clickable, ItemColumns.Key].map(
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
    mockGenerator.context._parameters.items.openDatasetItem.callsFake((item) => {
        console.log(item.id);
        action('OpenDatasetItem')(item);
        updateArgs({ LastSelected: item.name });
    });

    mockGenerator.metadata.initCanvasItems([
        {
            AccessibilityLabel: args.accessibility,
            MaxDisplayedItems: args.MaxdisplayedItems,
            OverflowIndex: args.overflowIndex,
            Theme: args.theme,
        },
    ]);

    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
};

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { myId: '1', [ItemColumns.Key]: 1, [ItemColumns.DisplayName]: 'Text1', [ItemColumns.Clickable]: true },
        { myId: '2', [ItemColumns.Key]: 2, [ItemColumns.DisplayName]: 'Text2', [ItemColumns.Clickable]: true },
        { myId: '3', [ItemColumns.Key]: 3, [ItemColumns.DisplayName]: 'Text3', [ItemColumns.Clickable]: true },
        { myId: '4', [ItemColumns.Key]: 4, [ItemColumns.DisplayName]: 'Text4', [ItemColumns.Clickable]: true },
    ],
    overflowIndex: 5,
    accessibility: 'Breadcrumb Component',
    theme: JSON.stringify({
        palette: {
            themePrimary: '#test-primary',
        },
    }),
    MaxdisplayedItems: 4,
};
