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
          "SubText3"]).Attributes
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

// Primary.play = async ({ canvasElement, args }) => {
//   const canvas = within(canvasElement);
//   await waitFor(Delay, { timeout: 2000 });
//   await userEvent.click(canvas.getByText(""));
// }