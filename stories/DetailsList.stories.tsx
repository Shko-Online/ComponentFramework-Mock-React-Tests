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
import { ColumnsColumns, RecordsColumns } from '@powercat/details-list/DetailsList/ManifestConstants';
import AttributeMetadataGenerator from '@shko-online/componentframework-mock/utils/AttributeMetadataGenerator';
import { template } from '@babel/core';
// import '@powercat/details-list/DetailsList/css/DetailList.css'

const Delay = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000);
  })
export default {
  title: "PCF Components/DetailsList",
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
  mockGenerator.context._parameters.columns.columns = [
    {
      "displayName": "ColDisplayName",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColDisplayName",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColName",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColName",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColWidth",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColWidth",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColCellType",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColCellType",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColHorizontalAlign",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColHorizontalAlign",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColVerticalAlign",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColVerticalAlign",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColMultiLine",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColMultiLine",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColResizable",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColResizable",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColSortable",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColSortable",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColSortBy",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColSortBy",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColIsBold",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColIsBold",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColTagColorColumn",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColTagColorColumn",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColTagBorderColorColumn",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColTagBorderColorColumn",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColHeaderPaddingLeft",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColHeaderPaddingLeft",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColShowAsSubTextOf",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColShowAsSubTextOf",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColPaddingLeft",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColPaddingLeft",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColPaddingTop",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColPaddingTop",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColLabelAbove",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColLabelAbove",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColMultiValueDelimiter",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColMultiValueDelimiter",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColFirstMultiValueBold",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColFirstMultiValueBold",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColInlineLabel",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColInlineLabel",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColHideWhenBlank",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColHideWhenBlank",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColSubTextRow",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColSubTextRow",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColAriaTextColumn",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColAriaTextColumn",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColCellActionDisabledColumn",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColCellActionDisabledColumn",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColImageWidth",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColImageWidth",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColImagePadding",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColImagePadding",
      "order": -1,
      "visualSizeFactor": 1
    },
    {
      "displayName": "ColRowHeader",
      "name": null,
      "dataType": "SingleLine.Text",
      "alias": "ColRowHeader",
      "order": -1,
      "visualSizeFactor": 1
    }
  ]

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
          "DateModified",
          "Description",
          "Icon",
          "Index",
          "Name",
          "Number",
          "Status",
          "Expand",
          "StatusCol",
          "StatusColor",
          "StatusIcon",
          "SubText1",
          "SubText2",
          "SubText3",
          "City",
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
        "TagBorderColor",]).Attributes
    }
  ])

  mockGenerator.context._parameters.records._Bind(recordsLogicalName, 'records');
  mockGenerator.context._parameters.records.columns =
    [
      {
        "displayName": "RecordKey",
        "name": null,
        "dataType": "SingleLine.Text",
        "alias": "RecordKey",
        "order": -1,
        "visualSizeFactor": 1
      },
      {
        "displayName": "RecordCanSelect",
        "name": null,
        "dataType": "SingleLine.Text",
        "alias": "RecordCanSelect",
        "order": -1,
        "visualSizeFactor": 1
      },
      {
        "displayName": "RecordSelected",
        "name": null,
        "dataType": "SingleLine.Text",
        "alias": "RecordSelected",
        "order": -1,
        "visualSizeFactor": 1
      },
      {
        "name": "DateModified",
        "displayName": "DateModified",
        "order": 1,
        "dataType": "SingleLine.Text",
        "alias": "DateModified",
        "visualSizeFactor": 1
      },
      {
        "name": "Description",
        "displayName": "Description",
        "order": 2,
        "dataType": "SingleLine.Text",
        "alias": "Description",
        "visualSizeFactor": 1
      },
      {
        "name": "Icon",
        "displayName": "Icon",
        "order": 3,
        "dataType": "SingleLine.Text",
        "alias": "Icon",
        "visualSizeFactor": 1
      },
      {
        "name": "Index",
        "displayName": "Index",
        "order": 4,
        "dataType": "Decimal",
        "alias": "Index",
        "visualSizeFactor": 1
      },
      {
        "name": "Name",
        "displayName": "Name",
        "order": 5,
        "dataType": "SingleLine.Text",
        "alias": "Name",
        "visualSizeFactor": 1
      },
      {
        "name": "Number",
        "displayName": "Number",
        "order": 6,
        "dataType": "Decimal",
        "alias": "Number",
        "visualSizeFactor": 1
      },
      {
        "name": "Status",
        "displayName": "Status",
        "order": 7,
        "dataType": "SingleLine.Text",
        "alias": "Status",
        "visualSizeFactor": 1
      },
      {
        "name": "StatusCol",
        "displayName": "StatusCol",
        "order": 8,
        "dataType": "SingleLine.Text",
        "alias": "StatusCol",
        "visualSizeFactor": 1
      },
      {
        "name": "StatusColor",
        "displayName": "StatusColor",
        "order": 9,
        "dataType": "SingleLine.Text",
        "alias": "StatusColor",
        "visualSizeFactor": 1
      },
      {
        "name": "StatusIcon",
        "displayName": "StatusIcon",
        "order": 10,
        "dataType": "SingleLine.Text",
        "alias": "StatusIcon",
        "visualSizeFactor": 1
      },
      {
        "name": "SubText1",
        "displayName": "SubText1",
        "order": 11,
        "dataType": "SingleLine.Text",
        "alias": "SubText1",
        "visualSizeFactor": 1
      },
      {
        "name": "SubText2",
        "displayName": "SubText2",
        "order": 12,
        "dataType": "SingleLine.Text",
        "alias": "SubText2",
        "visualSizeFactor": 1
      },
      {
        "name": "SubText3",
        "displayName": "SubText3",
        "order": 13,
        "dataType": "SingleLine.Text",
        "alias": "SubText3",
        "visualSizeFactor": 1
      }
    ];
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
export const Primary = Template.bind({});
Primary.args = {
  columns: [
    {
      myId: "1",
     "ColName": "Name",
      "ColDisplayName": "Account Name",
      "ColWidth": 100,
      "ColIsBold": true,
      "ColResizable": true
    },
    {
      myId: "5",
      "ColName": "Expand",
      "ColDisplayName": "null",
      "ColCellType": "expand",
      "ColWidth": 100,
    },
    {
      myId: "501",
      "ColName": "Icon",
      "ColDisplayName": "Icon",
      "ColWidth": 150,
      "ColCellType": "image",
      "ColImageWidth": 20,
      "ColVerticalAlign": "top",
      "ColPaddingTop": 2,
      "ColResizable": true,
      "Status": "Open",

    },
    {
      myId: "502",
      "ColName": "Description",
      "ColDisplayName": "Description",
      "ColShowAsSubTextOf": "name",
      "ColLabelAbove": true,
      "ColIsBold": true,
      "ColSubTextRow": 1,
      "ColWidth": 300,

    },
    {
      myId: "503",
      "ColName": "DateModified",
      "ColDisplayName": "DateModified",
      "ColLabelAbove": true,
      "ColIsBold": true,
      "ColSubTextRow": 1,
      "ColWidth": 200,

    },
    {
      myId: "504",
      "ColName": "Status",
      "ColDisplayName": "Status",
      "StatusColor": "#4B832D",
      "ColWidth": 100,

    },
  ],
  records: [
    {
      myId: "-1",
      Index: 1,
      Icon: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/photo.svg",
      Name: "LoremIpsum.png",
      Number: 2314,
      Description: "There was once Lorem and there was Ipsum",
      DateModified: new Date().toDateString(),
      Status: "Open",
      StatusCol: "green",
      StatusIcon: "icon:SkypeCircleCheck",
      StatusColor: "#4B832D",
      SubText1: "Lorem",
      SubText2: "Ipsum",
      SubText3: "Shko Online"
    },
    {

      myId: "1",
      Index: 1,
      Name: "Contoso",
      City: "Redmond",
      Country: "U.S.",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Expand: false,
      DateModified: new Date().toDateString(),
      TagColor: "rgb(0, 183, 195)",
      TagBorderColor: "rgb(0,137,147)",
      ExternalImage: "https://via.placeholder.com/100x70",
      Icon: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/docx.svg",
      IconImage: "icon:SkypeCircleCheck",
      Status: "Open",
      SubText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, li",
      SubText2: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
      SubText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel",
      Tags: ["#PowerApps", "#PowerPlatform"]
    },
    {
      myId: "2",
      Index: 2,
      Name: "Litware, Inc",
      Icon: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/xlsx.svg",
      City: "Dallas",
      Country: "U.S.",
      Description: "Donec vel pellentesque turpis.",
      Expand: false,
      DateModified: new Date().toDateString(),
      TagColor: "rgb(255, 140, 0)",
      TagBorderColor: "rgb(194,107,0)",
      Status: "Open",
      ExternalImage: "https://via.placeholder.com/100x70",
      IconImage: "icon:SkypeCircleCheck",
      Tags: ["#MsDyn365", "#PowerApps"]
    },
    {
      myId: "3",
      Index: 3,
      Name: "Litware",
      City: "Dallas",
      Country: "U.S.",
      Description: "Donec vel pellentesque turpis.",
      Expand: true,
      DateModified: new Date().toDateString(),
      TagColor: "rgb(255, 140, 0)",
      TagBorderColor: "rgb(194,107,0)",
      Status: "Open",
      Externalimage: "https://via.placeholder.com/100x70",
      Icon: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/pdf.svg",
      Iconimage: "icon:SkypeCircleCheck",
      Tags: ["#MsDyn365", "#PowerApps"]
    },
    {
      myId: '500',
      Index: 0,
      Icon: "https://static2.sharepointonline.com/files/fabric/assets/item-types/16/pptx.svg",
      Name: " Nul.pdf",
      Number: 51634,
      Expand: true,
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, ligula justo commodo erat, ut finibus ipsum risus scelerisque tellus. Donec vel pellentesque turpis. Nullam semper purus ac arcu lacinia, quis viverra eros fermentum. Proin tincidunt hendrerit ante, eu hendrerit ex vestibulum sit amet. Mauris dui odio, congue id iaculis sit amet, lacinia id felis. Fusce non vulputate ipsum, at imperdiet massa. Fusce vitae eleifend mauris, sed semper eros. Aenean varius ex accumsan velit porttitor pharetra. Sed eget sagittis sapien, ut porta augue. Aenean commodo lacus eu tortor tempus, eget luctus justo rhoncus. Aenean malesuada, elit molestie scelerisque convallis, massa tortor luctus mauris, non auctor nunc tortor ut erat. Vivamus non vehicula neque, quis eleifend felis. Pellentesq",
      DateModified: new Date().toDateString(),
      Status: "Open",
      StatusCol: "#ff0000",
      StatusIcon: "icon:SkypeCircleCheck",
      StatusColor: "#4B832D",
      SubText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, li",
      SubText2: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
      SubText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel"
    }
  ],


};

export const Expand = Template.bind({});
Expand.args = {
columns: [
  {
      "myId": "3706",
      "ColDisplayName": "",
      "ColName": "Icon",
      "ColWidth": 40,
      "ColCellType": "Image",
      "ColHorizontalAlign": "Center",
      "ColVerticalAlign": "Center",
      "ColMultiLine": null,
      "ColResizable": null,
      "ColSortable": false,
      "ColSortBy": null,
      "ColIsBold": null,
      "ColTagColorColumn": "#00ff00",
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
      "ColImageWidth": 20,
      "ColImagePadding": null,
      "ColRowHeader": null
  },
  {
      "myId": "3707",
      "ColDisplayName": "Name",
      "ColName": "Name",
      "ColWidth": 1000,
      "ColCellType": null,
      "ColHorizontalAlign": "Center",
      "ColVerticalAlign": "Center",
      "ColMultiLine": null,
      "ColResizable": true,
      "ColSortable": true,
      "ColSortBy": "Index",
      "ColIsBold": true,
      "ColTagColorColumn": "00ff00",
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
      "myId": "3708",
      "ColDisplayName": "Status",
      "ColName": "StatusIcon",
      "ColWidth": 50,
      "ColCellType": "Image",
      "ColHorizontalAlign": "Right",
      "ColVerticalAlign": "Center",
      "ColMultiLine": null,
      "ColResizable": null,
      "ColSortable": false,
      "ColSortBy": null,
      "ColIsBold": null,
      "ColTagColorColumn": "#00ff00",
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
      "ColImageWidth": 20,
      "ColImagePadding": null,
      "ColRowHeader": null
  }
],
records: [
  {
      "myId": "2989",
      "RecordKey": null,
      "RecordCanSelect": null,
      "RecordSelected": null,
      "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, ligula justo commodo erat, ut finibus ipsum r",
      "Icon": "icon:Table",
      "Image": "https://via.placeholder.com/100x70",
      "Index": 1,
      "Name": "Row 1",
      "Number": 15416,
      "Status": "Open",
      "StatusCol": "green",
      "StatusColor": "#000080",
      "StatusIcon": "icon:SkypeCircleCheck",
      "SubText1": "Lorem ipsum dolor sit amet, conse",
      "SubText2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie po",
      "SubText3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, ligu"
  },
  {
      "myId": "2990",
      "RecordKey": null,
      "RecordCanSelect": null,
      "RecordSelected": null,
      "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, ligula justo commodo erat, ut finibus ipsum risus scelerisque tellus. ",
      "Icon": "icon:SidePanel",
      "Image": "https://via.placeholder.com/100x70",
      "Index": 2,
      "Name": "Row 2",
      "Number": 2836,
      "Status": "Open",
      "StatusCol": "green",
      "StatusColor": "#000080",
      "StatusIcon": "icon:SkypeCircleCheck",
      "SubText1": "Lorem ipsum dolor sit amet, consectetur adipi",
      "SubText2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ips",
      "SubText3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere,"
  },
  {
      "myId": "2991",
      "RecordKey": null,
      "RecordCanSelect": null,
      "RecordSelected": null,
      "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie posuere, ligula justo commodo erat, ut finibus ipsum risus scelerisque tellus. Donec vel pellentesque turpis. Nullam semper purus ac arcu lacinia, quis viverra eros fermentum. Proin tincidunt hendrerit ante, eu hendrerit ex vestibulum sit amet. Mauris dui odio, congue id iaculis sit amet, lacinia id felis. Fusce non vulputate ipsum, at imperdiet massa. Fusce vitae eleifend mauris, sed semper eros. Aenean varius ex accumsan velit porttitor pharetra. Sed eget sagittis sapien, ut porta augue. Aenean commodo lacus eu tortor tempus, eget luctus justo rhoncus. Aenean malesuada, elit molestie scelerisque convallis, massa tortor luctus mauris, non auctor nunc tortor ut erat. Vivamus non vehicula neque, quis eleifend felis. Pellentesque arcu ipsum, commodo eu libero et, placerat pretium orci. Nulla quis ultricies",
      "Icon": "icon:ChatBot",
      "Image": "https://via.placeholder.com/100x70",
      "Index": 3,
      "Name": "Row 3",
      "Number": 22208,
      "Status": "Open",
      "StatusCol": "#000080",
      "StatusColor": "#000080",
      "StatusIcon": "icon:SkypeCircleCheck",
      "SubText1": "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      "SubText2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean tincidunt, orci vel molestie p",
      "SubText3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac sapien eu ipsum iaculis iaculis. Aenean "
  }
]
}

export const CellTypes = Template.bind({});
CellTypes.args = {
  records: [
    {
        "myId": "7257",
        "RecordKey": null,
        "RecordCanSelect": null,
        "RecordSelected": null,
        "City": "Redmond",
        "Country": "U.S.",
        "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Expand": false,
        "ExternalImage": "https://via.placeholder.com/100x70",
        "IconImage": "icon:SkypeCircleCheck",
        "Id": "1",
        "Name": "Contoso",
        "Svg": "data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20style%3D%27margin%3A%20auto%3B%20display%3A%20block%3B%20shape-rendering%3A%20auto%3B%27%20width%3D%27200px%27%20height%3D%27200px%27%20viewBox%3D%270%200%20100%20100%27%20preserveAspectRatio%3D%27xMidYMid%27%3E%0D%0A%3Ccircle%20cx%3D%2750%27%20cy%3D%2750%27%20fill%3D%27none%27%20stroke%3D%27%230078d4%27%20stroke-width%3D%274%27%20r%3D%2731%27%20stroke-dasharray%3D%27146.08405839192537%2050.69468613064179%27%3E%0D%0A%20%20%3CanimateTransform%20attributeName%3D%27transform%27%20type%3D%27rotate%27%20repeatCount%3D%27indefinite%27%20dur%3D%271.2048192771084336s%27%20values%3D%270%2050%2050%3B360%2050%2050%27%20keyTimes%3D%270%3B1%27%3E%3C%2FanimateTransform%3E%0D%0A%3C%2Fcircle%3E%0D%0A%3C%2Fsvg%3E",
        "TagColor": "rgb(0, 183, 195)",
        "TagBorderColor": "rgb(0,137,147)",
        "Tags": [
            {
                "Value": "#PowerApps"
            },
            {
                "Value": "#PowerPlatform"
            }
        ]
    },
    {
        "myId": "7258",
        "RecordKey": null,
        "RecordCanSelect": null,
        "RecordSelected": null,
        "City": "Dallas",
        "Country": "U.S.",
        "Description": "Donec vel pellentesque turpis.",
        "Expand": false,
        "ExternalImage": "https://via.placeholder.com/100x70",
        "IconImage": "icon:SkypeCircleCheck",
        "Id": "2",
        "Name": "Litware, Inc",
        "Svg": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20version%3D%271.1%27%20viewBox%3D%27-10%200%202068%202048%27%3E%0D%0A%20%20%3Cg%20transform%3D%27matrix%281%200%200%20-1%200%202048%29%2Crotate%280%2C1034%2C1024%29%27%3E%0D%0A%20%20%20%3Cpath%20fill%3D%27%2376db91%27%0D%0Ad%3D%27M1024%202048q141%200%20272%20-36.5t244.5%20-103.5t207%20-160.5t160.5%20-207t103.5%20-244.5t36.5%20-272t-36.5%20-272t-103.5%20-244.5t-160.5%20-207t-207%20-160.5t-244.5%20-103.5t-272%20-36.5t-272%2036.5t-244.5%20103.5t-207%20160.5t-160.5%20207t-103.5%20244.5t-36.5%20272t36.5%20272t103.5%20244.5t160.5%20207t207%20160.5t244.5%20103.5t272%2036.5zM907%20701q22%200%2042%208.5t35%2023.5l429%20429q15%2015%2023%2035t8%2041q0%2022%20-8.5%2042t-23%2034.5t-34.5%2023t-42%208.5q-21%200%20-41.5%20-8t-35.5%20-23l-352%20-352l-118%20118q-32%2032%20-77%2032q-22%200%20-42%20-8.5t-35%20-23.5t-23.5%20-34.5t-8.5%20-41.5q0%20-21%208.5%20-41.5t23.5%20-35.5l195%20-195q15%20-15%2035.5%20-23.5t41.5%20-8.5z%27%20%2F%3E%0D%0A%20%20%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E",
        "TagColor": "rgb(255, 140, 0)",
        "TagBorderColor": "rgb(194,107,0)",
        "Tags": [
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
      "myId": "9043",
      "ColDisplayName": "Account Name",
      "ColName": "Name",
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
      "myId": "9044",
      "ColDisplayName": "City:",
      "ColName": "Description",
      "ColWidth": null,
      "ColCellType": "expand",
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
      "ColLabelAbove": true,
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
      "myId": "9045",
      "ColDisplayName": "External",
      "ColName": "Status",
      "ColWidth": 160,
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
      "myId": "9046",
      "ColDisplayName": "Icon",
      "ColName": "IconImage",
      "ColWidth": 140,
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
      "myId": "9047",
      "ColDisplayName": "Svg",
      "ColName": "Svg",
      "ColWidth": 160,
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
      "myId": "9048",
      "ColDisplayName": "Tag",
      "ColName": "Country",
      "ColWidth": 170,
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
      "myId": "9049",
      "ColDisplayName": "Indicator",
      "ColName": "Country",
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
      "myId": "9050",
      "ColDisplayName": "Tag List",
      "ColName": "TagList",
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

export const DropDown = Template.bind({});
DropDown.args = {
  records: 
    [
      {
          "myId": "7461",
          "RecordKey": null,
          "RecordCanSelect": null,
          "RecordSelected": null,
          "country": "U.S.",
          "city": "Redmond",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "expand": false,
          "externalimage": "https://via.placeholder.com/100x70",
          "iconimage": "icon:SkypeCircleCheck",
          "id": "1",
          "name": "Contoso",
          "svg": "data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20style%3D%27margin%3A%20auto%3B%20display%3A%20block%3B%20shape-rendering%3A%20auto%3B%27%20width%3D%27200px%27%20height%3D%27200px%27%20viewBox%3D%270%200%20100%20100%27%20preserveAspectRatio%3D%27xMidYMid%27%3E%0D%0A%3Ccircle%20cx%3D%2750%27%20cy%3D%2750%27%20fill%3D%27none%27%20stroke%3D%27%230078d4%27%20stroke-width%3D%274%27%20r%3D%2731%27%20stroke-dasharray%3D%27146.08405839192537%2050.69468613064179%27%3E%0D%0A%20%20%3CanimateTransform%20attributeName%3D%27transform%27%20type%3D%27rotate%27%20repeatCount%3D%27indefinite%27%20dur%3D%271.2048192771084336s%27%20values%3D%270%2050%2050%3B360%2050%2050%27%20keyTimes%3D%270%3B1%27%3E%3C%2FanimateTransform%3E%0D%0A%3C%2Fcircle%3E%0D%0A%3C%2Fsvg%3E",
          "TagBorderColor": "rgb(0,137,147)",
          "TagColor": "rgb(0, 183, 195)",
          "Tags": [
              {
                  "Value": "#PowerApps"
              },
              {
                  "Value": "#PowerPlatform"
              }
          ]
      },
      {
          "myId": "7462",
          "RecordKey": null,
          "RecordCanSelect": null,
          "RecordSelected": null,
          "country": "U.S.",
          "city": "Dallas",
          "description": "Donec vel pellentesque turpis.",
          "expand": false,
          "externalimage": "https://via.placeholder.com/100x70",
          "iconimage": "icon:SkypeCircleCheck",
          "id": "2",
          "name": "Litware, Inc",
          "svg": "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20version%3D%271.1%27%20viewBox%3D%27-10%200%202068%202048%27%3E%0D%0A%20%20%3Cg%20transform%3D%27matrix%281%200%200%20-1%200%202048%29%2Crotate%280%2C1034%2C1024%29%27%3E%0D%0A%20%20%20%3Cpath%20fill%3D%27%2376db91%27%0D%0Ad%3D%27M1024%202048q141%200%20272%20-36.5t244.5%20-103.5t207%20-160.5t160.5%20-207t103.5%20-244.5t36.5%20-272t-36.5%20-272t-103.5%20-244.5t-160.5%20-207t-207%20-160.5t-244.5%20-103.5t-272%20-36.5t-272%2036.5t-244.5%20103.5t-207%20160.5t-160.5%20207t-103.5%20244.5t-36.5%20272t36.5%20272t103.5%20244.5t160.5%20207t207%20160.5t244.5%20103.5t272%2036.5zM907%20701q22%200%2042%208.5t35%2023.5l429%20429q15%2015%2023%2035t8%2041q0%2022%20-8.5%2042t-23%2034.5t-34.5%2023t-42%208.5q-21%200%20-41.5%20-8t-35.5%20-23l-352%20-352l-118%20118q-32%2032%20-77%2032q-22%200%20-42%20-8.5t-35%20-23.5t-23.5%20-34.5t-8.5%20-41.5q0%20-21%208.5%20-41.5t23.5%20-35.5l195%20-195q15%20-15%2035.5%20-23.5t41.5%20-8.5z%27%20%2F%3E%0D%0A%20%20%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E",
          "TagBorderColor": "rgb(194,107,0)",
          "TagColor": "rgb(255, 140, 0)",
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
    
],

}
// Primary.play = async ({ canvasElement, args }) => {
//   const canvas = within(canvasElement);
//   await waitFor(Delay, { timeout: 2000 });
//   await userEvent.click(canvas.getByText(""));
// }