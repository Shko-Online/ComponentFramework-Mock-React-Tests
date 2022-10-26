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
import React from 'react'
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

import { Meta } from "@storybook/react";
import { ComponentFrameworkMockGeneratorReact } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React";
import {
  IInputs,
  IOutputs,
} from "@powercat/context-menu/ContextMenu/generated/ManifestTypes";
import { ContextMenu } from "@powercat/context-menu/ContextMenu"
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { WholeNumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { ItemColumns } from "@powercat/context-menu/ContextMenu/ManifestConstants";
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import { within, waitFor, userEvent } from '@storybook/testing-library';

const Delay = ()=>
  new Promise<void>((resolve)=>{
    setTimeout(()=>resolve(), 1000);
  })

export default {
  title: "PCF Components/ContextMenu",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onClick: { action: 'clicked' },
    ContextSelected: { control: 'select', options:['Item 2',
    'Open',
    'New',
    "Settings",
    'Save',]}

  },
} as Meta;

type AlignmentTypes = "0" /*'center'*/ | "1" /*'left' */ | "2" /*'right'*/;
const Template = (args) => {
  const [,updateArgs] = useArgs();
  const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
    new ComponentFrameworkMockGeneratorReact(ContextMenu, {
      Chevron: TwoOptionsPropertyMock,
      IconColor: StringPropertyMock,
      HoverIconColor: StringPropertyMock,
      IconSize: WholeNumberPropertyMock,
      FontSize: WholeNumberPropertyMock,
      FontColor: StringPropertyMock,
      HoverFontColor: StringPropertyMock,
      FillColor: StringPropertyMock,
      HoverFillColor: StringPropertyMock,
      BorderColor: StringPropertyMock,
      HoverBorderColor: StringPropertyMock,
      BorderRadius: WholeNumberPropertyMock,
      TextAlignment: EnumPropertyMock<AlignmentTypes>,
      AccessibilityLabel: StringPropertyMock,
      Theme: StringPropertyMock,
      InputEvent: StringPropertyMock,
      items: DataSetMock,
    });

  const itemLogicalName = '!!!items';

  mockGenerator.metadata.initMetadata([
    {
      EntitySetName: itemLogicalName,
      LogicalName: itemLogicalName,
      PrimaryIdAttribute: 'myId',
      PrimaryNameAttribute: ItemColumns.DisplayName,
      Attributes: [
        'myId',
        ItemColumns.DisplayName,
        ItemColumns.IconName,
        ItemColumns.IconColor,
        ItemColumns.Enabled,
        ItemColumns.IconOnly
        ].map(
          (logicalName) =>
          ({
            EntityLogicalName: itemLogicalName,
            LogicalName: logicalName,
            } as ShkoOnline.StringAttributeMetadata),
        ),
    },
  ]);

  mockGenerator.context._parameters.items._Bind(itemLogicalName, 'items');
  mockGenerator.context._parameters.items._InitItems(args.items || []);
  mockGenerator.context._parameters.items.openDatasetItem.callsFake((item) => {
    console.log(item.id);
    action('OpenDatasetItem')(item);
    updateArgs({ContextSelected: item.name});
  });
  
  mockGenerator.metadata.initCanvasItems([
    {
      Chevron: true,    
      BorderRadius: 10,
      TextAlignment: "0",
      InputEvent: 'SetFocus' + Math.random().toString(), 
    },
  ]);

  mockGenerator.notifyOutputChanged()
  mockGenerator.ExecuteInit();
  const component = mockGenerator.ExecuteUpdateView();
  return <div style={{width: "200px", height: "100px"}}>{component}</div>;
};



export const Primary = Template.bind({});
Primary.args = {
  
  items: [{
    myId: '1',
      [ItemColumns.DisplayName]: 'Item 2',
      [ItemColumns.IconName]: "World",
      [ItemColumns.IconColor]: 'green',
    },{
    id: '2',
   
    [ItemColumns.DisplayName]: 'Open',
    [ItemColumns.IconName]: "OpenInNewWindow",
    [ItemColumns.IconColor]: "blue",
},{
  myId: '3',
  
    [ItemColumns.DisplayName]: 'New',
    [ItemColumns.IconName]: "NewFolder",
    [ItemColumns.IconColor]: 'red',
},

  {
  myId: '4',
    [ItemColumns.DisplayName]: "Settings",
    [ItemColumns.IconName]: "Settings",
    [ItemColumns.IconColor]: "peach",
    [ItemColumns.Enabled]: true,
    [ItemColumns.IconOnly]: true,
  },
   {
    myId: '5',
      [ItemColumns.DisplayName]: 'Save',
      [ItemColumns.IconName]: 'Save',
      [ItemColumns.IconColor]: 'black',
      [ItemColumns.Enabled]: true,
    [ItemColumns.IconOnly]: true,
  },
  ]

};
Primary.play = async({canvasElement, args}) => {
  const canvas  = within(canvasElement);
  await waitFor(Delay, {timeout: 2000});
await userEvent.click( canvas.getByText("Item 2"));
await waitFor(Delay, {timeout: 2000});
console.log(args.checked); 
}
