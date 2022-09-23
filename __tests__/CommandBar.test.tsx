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

import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import {CommandBar} from '@powercat/command-bar/CommandBar';
import {
	IInputs,
	IOutputs,
  } from "@powercat/command-bar/CommandBar/generated/ManifestTypes";
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import * as ReactTestUtils from 'react-dom/test-utils';
  describe("CommandBar", () => {
    let mockGenerator : ComponentFrameworkMockGeneratorReact< IInputs, IOutputs>; 
	beforeEach(() =>{
		mockGenerator = new ComponentFrameworkMockGeneratorReact(
			CommandBar,
			{
				Theme: StringPropertyMock,
    			AccessibilityLabel: StringPropertyMock,
    			InputEvent: StringPropertyMock,
    			items: DataSetMock,
			}
		);
	});
	afterEach(() =>{
		for (let i = 0; i < document.body.children.length; i++) {
            if (document.body.children[i].tagName === 'DIV') {
                document.body.removeChild(document.body.children[i]);
                i--;
            }
        }
	});
	it("renders", ()=>{
		mockGenerator.ExecuteInit();
		const element = mockGenerator.ExecuteUpdateView();
		expect(element).toMatchSnapshot();
	})
	it("renders dummy items when no items configured", () => {
		mockGenerator.ExecuteInit();
		// Simulate there being no items bound - which causes an error on the parameters
		mockGenerator.context.parameters.items.error = true;
		sinon.assert.calledOnce(mockGenerator.control.init);
		const element = mockGenerator.ExecuteUpdateView();
		expect(element).toMatchSnapshot();
	  });

  });