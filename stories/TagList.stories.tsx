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
    onClick: {action: 'clicked'}
},

} as Meta;

type TextAlignment = "0" | "1" | "2";

const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(TagList, {
SelectedKey: StringPropertyMock,
Theme: StringPropertyMock,
BorderRadius:WholeNumberPropertyMock,
TextAlignment: EnumPropertyMock<TextAlignment>,
FontSize:WholeNumberPropertyMock,
ItemHeight: WholeNumberPropertyMock,
MaxHeight: WholeNumberPropertyMock,
AccessibilityLabel: StringPropertyMock,
items: DataSetMock,
        });     
        const Theme = mockGenerator.context.parameters.Theme as StringPropertyMock;
        Theme.setValue(args.Theme);
        const BorderRadius = mockGenerator.context.parameters.BorderRadius as WholeNumberPropertyMock;
        BorderRadius.setValue(args.BorderRadius);
        const TextAlignment = mockGenerator.context.parameters.TextAlignment as StringPropertyMock;
        TextAlignment.setValue("2");
        const FontSize = mockGenerator.context.parameters.FontSize as WholeNumberPropertyMock;
        FontSize.setValue(args.FontSize);
        const ItemHeight = mockGenerator.context.parameters.ItemHeight as WholeNumberPropertyMock;
        ItemHeight.setValue(args.ItemHeight);
        const MaxHeight = mockGenerator.context.parameters.MaxHeight as WholeNumberPropertyMock;
        MaxHeight.setValue(args.MaxHeight);
        const items = mockGenerator.context.parameters.items as DataSetMock;
        items.initRecords(
            (args.items || []).map((item) => {
                const row = new EntityRecord('',item.id, item[ItemColumns.Key]);
                row.columns[ItemColumns.Key] = item[ItemColumns.Key];
                row.columns[ItemColumns.DisplayName] = item[ItemColumns.DisplayName];
                row.columns[ItemColumns.IconName] = item[ItemColumns.IconName];
                row.columns[ItemColumns.IconColor] = item[ItemColumns.IconColor];
                row.columns[ItemColumns.Enabled] = item[ItemColumns.Enabled];
                row.columns[ItemColumns.TextColor] = item[ItemColumns.TextColor];
                row.columns[ItemColumns.BackgroundColor] = item[ItemColumns.BackgroundColor];
                row.columns[ItemColumns.BorderColor] = item[ItemColumns.BorderColor];
                row.columns[ItemColumns.IconOnly] = item[ItemColumns.IconOnly];
                row.columns[ItemColumns.Visible] = item[ItemColumns.Visible];
                return row;
               })
            );
            
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
    items: [{
         id :'1',
            [ItemColumns.Key]: 'commandOpen',
            [ItemColumns.DisplayName]: 'Open',
            [ItemColumns.IconName]: 'FolderOpen',
            [ItemColumns.IconColor]: 'purple',
            [ItemColumns.Enabled]: true,
            [ItemColumns.IconOnly]: false,
            [ItemColumns.BackgroundColor]: "pink",
            [ItemColumns.TextColor]: 'purple'
        },
     { id: '2',
            [ItemColumns.Key]: 'commandNew',
            [ItemColumns.DisplayName]: 'New',
            [ItemColumns.IconName]: 'OpenInNewWindow',
            [ItemColumns.IconColor]: 'orange',
            [ItemColumns.Enabled]: true,
            [ItemColumns.IconOnly]: true,
            [ItemColumns.BackgroundColor]: "yellow",
            [ItemColumns.TextColor]: 'orange'
        },
     {id: '3',
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