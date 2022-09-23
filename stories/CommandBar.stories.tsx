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
import { Meta } from "@storybook/react";
import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import {CommandBar} from '@powercat/command-bar/CommandBar';
import {
	IInputs,
	IOutputs,
  } from "@powercat/command-bar/CommandBar/generated/ManifestTypes";
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import resourse from '@powercat/command-bar/CommandBar/strings/CommandBar.1033.resx'

import { EntityRecord } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock";
export default{
   title: "PCF Components/CommandBar",
   argTypes: {},
 parameters: {
    layout: "fullscreen",
},
} as Meta;

const Template = (args) =>{
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs,IOutputs> = new ComponentFrameworkMockGeneratorReact(
        CommandBar,
        {
            Theme: StringPropertyMock,
    		AccessibilityLabel: StringPropertyMock,
    		InputEvent: StringPropertyMock,
    		items: DataSetMock
        }

    );
    const items = mockGenerator.context.parameters.items as DataSetMock;
    items.initRecords((args.items || []).map(item=>{
        const row = new EntityRecord("test", item.id, item.ItemDisplayName);
        row.columns['id']= item.id;
        row.columns["ItemDisplayName"] = item.ItemDisplayName;
        row.columns["ItemKey"] = item.ItemKey;
        row.columns["ItemIconName"]= item.ItemIconName;
        row.columns["ItemIconColor"] = item.ItemIconColor;
        row.columns["ItemEnabled"] = item.ItemEnabled;
        row.columns["ItemIconOnly"] = item.ItemIconOnly;
         return row;
    }));
    items.openDatasetItem.callsFake((item)=>{
        console.log(item.id);
      })
      const theme = mockGenerator.context.parameters.Theme as StringPropertyMock;
      const accessibility =mockGenerator.context.parameters.AccessibilityLabel as StringPropertyMock;
      const inputEvent = mockGenerator.context.parameters.InputEvent as StringPropertyMock;
    mockGenerator.SetControlResource(resourse);
    mockGenerator.ExecuteInit();
    const Component = mockGenerator.ExecuteUpdateView();
     return Component;
};
export const Primary = Template.bind({});
Primary.args={
    items:[
        {id: '1', ItemKey: 1, ItemDisplayName: 'text1', ItemIconName: "icon1",ItemIconColor: "blue",ItemEnabled: true,ItemIconOnly: false},
        {id: '2', ItemKey: 2, ItemDisplayName: 'text2', ItemIconName: "icon2",ItemIconColor: "red", ItemEnabled: false,ItemIconOnly:false}
    ]
    
};
