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
} from "@powercat/context-menu/ContextMenu/generated/ManifestTypes";
import {ContextMenu} from "@powercat/context-menu/ContextMenu"
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { DateTimePropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DateTimeProperty.mock";
import { WholeNumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";


export default {
  title: "PCF Components/ContextMenu",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;
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
      TextAlignment: EnumPropertyMock<"0" | "1" | "2">,
      AccessibilityLabel:  StringPropertyMock,
      Theme:  StringPropertyMock,
      InputEvent:  StringPropertyMock,
      items:DataSetMock,
    });

    const items = mockGenerator.context.parameters.items as DataSetMock;
  items.initRecords(
    [1].map((item) => {
      const row = new EntityRecord("test", '1', 'Item 1');
      row.columns['Key']= 'item1';
      row.columns['DisplayName']= 'Item 1';
      row.columns["IconName"]= 'Open';
      row.columns["IconColor"]= 'blue';
      row.columns["Enabled"]= true;
      row.columns["IconOnly"]= false;
      return row;
    })
  );


mockGenerator.ExecuteInit();
const component = mockGenerator.ExecuteUpdateView();
return component;
};
export const Primary = Template.bind({});