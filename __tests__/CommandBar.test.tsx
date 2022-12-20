/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import sinon from 'sinon';
import { ComponentFrameworkMockGeneratorReact, StringPropertyMock, DataSetMock } from '@shko.online/componentframework-mock';
import { CommandBar } from '@powercat/command-bar/CommandBar';
import {
	IInputs,
	IOutputs,
} from "@powercat/command-bar/CommandBar/generated/ManifestTypes";

describe("CommandBar", () => {
	let mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs>;
	beforeEach(() => {
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
	
	it("renders", () => {
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
