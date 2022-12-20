/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
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
