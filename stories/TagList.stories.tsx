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

import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

import { Meta } from '@storybook/react';
import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import { IInputs, IOutputs } from '@powercat/tag-list/TagList/generated/ManifestTypes';
import { TagList } from '@powercat/tag-list/TagList';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { WholeNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock';
import { EnumPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { EntityRecord } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock';
import { ItemColumns } from '@powercat/tag-list/TagList/ManifestConstants';


export default {
    title: 'PCF Components/TagList',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
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
    
    const logicalName = '!!!items';
    mockGenerator.context._parameters.items._Bind(logicalName, 'items');
    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: logicalName,
            LogicalName: logicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: ItemColumns.DisplayName,
            Attributes: [
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.DisplayName,
                } as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: 'myId',
                } as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.IconName,
                } as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.IconColor,
                }as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.BackgroundColor,
                }as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.Key,
                }as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.TextColor,
                }as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.IconOnly,
                }as ShkoOnline.BooleanAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.Enabled,
                }as ShkoOnline.BooleanAttributeMetadata,
            ],
        },
    ]);

    mockGenerator.metadata.initItems({
        '@odata.context': '#!!!items',
        value: args.items || [],
    });
    mockGenerator.ExecuteInit();
    const component = mockGenerator.ExecuteUpdateView();
    return component;
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