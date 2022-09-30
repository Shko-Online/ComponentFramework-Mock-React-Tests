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
import { ComponentFrameworkMockGeneratorReact } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React";
import {
  IInputs,
  IOutputs,
} from "@powercat/calendar/Calendar/generated/ManifestTypes";
import { Calendar } from "@powercat/calendar/Calendar"
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import { TwoOptionsPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock";
import { EnumPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/EnumProperty.mock";
import { DateTimePropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DateTimeProperty.mock";
import { useArgs } from '@storybook/client-api';

export default {
  title: "PCF Components/Calendar",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: { FirstDayOfWeek: {
    control: 'select',
    options: ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
},
SelectedDateValue:{
  control: 'date'
}},
} as Meta;

type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

const Template = (args) => {
  const [{SelectedDateValue:selectedDateValue},updateArgs] = useArgs();


  const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
    new ComponentFrameworkMockGeneratorReact(Calendar, {
      Theme: StringPropertyMock,
      AccessibilityLabel: StringPropertyMock,
      BackgroundColor: StringPropertyMock,
      DayPickerVisible: TwoOptionsPropertyMock,
      FirstDayOfWeek: EnumPropertyMock<DaysOfWeek>,
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
      ShowWeekNumbers: TwoOptionsPropertyMock,
    });
  const Theme = mockGenerator.context.parameters.Theme as StringPropertyMock;
  Theme.setValue(args.theme);
  const AccesibilityLabel = mockGenerator.context.parameters.AccessibilityLabel as StringPropertyMock;
  AccesibilityLabel.setValue(args.text);
  const BackgroundColor = mockGenerator.context.parameters.BackgroundColor as StringPropertyMock;
  BackgroundColor.setValue(args.backgroundcolor);
  const DayPickerVisible = mockGenerator.context.parameters.DayPickerVisible as TwoOptionsPropertyMock;
  DayPickerVisible.setValue(true);
  const FirstDayOfWeek = mockGenerator.context.parameters.FirstDayOfWeek as EnumPropertyMock<DaysOfWeek>;
  FirstDayOfWeek.setValue(args.FirstDayOfWeek)
  const HighlightCurrentMonth = mockGenerator.context.parameters.HighlightCurrentMonth as TwoOptionsPropertyMock;
  HighlightCurrentMonth.setValue(true);
  const HighlightSelectedMonth = mockGenerator.context.parameters.HighlightSelectedMonth as TwoOptionsPropertyMock;
  HighlightSelectedMonth.setValue(true);
  const Language = mockGenerator.context.parameters.Language as StringPropertyMock;
  Language.setValue(args.language);
  const MaxDate = mockGenerator.context.parameters.MaxDate as DateTimePropertyMock;
  MaxDate.setValue(new Date(2099, 0, 1));
  const MinDate = mockGenerator.context.parameters.MinDate as DateTimePropertyMock;
  MinDate.setValue(new Date(2001, 0, 1));
  const MonthPickerVisible = mockGenerator.context.parameters.MonthPickerVisible as TwoOptionsPropertyMock;
  MonthPickerVisible.setValue(true);
  const SelectedDateValue = mockGenerator.context.parameters.SelectedDateValue as DateTimePropertyMock;
  SelectedDateValue.setValue(selectedDateValue);

mockGenerator.notifyOutputChanged.callsFake(()=>{
  const {SelectedDateValue} = mockGenerator.control.getOutputs();
  console.log(SelectedDateValue);
  updateArgs({SelectedDateValue}); 
});

  const ShowGoToday = mockGenerator.context.parameters.ShowGoToToday as TwoOptionsPropertyMock;
  ShowGoToday.setValue(true);
  const ShowWeekNumbers = mockGenerator.context.parameters.ShowWeekNumbers as TwoOptionsPropertyMock;
  ShowWeekNumbers.setValue(true);
  const ShowSixWeeksByDefault = mockGenerator.context.parameters.ShowSixWeeksByDefault as TwoOptionsPropertyMock;
  ShowSixWeeksByDefault.setValue(false);

  mockGenerator.ExecuteInit();
  const component = mockGenerator.ExecuteUpdateView();
  return component;
};
export const Primary = Template.bind({});
Primary.args = {
  theme: '{"palette": {"themePrimary": "#test-primary"}}',
  backgroundcolor: '#bcd3eb',
  text: "This is a calendar",
  language: 'en-us',
  FirstDayOfWeek: "Monday"
}