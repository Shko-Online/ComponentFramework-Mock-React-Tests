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

import { Meta } from '@storybook/react';
import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import { IInputs, IOutputs } from '@powercat/theme-generator/ThemeGenerator/generated/ManifestTypes';
import { ThemeDesigner } from '@powercat/theme-generator/ThemeGenerator';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';

export default {
    title: 'PCF Components/ThemeDesigner',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {},
} as Meta;

const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(ThemeDesigner, {
            ThemeJSON: StringPropertyMock,
            PrimaryColor: StringPropertyMock,
            TextColor: StringPropertyMock,
            BackgroundColor: StringPropertyMock,
        });
        const ThemeJSON = mockGenerator.context.parameters.ThemeJSON as StringPropertyMock;
        ThemeJSON.setValue(args.ThemeJson);
        const PrimaryColor = mockGenerator.context.parameters.PrimaryColor as StringPropertyMock;
        PrimaryColor.setValue(args.PrimaryColor);
        const TextColor = mockGenerator.context.parameters.TextColor as StringPropertyMock;
        TextColor.setValue(args.TextColor);
        const BackgroundColor = mockGenerator.context.parameters.BackgroundColor as StringPropertyMock;
        BackgroundColor.setValue(args.BackgroundColor);

    mockGenerator.ExecuteInit();
    const component = mockGenerator.ExecuteUpdateView();
    return component;
};
export const Primary = Template.bind({});
Primary.args = {
    ThemeJson: '{"palette": {"themePrimary": "#test-primary"}}',
    PrimaryColor: "#0078d4",
    TextColor: "#323130",
    BackgroundColor: "#ffffff"
}
