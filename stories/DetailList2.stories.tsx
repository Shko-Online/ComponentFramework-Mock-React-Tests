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
import { AttributeMetadataGenerator,ComponentFrameworkMockGeneratorReact,WholeNumberPropertyMock,TwoOptionsPropertyMock,StringPropertyMock,DataSetMock,EnumPropertyMock,EntityRecordMock } from '@shko.online/componentframework-mock';
import { FluentDetailsList } from '@powercat/details-list/DetailsList';
import {
  IInputs,
  IOutputs,
} from "@powercat/details-list/DetailsList/generated/ManifestTypes";

import canvasColumns from './canvasColumns';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { ColumnsColumns, RecordsColumns } from '@powercat/details-list/DetailsList/ManifestConstants';

import { template } from '@babel/core';
import '../powercat-code-components/DetailsList/DetailsList/css/DetailsList.css'

const Delay = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000);
  })
export default {
  title: "PCF Components/DetailsList2",
  argTypes: {
    SelectionType: {
      options: ['0', "1", "2"],
      control: { type: 'radio' },
    },
  },
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


  const columnsLogicalName = '!!!columns';
  mockGenerator.metadata.initMetadata([
    {
      EntitySetName: columnsLogicalName,
      LogicalName: columnsLogicalName,
      PrimaryIdAttribute: 'myId',
      PrimaryNameAttribute: ColumnsColumns.ColDisplayName,
      Attributes: new AttributeMetadataGenerator(columnsLogicalName).AddString(['myId', ColumnsColumns.ColName,
        ColumnsColumns.ColDisplayName,
        ColumnsColumns.ColWidth,
        ColumnsColumns.ColCellType,
        ColumnsColumns.ColImageWidth,
        ColumnsColumns.ColVerticalAlign,
        ColumnsColumns.ColPaddingTop]).Attributes,
    },
  ]);
  mockGenerator.context._parameters.columns._Bind(columnsLogicalName, 'columns');
//   mockGenerator.context._parameters.columns.columns = [
//     {
//         "displayName": "ColDisplayName",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColDisplayName",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColName",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColName",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColWidth",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColWidth",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColCellType",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColCellType",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColHorizontalAlign",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColHorizontalAlign",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColVerticalAlign",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColVerticalAlign",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColMultiLine",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColMultiLine",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColResizable",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColResizable",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColSortable",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColSortable",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColSortBy",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColSortBy",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColIsBold",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColIsBold",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColTagColorColumn",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColTagColorColumn",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColTagBorderColorColumn",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColTagBorderColorColumn",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColHeaderPaddingLeft",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColHeaderPaddingLeft",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColShowAsSubTextOf",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColShowAsSubTextOf",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColPaddingLeft",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColPaddingLeft",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColPaddingTop",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColPaddingTop",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColLabelAbove",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColLabelAbove",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColMultiValueDelimiter",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColMultiValueDelimiter",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColFirstMultiValueBold",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColFirstMultiValueBold",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColInlineLabel",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColInlineLabel",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColHideWhenBlank",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColHideWhenBlank",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColSubTextRow",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColSubTextRow",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColAriaTextColumn",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColAriaTextColumn",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColCellActionDisabledColumn",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColCellActionDisabledColumn",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColImageWidth",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColImageWidth",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColImagePadding",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColImagePadding",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "ColRowHeader",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "ColRowHeader",
//         "order": -1,
//         "visualSizeFactor": 1
//     }
// ]
  mockGenerator.context._parameters.columns._InitItems(args.columns || [],);


  const recordsLogicalName = '!!!records'
  mockGenerator.metadata.initMetadata([
    {
      EntitySetName: recordsLogicalName,
      LogicalName: recordsLogicalName,
      PrimaryIdAttribute: 'myId',
      PrimaryNameAttribute: RecordsColumns.RecordKey,
      Attributes: new AttributeMetadataGenerator(recordsLogicalName).AddString(
        ['myId',
          "RecordKey",
          "RecordCanSelect",
          "RecordSelected",  
          "city",
        "country",
        "description",
        "expand",
        "externalimage",
        "iconimage",
        "id",
        "name",
        "svg",
        "TagColor",
        "TagBorderColor",
    "tags"]).Attributes
    }
  ])


//   ['myId',
//           "RecordKey",
//           "RecordCanSelect",
//           "RecordSelected",
//           "DateModified",
//           "Description",
//           "Icon",
//           "Index",
//           "Name",
//           "Number",
//           "Status",
//           "Expand",
//           "StatusCol",
//           "StatusColor",
//           "StatusIcon",
//           "SubText1",
//           "SubText2",
//           "SubText3",
//           "City",
//           "city",
//         "country",
//         "description",
//         "expand",
//         "externalimage",
//         "iconimage",
//         "id",
//         "name",
//         "svg",
//         "TagColor",
//         "TagBorderColor",]


  mockGenerator.context._parameters.records._Bind(recordsLogicalName, 'records');
//   mockGenerator.context._parameters.records.columns =
//   [
//     {
//         "displayName": "RecordKey",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "RecordKey",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "RecordCanSelect",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "RecordCanSelect",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "displayName": "RecordSelected",
//         "name": null,
//         "dataType": "SingleLine.Text",
//         "alias": "RecordSelected",
//         "order": -1,
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "country",
//         "displayName": "country",
//         "order": 1,
//         "dataType": "SingleLine.Text",
//         "alias": "country",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "city",
//         "displayName": "city",
//         "order": 2,
//         "dataType": "SingleLine.Text",
//         "alias": "city",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "description",
//         "displayName": "description",
//         "order": 3,
//         "dataType": "SingleLine.Text",
//         "alias": "description",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "expand",
//         "displayName": "expand",
//         "order": 4,
//         "dataType": "TwoOptions",
//         "alias": "expand",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "externalimage",
//         "displayName": "externalimage",
//         "order": 5,
//         "dataType": "SingleLine.Text",
//         "alias": "externalimage",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "iconimage",
//         "displayName": "iconimage",
//         "order": 6,
//         "dataType": "SingleLine.Text",
//         "alias": "iconimage",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "id",
//         "displayName": "id",
//         "order": 7,
//         "dataType": "SingleLine.Text",
//         "alias": "id",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "name",
//         "displayName": "name",
//         "order": 8,
//         "dataType": "SingleLine.Text",
//         "alias": "name",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "svg",
//         "displayName": "svg",
//         "order": 9,
//         "dataType": "SingleLine.Text",
//         "alias": "svg",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "TagBorderColor",
//         "displayName": "TagBorderColor",
//         "order": 10,
//         "dataType": "SingleLine.Text",
//         "alias": "TagBorderColor",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "TagColor",
//         "displayName": "TagColor",
//         "order": 11,
//         "dataType": "SingleLine.Text",
//         "alias": "TagColor",
//         "visualSizeFactor": 1
//     },
//     {
//         "name": "tags",
//         "displayName": "tags",
//         "order": 12,
//         "dataType": "Object",
//         "alias": "tags",
//         "visualSizeFactor": 1
//     }
// ]
  mockGenerator.context._parameters.records._InitItems(args.records || []);

  mockGenerator.metadata.initCanvasItems([
    {
      SelectionType: args.SelectionType,
      SelectRowsOnFocus: false,
      PageSize: 2000,
      LargeDatasetPaging: true,
      CurrentSortColumn: "Name",
      AccessibilityLabel: "Help",
      InputEvent: "",
      Theme: "",
      AlternateRowColor: "#89cff0",
      CurrentSortDirection: "1",
      RaiseOnRowSelectionChangeEvent: false,
      Compact: false,
      HeaderVisible: true,
      SelectionAlwaysVisible: true,
    },
  ]);

  mockGenerator.context.mode.allocatedHeight = 200;
  mockGenerator.context.mode.allocatedWidth = 200;
  mockGenerator.ExecuteInit();
  const Component = mockGenerator.ExecuteUpdateView();
  return Component;

}

export const CellTypes = Template.bind({});
CellTypes.args = {
  records:[
    {
        "myId": "7454",
        "RecordKey": null,
        "RecordCanSelect": null,
        "RecordSelected": null,
        "city": "Redmond",
        "country": "U.S.",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "expand": false,
        "externalimage": "https://via.placeholder.com/100x70",
        "iconimage": "icon:SkypeCircleCheck",
        "id": "1",
        "name": "Contoso",
        "svg": "data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20style%3D%27margin%3A%20auto%3B%20display%3A%20block%3B%20shape-rendering%3A%20auto%3B%27%20width%3D%27200px%27%20height%3D%27200px%27%20viewBox%3D%270%200%20100%20100%27%20preserveAspectRatio%3D%27xMidYMid%27%3E%0D%0A%3Ccircle%20cx%3D%2750%27%20cy%3D%2750%27%20fill%3D%27none%27%20stroke%3D%27%230078d4%27%20stroke-width%3D%274%27%20r%3D%2731%27%20stroke-dasharray%3D%27146.08405839192537%2050.69468613064179%27%3E%0D%0A%20%20%3CanimateTransform%20attributeName%3D%27transform%27%20type%3D%27rotate%27%20repeatCount%3D%27indefinite%27%20dur%3D%271.2048192771084336s%27%20values%3D%270%2050%2050%3B360%2050%2050%27%20keyTimes%3D%270%3B1%27%3E%3C%2FanimateTransform%3E%0D%0A%3C%2Fcircle%3E%0D%0A%3C%2Fsvg%3E",
        "TagColor": "rgb(0, 183, 195)",
        "TagBorderColor": "rgb(0,137,147)",
        "tags": [
            {
                "Value": "#PowerApps"
            },
            {
                "Value": "#PowerPlatform"
            }
        ]
    },
    {
        "myId": "7455",
        "RecordKey": null,
        "RecordCanSelect": null,
        "RecordSelected": null,
        "city": "Dallas",
        "country": "U.S.",
        "description": "Donec vel pellentesque turpis.",
        "expand": false,
        "externalimage": "https://via.placeholder.com/100x70",
        "iconimage": "icon:SkypeCircleCheck",
        "id": "2",
        "name": "Litware, Inc",
        "svg": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20version%3D%271.1%27%20viewBox%3D%27-10%200%202068%202048%27%3E%0D%0A%20%20%3Cg%20transform%3D%27matrix%281%200%200%20-1%200%202048%29%2Crotate%280%2C1034%2C1024%29%27%3E%0D%0A%20%20%20%3Cpath%20fill%3D%27%2376db91%27%0D%0Ad%3D%27M1024%202048q141%200%20272%20-36.5t244.5%20-103.5t207%20-160.5t160.5%20-207t103.5%20-244.5t36.5%20-272t-36.5%20-272t-103.5%20-244.5t-160.5%20-207t-207%20-160.5t-244.5%20-103.5t-272%20-36.5t-272%2036.5t-244.5%20103.5t-207%20160.5t-160.5%20207t-103.5%20244.5t-36.5%20272t36.5%20272t103.5%20244.5t160.5%20207t207%20160.5t244.5%20103.5t272%2036.5zM907%20701q22%200%2042%208.5t35%2023.5l429%20429q15%2015%2023%2035t8%2041q0%2022%20-8.5%2042t-23%2034.5t-34.5%2023t-42%208.5q-21%200%20-41.5%20-8t-35.5%20-23l-352%20-352l-118%20118q-32%2032%20-77%2032q-22%200%20-42%20-8.5t-35%20-23.5t-23.5%20-34.5t-8.5%20-41.5q0%20-21%208.5%20-41.5t23.5%20-35.5l195%20-195q15%20-15%2035.5%20-23.5t41.5%20-8.5z%27%20%2F%3E%0D%0A%20%20%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E",
        "TagColor": "rgb(255, 140, 0)",
        "TagBorderColor": "rgb(194,107,0)",
        "tags": [
            {
                "Value": "#MsDyn365"
            },
            {
                "Value": "#PowerApps"
            }
        ]
    }
],
 columns: [
    {
        "myId": "3043",
        "ColDisplayName": "Account Name",
        "ColName": "name",
        "ColWidth": 100,
        "ColCellType": "link",
        "ColHorizontalAlign": null,
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": null,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": true,
        "ColTagColorColumn": null,
        "ColTagBorderColorColumn": null,
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3044",
        "ColDisplayName": "City:",
        "ColName": "city",
        "ColWidth": null,
        "ColCellType": null,
        "ColHorizontalAlign": null,
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": null,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": false,
        "ColTagColorColumn": null,
        "ColTagBorderColorColumn": null,
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": "name",
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": false,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": 1,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3045",
        "ColDisplayName": "External",
        "ColName": "externalimage",
        "ColWidth": 60,
        "ColCellType": "image",
        "ColHorizontalAlign": "Center",
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": true,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": null,
        "ColTagColorColumn": null,
        "ColTagBorderColorColumn": null,
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": 60,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3046",
        "ColDisplayName": "Icon",
        "ColName": "iconimage",
        "ColWidth": 40,
        "ColCellType": "clickableimage",
        "ColHorizontalAlign": "Center",
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": true,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": null,
        "ColTagColorColumn": "TagColor",
        "ColTagBorderColorColumn": null,
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3047",
        "ColDisplayName": "Svg",
        "ColName": "svg",
        "ColWidth": 60,
        "ColCellType": "clickableimage",
        "ColHorizontalAlign": "Center",
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": true,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": null,
        "ColTagColorColumn": null,
        "ColTagBorderColorColumn": null,
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3048",
        "ColDisplayName": "Tag",
        "ColName": "country",
        "ColWidth": 70,
        "ColCellType": "tag",
        "ColHorizontalAlign": "Center",
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": true,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": null,
        "ColTagColorColumn": "TagColor",
        "ColTagBorderColorColumn": "TagBorderColor",
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3049",
        "ColDisplayName": "Indicator",
        "ColName": "country",
        "ColWidth": 150,
        "ColCellType": "indicatortag",
        "ColHorizontalAlign": "Center",
        "ColVerticalAlign": "Center",
        "ColMultiLine": null,
        "ColResizable": true,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": true,
        "ColTagColorColumn": "TagColor",
        "ColTagBorderColorColumn": "TagBorderColor",
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": null,
        "ColInlineLabel": "Status:",
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    },
    {
        "myId": "3050",
        "ColDisplayName": "Tag List",
        "ColName": "tags",
        "ColWidth": 250,
        "ColCellType": null,
        "ColHorizontalAlign": null,
        "ColVerticalAlign": null,
        "ColMultiLine": null,
        "ColResizable": null,
        "ColSortable": null,
        "ColSortBy": null,
        "ColIsBold": null,
        "ColTagColorColumn": null,
        "ColTagBorderColorColumn": null,
        "ColHeaderPaddingLeft": null,
        "ColShowAsSubTextOf": null,
        "ColPaddingLeft": null,
        "ColPaddingTop": null,
        "ColLabelAbove": null,
        "ColMultiValueDelimiter": null,
        "ColFirstMultiValueBold": true,
        "ColInlineLabel": null,
        "ColHideWhenBlank": null,
        "ColSubTextRow": null,
        "ColAriaTextColumn": null,
        "ColCellActionDisabledColumn": null,
        "ColImageWidth": null,
        "ColImagePadding": null,
        "ColRowHeader": null
    }
]
}


// Primary.play = async ({ canvasElement, args }) => {
//   const canvas = within(canvasElement);
//   await waitFor(Delay, { timeout: 2000 });
//   await userEvent.click(canvas.getByText(""));
// }