/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { ComponentFrameworkMockGenerator, StringPropertyMock, EnumPropertyMock, WholeNumberPropertyMock, DecimalNumberPropertyMock } from '@shko.online/componentframework-mock';
import { AutoWidthLabel } from '@powercat/auto-width-label/AutoWidthLabel';
import {
	IInputs,
	IOutputs,
} from "@powercat/auto-width-label/AutoWidthLabel/generated/ManifestTypes";


describe('AutoWidthLabel', () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
		mockGenerator = new ComponentFrameworkMockGenerator(
			AutoWidthLabel,
			{
				Text: StringPropertyMock,
				FontName: StringPropertyMock,
				FontSize: DecimalNumberPropertyMock,
				FontSizeUnits: EnumPropertyMock<'0'|'1'>,
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

	afterEach(() => {
		document.body.innerHTML = null;
	});

	it("renders", () => {
		mockGenerator.ExecuteInit();
		const element = mockGenerator.ExecuteUpdateView();
		expect(element).toMatchSnapshot();
	});
});
