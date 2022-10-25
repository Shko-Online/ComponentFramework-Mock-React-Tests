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
import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import { FluentDetailsList } from '@powercat/details-list/DetailsList';
import {
  IInputs,
  IOutputs,
} from "@powercat/details-list/DetailsList/generated/ManifestTypes";
import { WholeNumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
import canvasColumns from './canvasColumns';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { ColumnsColumns } from '@powercat/details-list/DetailsList/ManifestConstants';



const Delay = ()=>
  new Promise<void>((resolve)=>{
    setTimeout(()=>resolve(), 1000);
  })
export default {
  title: "PCF Components/DetailsList",
  argTypes: {
    SelectionType: {
    options: ['0',"1","2"],
    control: { type: 'radio' },
  },},
  parameters: {
    layout: "fullscreen",
  },
} as Meta;
const Template = (args) => {
  const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> = new ComponentFrameworkMockGeneratorReact(
    FluentDetailsList,
    {
      SelectionType: EnumPropertyMock<"0" | "1" | "2">,
      SelectRowsOnFocus: TwoOptionsPropertyMock,
      PageSize: WholeNumberPropertyMock,
      LargeDatasetPaging: TwoOptionsPropertyMock,
      CurrentSortColumn: StringPropertyMock,
      CurrentSortDirection: EnumPropertyMock<"0" | "1">,
      AccessibilityLabel: StringPropertyMock,
      RaiseOnRowSelectionChangeEvent: TwoOptionsPropertyMock,
      InputEvent: StringPropertyMock,
      Theme: StringPropertyMock,
      Compact: TwoOptionsPropertyMock,
      HeaderVisible: TwoOptionsPropertyMock,
      AlternateRowColor: StringPropertyMock,
      SelectionAlwaysVisible: TwoOptionsPropertyMock,
      records: DataSetMock,
      columns: DataSetMock,
    }

  );
  const Records = mockGenerator.context.parameters.records as DataSetMock;
  var displayNameMetadataR =
  mockGenerator.metadata.getAttributeMetadata('!!records', "records") ||
  ({ EntityLogicalName: '!!records', LogicalName: "records"} as ShkoOnline.StringAttributeMetadata);
mockGenerator.metadata.upsertAttributeMetadata('!!records', displayNameMetadataR);
mockGenerator.metadata.initItems({
  '@odata.context': '#!!records',
  value: args.records || [],
});

    mockGenerator.metadata.upsertAttributeMetadata('!!columns', { EntityLogicalName: '!!columns', LogicalName: ColumnsColumns.ColName } as ShkoOnline.StringAttributeMetadata);
   
   
    mockGenerator.metadata.initItems({
        '@odata.context': '#!!columns',
        value: args.columns || [],
    });

  mockGenerator.metadata.initCanvasItems([
    {
      SelectionType: args.SelectionType,
      SelectRowsOnFocus:false,
      PageSize:10,
      LargeDatasetPaging: false,
      CurrentSortColumn: "Name",   
      AccessibilityLabel: "Help", 
      InputEvent: "", 
      Theme: "", 
      AlternateRowColor: "#ff0000", 
      CurrentSortDirection: "1",
      RaiseOnRowSelectionChangeEvent:false,
      Compact:false,
      HeaderVisible:true,
      SelectionAlwaysVisible: true,
    },
  ]);

  mockGenerator.context.mode.allocatedHeight = 200;
  mockGenerator.context.mode.allocatedWidth = 200;
  mockGenerator.ExecuteInit();
  const Component = mockGenerator.ExecuteUpdateView();
  return Component;

}
export const Primary = Template.bind({});
Primary.args = {
  columns: [
    {
      id: "1",
      [ColumnsColumns.ColName]:"Icon",
      [ColumnsColumns.ColDisplayName]:"",
      [ColumnsColumns.ColWidth]:32,
      [ColumnsColumns.ColCellType]:"image",
      [ColumnsColumns.ColImageWidth]:16,
      [ColumnsColumns.ColVerticalAlign]:"top",
      [ColumnsColumns.ColPaddingTop]:4
  },
  {
    id: "2",
    [ColumnsColumns.ColName]:"Name",
      [ColumnsColumns.ColDisplayName]:"Name",
      [ColumnsColumns.ColSortable]:true,
      [ColumnsColumns.ColWidth]:200,
      [ColumnsColumns.ColRowHeader]:true,
      [ColumnsColumns.ColResizable]:true
  },
  {
    id: "3",
    [ColumnsColumns.ColName]:"Description",
      [ColumnsColumns.ColDisplayName]:"Description",
      [ColumnsColumns.ColSortable]:true,
      [ColumnsColumns.ColWidth]:200,
      [ColumnsColumns.ColResizable]:true,
      [ColumnsColumns.ColMultiLine]: true
  },
  {
    id:"4",
    [ColumnsColumns.ColName]:"DateModified",
      [ColumnsColumns.ColDisplayName]:"Date Modified",
      [ColumnsColumns.ColSortable]:true,
      [ColumnsColumns.ColWidth]:200,
      [ColumnsColumns.ColResizable]:true,
      [ColumnsColumns.ColShowAsSubTextOf]:"Name",
      [ColumnsColumns.ColInlineLabel]:"Modified:"
  }
  ],
  records: [
    {  
      id: "-1",
      Index:1,
      Icon:    "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/photo.svg"      ,
      Name: "LoremIpsum.png",
      Number:2314,
      Description: "There was once Lorem and there was Ipsum",
      DateModified: new Date(),
      Status:"Open",
      StatusCol:"green",
      StatusIcon:"icon:SkypeCircleCheck",
      StatusColor:"#4B832D",
      SubText1: "Lorem",
      SubText2: "Ipsum",
      SubText3: "Shko Online"
  }
  ],


};

Primary.play = async({canvasElement, args}) => {
  const canvas  = within(canvasElement);
  await waitFor(Delay, {timeout: 2000});
await userEvent.click( canvas.getByText(""));
}