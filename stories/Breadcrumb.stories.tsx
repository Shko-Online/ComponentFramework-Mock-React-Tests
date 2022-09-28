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
} from "@powercat/breadcrumb/Breadcrumb/generated/ManifestTypes";
import { Breadcrumb } from "@powercat/breadcrumb/Breadcrumb";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { WholeNumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
import { action } from '@storybook/addon-actions';


export default {
  title: "PCF Components/Breadcrumb",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;
const Template = (args) => {
  const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
    new ComponentFrameworkMockGeneratorReact(Breadcrumb, {
      items: DataSetMock,
      AccessibilityLabel: StringPropertyMock,
      MaxDisplayedItems: WholeNumberPropertyMock,
      OverflowIndex: WholeNumberPropertyMock,
      InputEvent: StringPropertyMock,
      Theme: StringPropertyMock,
    });

  const items = mockGenerator.context.parameters.items as DataSetMock;
  items.initRecords(
    (args.items || []).map((item) => {
      const row = new EntityRecord("test", item.id, item.ItemDisplayName);
      row.columns["id"] = item.id;
      row.columns["ItemDisplayName"] = item.ItemDisplayName;
      row.columns["ItemKey"] = item.ItemKey;
      row.columns["Clickable"] = item.Clickable;
      return row;
    })
  );

  items.openDatasetItem.callsFake((item) => {
    console.log(item.id);
    action('OpenDatasetItem')(item);
  });

  const accessibility = mockGenerator.context.parameters
    .AccessibilityLabel as StringPropertyMock;
  const displayedItems = mockGenerator.context.parameters
    .MaxDisplayedItems as WholeNumberPropertyMock;
  const overflowindex = mockGenerator.context.parameters
    .OverflowIndex as WholeNumberPropertyMock;
  const inputElement = mockGenerator.context.parameters
    .InputEvent as StringPropertyMock;
  const theme = mockGenerator.context.parameters.Theme as StringPropertyMock;

  mockGenerator.ExecuteInit();
  const Component = mockGenerator.ExecuteUpdateView();
  return Component;
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { id: "1", ItemKey: 1, ItemDisplayName: "text1" , Clickable: true},
    { id: "2", ItemKey: 2, ItemDisplayName: "text2" , Clickable: false},
  ],
  
};
