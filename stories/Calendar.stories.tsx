/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

import { Meta } from "@storybook/react";
import { ComponentFrameworkMockGeneratorReact, DateTimePropertyMock, EnumPropertyMock, StringPropertyMock, TwoOptionsPropertyMock } from "@shko.online/componentframework-mock";
import {
  IInputs,
  IOutputs,
} from "@powercat/calendar/Calendar/generated/ManifestTypes";
import { Calendar } from "@powercat/calendar/Calendar"
import { useArgs } from '@storybook/client-api';

export default {
  title: "PCF Components/Calendar",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    FirstDayOfWeek: {
      control: 'select',
      options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    SelectedDateValue: {
      control: 'date'
    }
  },
} as Meta;

type DaysOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

const Template = (args) => {
  const [{ SelectedDateValue: selectedDateValue }, updateArgs] = useArgs();

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

  mockGenerator.metadata.initCanvasItems([
    {
      Theme: args.theme,
      AccessibilityLabel: args.AccessibilityLabel,
      BackgroundColor: args.BackgroundColor,
      Language: args.Language,
      MaxDate: args.MaxDate,
      MinDate: args.MinDate,
      SelectedDateValue: selectedDateValue,
      MonthPickerVisible: args.MonthPickerVisible,
      FirstDayOfWeek: args.FirstDayOfWeek,
      HighlightSelectedMonth: true,
      HighlightCurrentMonth: true,
      DayPickerVisible: true,
      ShowGoToToday: true,
      ShowWeekNumbers: true,
      ShowSixWeeksByDefault: true,
    },
  ]);

  mockGenerator.notifyOutputChanged.callsFake(() => {
    const { SelectedDateValue } = mockGenerator.control.getOutputs() || {};
    console.log(SelectedDateValue);
    updateArgs({ SelectedDateValue });
  });

  mockGenerator.ExecuteInit();
  return mockGenerator.ExecuteUpdateView();

};
export const Primary = Template.bind({});
Primary.args = {
  theme: '{"palette": {"themePrimary": "#test-primary"}}',
  BackgroundColor: '#bcd3eb',
  AccessibilityLabel: "This is a calendar",
  Language: 'en-us',
  FirstDayOfWeek: "Monday",
  MaxDate: new Date(2099, 0, 1),
  MinDate: new Date(2001, 0, 1),
  MonthPickerVisible: true,
  SelectedDateValue: new Date()
}