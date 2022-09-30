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
import {
  IInputs,
  IOutputs,
} from "@powercat/pivot/Pivot/generated/ManifestTypes";
import {Pivot} from "@powercat/pivot/Pivot"
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { action } from "@storybook/addon-actions";
import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
import { ItemColumns } from "@powercat/command-bar/CommandBar/ManifestConstants";
import {useArgs} from '@storybook/client-api'

export default {
    title: "PCF Components/Pivot",
    argTypes: {
      renderSize: {
          control: 'select',
          options: [ "1" , "2"]
      },
      renderType: {
        control: 'radio',
        options: [ "0" , "1"]
    },
    PivotSelected: {  control: 'select', options: ['Open','New',' Save', 'InternetSharing', 'MapPin', 'Microphone', 'PageSolid'] }
  },
    parameters: {
      layout: "fullscreen",
    },
    
  } as Meta;

  type RenderType = "0" | "1";
  type RenderSize = "0" | "1" | "2";

  const Template = (args) => {
    const [,updateArgs] = useArgs();
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
      new ComponentFrameworkMockGeneratorReact(Pivot, {
         SelectedKey:StringPropertyMock,
         RenderType:EnumPropertyMock<RenderType>,
         RenderSize:EnumPropertyMock<RenderSize>,
         Theme: StringPropertyMock,
         AccessibilityLabel:StringPropertyMock,
         InputEvent:StringPropertyMock,
         items:DataSetMock
        });


const items = mockGenerator.context.parameters.items as DataSetMock;
items.initRecords(
  (args.items || []).map((item)=> {
    const row = new EntityRecord(undefined, item.id, item[ItemColumns.DisplayName]);
    row.columns [ItemColumns.Key]=item  [ItemColumns.Key];
    row.columns [ItemColumns.DisplayName]=item    [ItemColumns.DisplayName];
    row.columns[ItemColumns.IconName] = item[ItemColumns.IconName];
    row.columns [ItemColumns.Enabled]=item [ItemColumns.Enabled];
    row.columns [ItemColumns.IconOnly] = item [ItemColumns.IconOnly]; 

    return row;
  })
);
items.openDatasetItem.callsFake((ids) => {
  console.log(ids.id.guid);
  action('OpenDatasetItem')(ids);
  updateArgs({PivotSelected: ids.name});
});

const RenderType = mockGenerator.context.parameters.RenderType as EnumPropertyMock<RenderType>;
RenderType.setValue(args.renderType);
const RenderSize = mockGenerator.context.parameters.RenderSize as EnumPropertyMock<RenderSize>;
RenderSize.setValue(args.renderSize);

mockGenerator.ExecuteInit();
const component = mockGenerator.ExecuteUpdateView();
return component;
  };
  
export const Primary = Template.bind({});
Primary.args = {
  renderSize: "2",
  renderType: "1",
  items: [{
   id:'1',
      [ItemColumns.DisplayName]: 'Open',
      [ItemColumns.Key]: 'item1',
      [ItemColumns.IconName]: 'PageLink',
      [ItemColumns.IconColor]: 'blue',
      [ItemColumns.Enabled]: true,
      [ItemColumns.IconOnly]: true,
  },
  {id: '2',
      [ItemColumns.DisplayName]: 'New',
      [ItemColumns.Key]: 'item2',
      [ItemColumns.IconName]: 'PinSolid12',
      [ItemColumns.IconColor]: 'blue',
      [ItemColumns.Enabled]: true,
      [ItemColumns.IconOnly]: true,

    },
    {
      id: '3', 
      [ItemColumns.Key]: 'item3',
      [ItemColumns.DisplayName]: ' Save',
      [ItemColumns.IconName]: 'Save',
      [ItemColumns.IconColor]: 'green',
      [ItemColumns.Enabled]: false,
      [ItemColumns.IconOnly]: true,
  },
  // Sub Items First Level
 { id: '5', 
      [ItemColumns.Key]: 'item5',
      [ItemColumns.DisplayName]: 'InternetSharing',
      [ItemColumns.IconName]: 'InternetSharing',
      [ItemColumns.IconColor]: 'blue',
      [ItemColumns.Enabled]: false,
      [ItemColumns.IconOnly]: true,
      [ItemColumns.ParentKey]: 'commandNew',
  },
 {  id: '6',
      [ItemColumns.Key]: 'item6',
      [ItemColumns.DisplayName]: 'MapPin',
      [ItemColumns.IconName]: 'MapPin',
      [ItemColumns.IconColor]: 'green',
      [ItemColumns.Enabled]: false,
      [ItemColumns.IconOnly]: true,
      [ItemColumns.ParentKey]: 'commandSave',
  },
  // Sub Items Second Level
   {id: '7',
      [ItemColumns.Key]: 'item7',
      [ItemColumns.DisplayName]: 'Microphone',
      [ItemColumns.IconName]: 'Microphone',
      [ItemColumns.IconColor]: 'blue',
      [ItemColumns.Enabled]: false,
      [ItemColumns.IconOnly]: true,
      [ItemColumns.ParentKey]: 'item1',
  },
  , {id: '8',
      [ItemColumns.Key]: 'item8',
      [ItemColumns.DisplayName]: 'PageSolid',
      [ItemColumns.IconName]: 'PageSolid',
      [ItemColumns.IconColor]: 'blue',
      [ItemColumns.Enabled]: false,
      [ItemColumns.IconOnly]: true,
      [ItemColumns.ParentKey]: 'item2',
  },
  ],
  PivotSelected:"Open", 
  };
  