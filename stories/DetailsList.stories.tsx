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
import { ColumnsColumns, RecordsColumns } from "@powercat/details-list/DetailsList/ManifestConstants";

export default {
  title: "PCF Components/DetailsList",
  argTypes: {
    selectionType: {
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
      SelectionType: EnumPropertyMock<string>,
      SelectRowsOnFocus: TwoOptionsPropertyMock,
      PageSize: WholeNumberPropertyMock,
      LargeDatasetPaging: TwoOptionsPropertyMock,
      CurrentSortColumn: StringPropertyMock,
      CurrentSortDirection: EnumPropertyMock<string>,
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
  const Columns = mockGenerator.context.parameters.columns as DataSetMock;

  Columns.columns = args.columns || [];
  Columns.initRecords((args.itemcolumns || []).map((item) => {
    const row = new EntityRecord(undefined, item.id, item.ColDisplayName);
    row.columns["id"] = item.id;
    row.columns[ColumnsColumns.ColDisplayName] = item[ColumnsColumns.ColDisplayName]
    row.columns[ColumnsColumns.ColWidth] = item[ColumnsColumns.ColWidth];
    row.columns[ColumnsColumns.ColName] = item[ColumnsColumns.ColName];
    row.columns[ColumnsColumns.ColDisplayName]=item[ColumnsColumns.ColDisplayName];
    row.columns[ColumnsColumns.ColName]=item[ColumnsColumns.ColName];
    row.columns[ColumnsColumns.ColShowAsSubTextOf]=item[ColumnsColumns.ColShowAsSubTextOf]
    row.columns[ColumnsColumns.ColLabelAbove]=item[ColumnsColumns.ColLabelAbove];
    row.columns[ColumnsColumns.ColIsBold]=item[ColumnsColumns.ColIsBold];
    row.columns[ColumnsColumns.ColSubTextRow]=item[ColumnsColumns.ColSubTextRow];

    return row;
  }))
  Records.columns = args.records || [];
  Records.initRecords((args.itemrecords || []).map((item) => {
    const row = new EntityRecord(undefined, item.id, item.name);
    row.columns["id"] = item.id;
    row.columns["name"] = item.name;
    row.columns["city"] =item.city;
    row.columns["country"] = item.country;
  

    return row;
  }))

  mockGenerator.context.mode.allocatedHeight = 1000;
  mockGenerator.context.mode.allocatedWidth = 1000;
  mockGenerator.context.mode.isVisible= true;
  mockGenerator.context.mode.isControlDisabled = false;
  mockGenerator.context.parameters.SelectionAlwaysVisible.raw=true;
    const SelectionType = mockGenerator.context.parameters.SelectionType as EnumPropertyMock<string>;
  SelectionType.setValue(args.selectionType);
  mockGenerator.ExecuteInit();
  const Component = mockGenerator.ExecuteUpdateView();
  return Component;

}
export const Primary = Template.bind({});
Primary.args = {
  columns: [
    { displayName: 'ColDisplayName', name: null, dataType: 'SingleLine.Text', alias: 'ColDisplayName', order: -1, visualSizeFactor: 1, },
    { displayName: 'ColWidth', name: null, dataType: 'SingleLine.Text', alias: 'ColWidth', order: -1, visualSizeFactor: 1, },
    { displayName: 'ColShowAsSubTextOf', name: null, dataType: 'SingleLine.Text', alias: 'ColShowAsSubTextOf', order: -1,visualSizeFactor: 1,},
    { displayName: 'ColLabelAbove', name: null, dataType: 'SingleLine.Text', alias: 'ColLabelAbove', order: -1,visualSizeFactor: 1,},
    { displayName: 'ColIsBold', name: null, dataType: 'SingleLine.Text', alias: 'ColIsBold', order: -1, visualSizeFactor: 1,},
    { displayName: 'ColSubTextRow', name: null, dataType: 'SingleLine.Text', alias: 'ColSubTextRow', order: -1, visualSizeFactor: 1,}
  ],
  itemcolumns: [
    {
      id: "1",
      [ColumnsColumns.ColDisplayName]: "Account Name",
      [ColumnsColumns.ColWidth]: 100,
      [ColumnsColumns.ColName]: "name",
      [ColumnsColumns.ColIsBold]: true
    },
    {
      id: "2",
      [ColumnsColumns.ColDisplayName]: "City",
      [ColumnsColumns.ColName]: "city",
      [ColumnsColumns.ColShowAsSubTextOf]:"name",
      [ColumnsColumns.ColLabelAbove]: false,
      [ColumnsColumns.ColIsBold]: true,
      [ColumnsColumns.ColSubTextRow]:1
    },
    {
      id: "3",
      [ColumnsColumns.ColDisplayName]: "Country",
      [ColumnsColumns.ColName]: "country",
      [ColumnsColumns.ColShowAsSubTextOf]:"name",
      [ColumnsColumns.ColLabelAbove]: false,
      [ColumnsColumns.ColIsBold]: true,
      [ColumnsColumns.ColSubTextRow]:1
    },
  ],
  records: [

    { displayName: 'city',name: 'city',  order: 2, dataType: 'SingleLine.Text', alias: 'city',visualSizeFactor: 1,},
    { displayName: 'country', name: 'country', dataType: 'SingleLine.Text', order: 3, alias: 'country',visualSizeFactor: 1,},
    { displayName: 'description', name: 'description', dataType: 'SingleLine.Text', order: 4, alias: 'description',visualSizeFactor: 1,},
    { displayName: 'name', name: 'name', dataType: 'SingleLine.Text', order: 1, alias: 'name',visualSizeFactor: 1,},



  ],
  itemrecords: [
    {
      id: "1",
      name:"Contoso",
      city:"Redmond",
      country:"U.S.",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      expand:false
    },
    {
      id: "2",
      name:"Litware, Inc",
      city:"Dallas",
      country:"U.S.",
      description:"Donec vel pellentesque turpis.",
      expand:false,
    },
  ],
 
    

};