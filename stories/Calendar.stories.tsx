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
import { ComponentFrameworkMockGeneratorReact } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React";
import {
  IInputs,
  IOutputs,
} from "@powercat/calendar/Calendar/generated/ManifestTypes";
import {Calendar} from "@powercat/calendar/Calendar"
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { DateTimePropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DateTimeProperty.mock";


export default {
  title: "PCF Components/Calendar",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;

type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
      new ComponentFrameworkMockGeneratorReact(Calendar, {
        Theme: StringPropertyMock,
        AccessibilityLabel: StringPropertyMock,
        BackgroundColor: StringPropertyMock,
        DayPickerVisible: TwoOptionsPropertyMock,
        FirstDayOfWeek: EnumPropertyMock< DaysOfWeek>,
        HighlightCurrentMonth: TwoOptionsPropertyMock,
        HighlightSelectedMonth: TwoOptionsPropertyMock,
        InputEvent: StringPropertyMock,
        Language: StringPropertyMock,
        MaxDate: DateTimePropertyMock,
        MinDate: DateTimePropertyMock,
        MonthPickerVisible: TwoOptionsPropertyMock,
        SelectedDateValue: DateTimePropertyMock,
        ShowGoToToday: TwoOptionsPropertyMock,
        ShowSixWeeksByDefault: TwoOptionsPropertyMock,
        ShowWeekNumbers: TwoOptionsPropertyMock
      });
 
    const MaxDate = mockGenerator.context.parameters.MaxDate as DateTimePropertyMock;
    MaxDate.setValue(new Date(2099,0,1));
    const MinDate = mockGenerator.context.parameters.MinDate as DateTimePropertyMock;
    MinDate.setValue(new Date(2001,0,1));
    const SelectedDateValue = mockGenerator.context.parameters.SelectedDateValue as DateTimePropertyMock;
    SelectedDateValue.setValue(new Date());
    const HighlightSelectedMonth =  mockGenerator.context.parameters.HighlightSelectedMonth as TwoOptionsPropertyMock;
    HighlightSelectedMonth.setValue(true);
    const HighlightCurrentMonth =  mockGenerator.context.parameters.HighlightCurrentMonth as TwoOptionsPropertyMock;
    HighlightCurrentMonth.setValue(true);
    const MonthPickerVisible = mockGenerator.context.parameters.MonthPickerVisible as TwoOptionsPropertyMock;
    MonthPickerVisible.setValue(true);
    const ShowWeekNumbers = mockGenerator.context.parameters.ShowWeekNumbers as TwoOptionsPropertyMock;
    ShowWeekNumbers.setValue(true);
    const ShowSixWeeksByDefault = mockGenerator.context.parameters.ShowSixWeeksByDefault as TwoOptionsPropertyMock;
    ShowSixWeeksByDefault.setValue(false);
    const Theme = mockGenerator.context.parameters.Theme as StringPropertyMock;
    Theme.setValue(args.theme);
    const BackgroundColor = mockGenerator.context.parameters.BackgroundColor as StringPropertyMock;
    BackgroundColor.setValue(args.backgroundcolor)



     const FirstDayOfWeek = mockGenerator.context.parameters.FirstDayOfWeek as EnumPropertyMock< DaysOfWeek>;
     FirstDayOfWeek.raw = "Monday";
     mockGenerator.ExecuteInit();
     const component = mockGenerator.ExecuteUpdateView();
    return component;
};
export const Primary = Template.bind({});
Primary.args = {
    theme: '{"palette": {"themePrimary": "#test-primary"}}',
    backgroundcolor: '#ffffff'
}