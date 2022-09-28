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

import { initializeIcons } from "@fluentui/react/lib/Icons";

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
import { ItemColumns } from "@powercat/command-bar/CommandBar/ManifestConstants";
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
      const row = new EntityRecord(undefined, item.id, item[ItemColumns.DisplayName]);
      row.columns["id"] = item.id;
      row.columns[ItemColumns.DisplayName] = item[ItemColumns.DisplayName];
      row.columns[ItemColumns.Key] = item[ItemColumns.Key];
      row.columns[ItemColumns.IconName] = item[ItemColumns.IconName];
      row.columns[ItemColumns.IconColor]=item[ItemColumns.IconColor];
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
      alias: "ItemDisplayName",
      dataType: "SingleLine.Text",
      displayName: "ItemDisplayName",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemKey",
      dataType: "SingleLine.Text",
      displayName: "ItemKey",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemEnabled",
      dataType: "SingleLine.Text",
      displayName: "ItemEnabled",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemVisible",
      dataType: "SingleLine.Text",
      displayName: "ItemVisible",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemChecked",
      dataType: "SingleLine.Text",
      displayName: "ItemChecked",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemSplit",
      dataType: "SingleLine.Text",
      displayName: "ItemSplit",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemIconName",
      dataType: "SingleLine.Text",
      displayName: "ItemIconName",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemIconColor",
      dataType: "SingleLine.Text",
      displayName: "ItemIconColor",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemIconOnly",
      dataType: "SingleLine.Text",
      displayName: "ItemIconOnly",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemOverflow",
      dataType: "SingleLine.Text",
      displayName: "ItemOverflow",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemFarItem",
      dataType: "SingleLine.Text",
      displayName: "ItemFarItem",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemHeader",
      dataType: "SingleLine.Text",
      displayName: "ItemHeader",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemTopDivider",
      dataType: "SingleLine.Text",
      displayName: "ItemTopDivider",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemDivider",
      dataType: "SingleLine.Text",
      displayName: "ItemDivider",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
    {
      alias: "ItemParentKey",
      dataType: "SingleLine.Text",
      displayName: "ItemParentKey",
      name: null,
      order: -1,
      visualSizeFactor: 1,
    },
  ],
  items: [
    {
      id: "1",
      [ItemColumns.DisplayName]: "OpenPane",
      [ItemColumns.Key]: "OpenPane",

      [ItemColumns.IconName]: "OpenPane",
      [ItemColumns.IconColor]: "blue",
      
    },
    {
      id: "2",
      [ItemColumns.DisplayName]: "OpenInNewWindow",
      [ItemColumns.Key]: "OpenInNewWindow",

      [ItemColumns.IconName]: "OpenInNewWindow",
      [ItemColumns.IconColor]: "blue",
  
    },
    {
      id: "3",
      [ItemColumns.Key]: "commandSave",
      [ItemColumns.DisplayName]: "Save",
      [ItemColumns.IconName]: "Save",
      [ItemColumns.IconColor]: "green",

    },

    {
      id: "5",
      [ItemColumns.Key]: "commandSettings",
      [ItemColumns.DisplayName]: "Settings",
      [ItemColumns.IconName]: "Settings",
      [ItemColumns.IconColor]: "black",

    },
    {
      id: "6",
      [ItemColumns.Key]: "commandSaveAndClose",
      [ItemColumns.DisplayName]: "SaveAndClose",
      [ItemColumns.IconName]: "Save",
      [ItemColumns.IconColor]: "green",

    },
    // Sub Items Second Level
    {
      id: "7",
      [ItemColumns.Key]: "commandUpload",
      [ItemColumns.DisplayName]: "Upload",
      [ItemColumns.IconName]: "Upload",
      [ItemColumns.IconColor]: "blue",

    },
    {
      id: "8",
      [ItemColumns.Key]: "commandDownload",
      [ItemColumns.DisplayName]: "Download",
      [ItemColumns.IconName]: "Download",
      [ItemColumns.IconColor]: "red",      
    },
  ],
  theme: '{"palette": {"themePrimary": "#test-primary"}}',
  inputEvent: "SetFocus",
};
