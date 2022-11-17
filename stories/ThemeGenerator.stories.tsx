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
import { ComponentFrameworkMockGeneratorReact, StringPropertyMock } from '@shko.online/componentframework-mock';
import { IInputs, IOutputs } from '@powercat/theme-generator/ThemeGenerator/generated/ManifestTypes';
import { ThemeDesigner } from '@powercat/theme-generator/ThemeGenerator';

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

    mockGenerator.metadata.initCanvasItems([
        {
            ThemeJSON: args.ThemeJSON,
            TextColor: args.TextColor,
            PrimaryColor: args.PrimaryColor,
            BackgroundColor: args.BackgroundColor,
            
        },
    ]);
    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
};
export const Primary = Template.bind({});
Primary.args = {
    ThemeJson: '{"palette": {"themePrimary": "#test-primary"}}',
    PrimaryColor: '#0078d4',
    TextColor: '#323130',
    BackgroundColor: '#ffffff',
};
