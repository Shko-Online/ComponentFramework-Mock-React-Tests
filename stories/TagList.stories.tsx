/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

import { Meta } from '@storybook/react';
import { ComponentFrameworkMockGeneratorReact, StringPropertyMock, WholeNumberPropertyMock, EnumPropertyMock, DataSetMock } from '@shko.online/componentframework-mock';
import { IInputs, IOutputs } from '@powercat/tag-list/TagList/generated/ManifestTypes';
import { TagList } from '@powercat/tag-list/TagList';
import { ItemColumns } from '@powercat/tag-list/TagList/ManifestConstants';

export default {
    title: 'PCF Components/TagList',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        textAlignment: {
            control: 'select',
            options: ["0", "1", "2"]
        }
    },

} as Meta;

type TextAlignment = "0" | "1" | "2";

const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(TagList, {
            SelectedKey: StringPropertyMock,
            Theme: StringPropertyMock,
            BorderRadius: WholeNumberPropertyMock,
            TextAlignment: EnumPropertyMock<TextAlignment>,
            FontSize: WholeNumberPropertyMock,
            ItemHeight: WholeNumberPropertyMock,
            MaxHeight: WholeNumberPropertyMock,
            AccessibilityLabel: StringPropertyMock,
            items: DataSetMock,
        });

    const itemsLogicalName = '!!!items';
  
    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: itemsLogicalName,
            LogicalName: itemsLogicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: ItemColumns.DisplayName,
            Attributes: ['myId', ItemColumns.DisplayName, ItemColumns.IconName, ItemColumns.IconColor,ItemColumns.BackgroundColor,ItemColumns.Key,ItemColumns.TextColor,ItemColumns.IconOnly,ItemColumns.Enabled].map(
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
            Theme: args.Theme,
            BorderRadius: args.BorderRadius,
            TextAlignment: args.textAlignment,
            FontSize: args.FontSize, 
            ItemHeight: args.ItemHeight,
            MaxHeight: args.MaxHeight,
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
    BorderRadius: 2,
    FontSize: 20,
    ItemHeight: 30,
    MaxHeight: 50,
    textAlignment: "1",
    items: [{
        myId: '1',
        [ItemColumns.Key]: 'commandOpen',
        [ItemColumns.DisplayName]: 'Open',
        [ItemColumns.IconName]: 'FolderOpen',
        [ItemColumns.IconColor]: 'purple',
        [ItemColumns.Enabled]: true,
        [ItemColumns.IconOnly]: false,
        [ItemColumns.BackgroundColor]: "pink",
        [ItemColumns.TextColor]: 'purple'
    },
    {
        myId: '2',
        [ItemColumns.Key]: 'commandNew',
        [ItemColumns.DisplayName]: 'New',
        [ItemColumns.IconName]: 'OpenInNewWindow',
        [ItemColumns.IconColor]: 'orange',
        [ItemColumns.Enabled]: true,
        [ItemColumns.IconOnly]: true,
        [ItemColumns.BackgroundColor]: "yellow",
        [ItemColumns.TextColor]: 'blue'
    },
    {
        myId: '3',
        [ItemColumns.Key]: 'commandSave',
        [ItemColumns.DisplayName]: 'Save',
        [ItemColumns.IconName]: 'Save',
        [ItemColumns.IconColor]: 'dark green',
        [ItemColumns.Enabled]: false,
        [ItemColumns.IconOnly]: false,
        [ItemColumns.BackgroundColor]: "lime",
        [ItemColumns.TextColor]: 'dark green'
    },
    ]
};