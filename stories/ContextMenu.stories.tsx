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

import { Meta } from "@storybook/react";
import { ComponentFrameworkMockGeneratorReact } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React";
import {
  IInputs,
  IOutputs,
} from "@powercat/context-menu/ContextMenu/generated/ManifestTypes";
import {ContextMenu} from "@powercat/context-menu/ContextMenu"
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { WholeNumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
import { ItemColumns } from "@powercat/context-menu/ContextMenu/ManifestConstants";


export default {
  title: "PCF Components/ContextMenu",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;

type AlignmentTypes = "0" /*'center'*/ | "1" /*'left' */ | "2" /*'right'*/; 
const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
      new ComponentFrameworkMockGeneratorReact(ContextMenu, {
      Chevron: TwoOptionsPropertyMock,
      IconColor: StringPropertyMock,
      HoverIconColor: StringPropertyMock,
      IconSize: WholeNumberPropertyMock,
      FontSize:  WholeNumberPropertyMock,
      FontColor:  StringPropertyMock,
      HoverFontColor:  StringPropertyMock,
      FillColor:  StringPropertyMock,
      HoverFillColor:  StringPropertyMock,
      BorderColor:  StringPropertyMock,
      HoverBorderColor:  StringPropertyMock,
      BorderRadius:  WholeNumberPropertyMock,
      TextAlignment: EnumPropertyMock<AlignmentTypes>,
      AccessibilityLabel:  StringPropertyMock,
      Theme:  StringPropertyMock,
      InputEvent:  StringPropertyMock,
      items:DataSetMock,
    });

    const Chevron = mockGenerator.context.parameters.Chevron as TwoOptionsPropertyMock;
    Chevron.setValue(true);
    const IconColor = mockGenerator.context.parameters.IconColor as StringPropertyMock;
    IconColor.setValue(args.IconColor);
    const BorderRadius = mockGenerator.context.parameters.BorderRadius as WholeNumberPropertyMock;
    BorderRadius.setValue(10);
    const TextAlignment = mockGenerator.context.parameters.TextAlignment as EnumPropertyMock<AlignmentTypes>;
    TextAlignment.setValue("0");
    const InputEvent = mockGenerator.context.parameters.InputEvent as StringPropertyMock;
    InputEvent.setValue('SetFocus' + Math.random().toString());
    const items = mockGenerator.context.parameters.items as DataSetMock;
    items.columns = [{"displayName":"ItemDisplayName","name":null,"dataType":"SingleLine.Text","alias":"ItemDisplayName","order":-1,"visualSizeFactor":1},{"displayName":"ItemKey","name":null,"dataType":"SingleLine.Text","alias":"ItemKey","order":-1,"visualSizeFactor":1},{"displayName":"ItemEnabled","name":null,"dataType":"SingleLine.Text","alias":"ItemEnabled","order":-1,"visualSizeFactor":1},{"displayName":"ItemVisible","name":null,"dataType":"SingleLine.Text","alias":"ItemVisible","order":-1,"visualSizeFactor":1},{"displayName":"ItemChecked","name":null,"dataType":"SingleLine.Text","alias":"ItemChecked","order":-1,"visualSizeFactor":1},{"displayName":"ItemIconName","name":null,"dataType":"SingleLine.Text","alias":"ItemIconName","order":-1,"visualSizeFactor":1},{"displayName":"ItemIconColor","name":null,"dataType":"SingleLine.Text","alias":"ItemIconColor","order":-1,"visualSizeFactor":1},{"displayName":"ItemIconOnly","name":null,"dataType":"SingleLine.Text","alias":"ItemIconOnly","order":-1,"visualSizeFactor":1},{"displayName":"ItemHeader","name":null,"dataType":"SingleLine.Text","alias":"ItemHeader","order":-1,"visualSizeFactor":1},{"displayName":"ItemTopDivider","name":null,"dataType":"SingleLine.Text","alias":"ItemTopDivider","order":-1,"visualSizeFactor":1},{"displayName":"ItemDivider","name":null,"dataType":"SingleLine.Text","alias":"ItemDivider","order":-1,"visualSizeFactor":1},{"displayName":"ItemParentKey","name":null,"dataType":"SingleLine.Text","alias":"ItemParentKey","order":-1,"visualSizeFactor":1}];
  items.initRecords(
    (args.items || []).map((item)=> {
      const row = new EntityRecord(undefined, item.id, item[ItemColumns.DisplayName]);
      row.columns  [ItemColumns.Key]=item  [ItemColumns.Key];
      row.columns    [ItemColumns.DisplayName]=item    [ItemColumns.DisplayName];
      row.columns[ItemColumns.IconName] = item[ItemColumns.IconName];
      row.columns [ItemColumns.Enabled]=item [ItemColumns.Enabled];
    row.columns [ItemColumns.IconOnly] = item [ItemColumns.IconOnly]; 
      return row;
    })
  );


mockGenerator.ExecuteInit();
const component = mockGenerator.ExecuteUpdateView();
return component;
};

export const Primary = Template.bind({});
Primary.args = {
  IconColor: '#ffffff',
  items: [{
    id: '1',
      [ItemColumns.DisplayName]: 'Item 2',
      [ItemColumns.IconName]: "World",
      [ItemColumns.IconColor]: 'green',
    },{
    id: '2',
   
    [ItemColumns.DisplayName]: 'Open',
    [ItemColumns.IconName]: "OpenInNewWindow",
    [ItemColumns.IconColor]: "blue",
},{
  id: '3',
  
    [ItemColumns.DisplayName]: 'New',
    [ItemColumns.IconName]: "NewFolder",
    [ItemColumns.IconColor]: 'blue',
},

  {
  id: '4',
    [ItemColumns.DisplayName]: "Settings",
    [ItemColumns.IconName]: "Settings",
    [ItemColumns.IconColor]: "green",
    [ItemColumns.Enabled]: true,
    [ItemColumns.IconOnly]: true,
  },
   {
    id: '5',
      [ItemColumns.DisplayName]: 'Save',
      [ItemColumns.IconName]: 'Save',
      [ItemColumns.IconColor]: 'green',
      [ItemColumns.Enabled]: true,
    [ItemColumns.IconOnly]: true,
  },
]  
  
};
