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
import {FluentDetailsList} from '@powercat/details-list/DetailsList';
import {
	IInputs,
	IOutputs,
  } from "@powercat/details-list/DetailsList/generated/ManifestTypes";
import { WholeNumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";

export default{
    title: "PCF Components/DetailsList",
    argTypes: {},
  parameters: {
     layout: "fullscreen",
 },
 } as Meta;
 const Template =  (args) =>{
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs,IOutputs> = new ComponentFrameworkMockGeneratorReact(
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
    mockGenerator.ExecuteInit();
    const Component = mockGenerator.ExecuteUpdateView();
    return Component;

 }
 export const Primary = Template.bind({});
Primary.args={    
};