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
import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator';
import {AutoWidthLabel} from '@powercat/auto-width-label/AutoWidthLabel';
import {
	IInputs,
	IOutputs,
  } from "@powercat/auto-width-label/AutoWidthLabel/generated/ManifestTypes";
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { EnumPropertyMock} from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock';
import { WholeNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock';
import { DecimalNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DecimalNumberProperty.mock';


describe ("AutoWidthLabel", () => {
	let mockGenerator : ComponentFrameworkMockGenerator< IInputs, IOutputs>;
	beforeEach(()=>{
		 mockGenerator = new ComponentFrameworkMockGenerator(
			AutoWidthLabel,
			{
				Text: StringPropertyMock,
				FontName: StringPropertyMock,
				FontSize: DecimalNumberPropertyMock,
				FontSizeUnits: EnumPropertyMock<string>,
				FontColor: StringPropertyMock,
				FontWeight: StringPropertyMock,
				DisabledFontColor: StringPropertyMock,
				DisabledFontWeight: StringPropertyMock,
				FocusFontColor: StringPropertyMock,
				FocusFontWeight: StringPropertyMock,
				HoverFontColor: StringPropertyMock,
				HoverFontWeight: StringPropertyMock,
				FillColor: StringPropertyMock,
				DisabledFillColor: StringPropertyMock,
				FocusFillColor: StringPropertyMock,
				HoverFillColor: StringPropertyMock,
				BorderColor: StringPropertyMock,
				BorderThickness: WholeNumberPropertyMock,
				BorderRadius: WholeNumberPropertyMock,
				DisabledBorderColor: StringPropertyMock,
				FocusBorderColor: StringPropertyMock,
				FocusBorderThickness: WholeNumberPropertyMock,
				HoverBorderColor: StringPropertyMock,
				HoverBorderThickness: WholeNumberPropertyMock,
				PaddingLeft: WholeNumberPropertyMock,
				PaddingRight: WholeNumberPropertyMock,
				PaddingTop: WholeNumberPropertyMock,
				PaddingBottom: WholeNumberPropertyMock,
			}
		);
	});
	afterEach(()=>{
        document.body.innerHTML = null;
    })

    it("Init should work", () => {            
        mockGenerator.ExecuteInit();
        sinon.assert.calledOnce(mockGenerator.control.init);
        expect(document.body).toMatchSnapshot();
    })

});
