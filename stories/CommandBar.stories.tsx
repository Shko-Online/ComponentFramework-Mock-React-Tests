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
import { CommandBar } from "@powercat/command-bar/CommandBar";
import {
  IInputs,
  IOutputs,
} from "@powercat/command-bar/CommandBar/generated/ManifestTypes";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import resourse from "@powercat/command-bar/CommandBar/strings/CommandBar.1033.resx";

import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
import { action } from "@storybook/addon-actions";
export default {
  title: "PCF Components/CommandBar",
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template = (args) => {
  const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
    new ComponentFrameworkMockGeneratorReact(CommandBar, {
      Theme: StringPropertyMock,
      AccessibilityLabel: StringPropertyMock,
      InputEvent: StringPropertyMock,
      items: DataSetMock,
    });
  const items = mockGenerator.context.parameters.items as DataSetMock;
  items.columns = args.columns || [];

  items.initRecords(
    (args.items || []).map((item) => {
      const row = new EntityRecord("test", item.id, item.itemDisplayName);
      row.columns["id"] = item.id;
      row.columns["ItemDisplayName"] = item.itemDisplayName;
      row.columns["ItemKey"] = item.itemKey;
      row.columns["ItemIconName"] = item.itemIconName;
      row.columns["ItemIconColor"] = item.itemIconColor;
      row.columns["ItemEnabled"] = item.itemEnabled;
      row.columns["ItemIconOnly"] = item.itemIconOnly;
      row.columns["ItemOverflow"] = item.overflow;
      row.columns["ItemFarItem"] = item.farItem;
      row.columns["ItemVisible"]= item.visible;
      return row;
    })
  );
  items.openDatasetItem.callsFake((item) => {
    console.log(item.id);
    action("OpenDatasetItem")(item);
  });
  const theme = mockGenerator.context.parameters.Theme as StringPropertyMock;

  const accessibility = mockGenerator.context.parameters
    .AccessibilityLabel as StringPropertyMock;
   const Theme = mockGenerator.context.parameters.Theme as StringPropertyMock;
  Theme.setValue(args.theme);
  const InputEvent = mockGenerator.context.parameters
    .InputEvent as StringPropertyMock;
  InputEvent.setValue(args.inputEvent);

  mockGenerator.context.mode.allocatedHeight = 200;
  mockGenerator.context.mode.allocatedWidth = 200;
  mockGenerator.context.mode.isVisible = true;
  mockGenerator.context.mode.isControlDisabled = false;

 
  mockGenerator.SetControlResource(resourse);
  mockGenerator.ExecuteInit();
  const Component = mockGenerator.ExecuteUpdateView();
  return Component;
};
export const Primary = Template.bind({});
Primary.args = {
  colums: [
    {
      alias: "alias1",
      dataType: "number",
      displayName: "ItemKey",
      name: "alias",
      order: 1,
      visualSizeFactor: 200,
    },
    {
      alias: "alias2",
      dataType: "string",
      displayName: "ItemDisplayName",
      name: "alias2",
      order: 2,
      visualSizeFactor: 200,
    },
    {
      alias: "alias3",
      dataType: "string",
      displayName: "ItemIconName",
      name: "alias3",
      order: 3,
      visualSizeFactor: 200,
    },
    {
      alias: "alias4",
      dataType: "string",
      displayName: "ItemIconColor",
      name: "alias4",
      order: 4,
      visualSizeFactor: 200,
    },
    {
      alias: "alias5",
      dataType: "boolean",
      displayName: "ItemEnabled",
      name: "alias5",
      order: 5,
      visualSizeFactor: 200,
    },
    {
      alias: "alias6",
      dataType: "boolean",
      displayName: "ItemIconOnly",
      name: "alias6",
      order: 6,
      visualSizeFactor: 200,
    },
    {
      alias: "alias7",
      dataType: "boolean",
      displayName: "overflow",
      name: "alias7",
      order: 7,
      visualSizeFactor: 200,
    },
    {
      alias: "alias8",
      dataType: "boolean",
      displayName: "farItem",
      name: "alias8",
      order: 8,
      visualSizeFactor: 200,
    },
    {
        alias: "alias9",
        dataType: "boolean",
        displayName: "visble",
        name: "alias9",
        order: 9,
        visualSizeFactor: 200,
      },
  ],
  items: [
    {
      id: "1",
      itemKey: 1,
      itemDisplayName: "text1",
      itemIconName: "Open",
      itemIconColor: "blue",
      itemEnabled: true,
      itemIconOnly: false,
      overflow: false,
      farItem: false,
      visible: true,
    },
    {
      id: "2",
      itemKey: 2,
      itemDisplayName: "text2",
      itemIconName: "New",
      itemIconColor: "red",
      itemEnabled: false,
      itemIconOnly: false,
      overflow: true,
      farItem: true,
      visible: true,
    },
  ],
  theme: '{"palette": {"themePrimary": "#test-primary"}}',
  inputEvent: "Set Focus",
};
