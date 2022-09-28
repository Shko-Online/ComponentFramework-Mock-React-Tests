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
  argTypes: {},
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
const Records = mockGenerator.context.parameters.records as  DataSetMock;
const Columns = mockGenerator.context.parameters.columns as DataSetMock;

Columns.columns=args.columns || [] ;
Columns.initRecords( (args.itemscolumns || []).map((item) => {
  const row = new EntityRecord(undefined, item.id, item.ColDisplayName);
  row.columns["id"] = item.id;
  row.columns[ColumnsColumns.ColDisplayName] = item[ColumnsColumns.ColDisplayName]
  row.columns[ColumnsColumns.ColWidth] = item[ColumnsColumns.ColWidth];

  return row;
}))
Records.columns=args.records || [] ;
Records.initRecords( (args.itemsrecords || []).map((item) => {
  const row = new EntityRecord(undefined, item.id, item.name );
  row.columns["id"] = item.id;
  row.columns[RecordsColumns.RecordKey] = item[RecordsColumns.RecordKey];
  row.columns["name"] = item.name;
  return row;
}))
 




mockGenerator.context.mode.allocatedHeight = 200;
mockGenerator.context.mode.allocatedWidth = 200;
    mockGenerator.ExecuteInit();
    const Component = mockGenerator.ExecuteUpdateView();
    return Component;

 }
 export const Primary = Template.bind({});
Primary.args={    
  columns: [
    {displayName: 'ColDisplayName',name: null, dataType: 'SingleLine.Text', alias: 'ColDisplayName',order: -1,visualSizeFactor:1, },
    {displayName: 'ColWidth', name: null, dataType: 'SingleLine.Text', alias: 'ColWidth', order: -1, visualSizeFactor: 1,},   
      ],
  itemcolumns:[
    {
      id: "1",
      [ColumnsColumns.ColDisplayName]: 'Name',   
      [ColumnsColumns.ColWidth]: '100',
    },
    {
      id: "2",
      [ColumnsColumns.ColDisplayName]: 'Name2',   
      [ColumnsColumns.ColWidth]: '100',
    },
  ],
  records:[
    {displayName: 'RecordKey', name: null, dataType: 'SingleLine.Text', alias: 'RecordKey', order: -1, visualSizeFactor:1,},
    {displayName: 'RecordCanSelect', name: null, dataType: 'SingleLine.Text', alias: 'RecordCanSelect', order: -1,visualSizeFactor:1, },
    {displayName: 'RecordSelected', name: null, dataType: 'SingleLine.Text', alias: 'RecordSelected', order: -1,visualSizeFactor:1,}
  ],
  itemrecords:[
    {
      id: "1",
      [RecordsColumns.RecordKey]:"Option",
      name: "Row1",
    },
    {
      id: "2",
      [RecordsColumns.RecordKey]:"Props",
      name: "Row2",
    },
  ],

};