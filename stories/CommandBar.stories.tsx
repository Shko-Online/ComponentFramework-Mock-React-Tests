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
import { CommandBar } from '@powercat/command-bar/CommandBar';
import { IInputs, IOutputs } from '@powercat/command-bar/CommandBar/generated/ManifestTypes';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import resourse from '@powercat/command-bar/CommandBar/strings/CommandBar.1033.resx';

import { EntityRecord } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock';
import { action } from '@storybook/addon-actions';
import { ItemColumns } from '@powercat/command-bar/CommandBar/ManifestConstants';
import { useArgs } from '@storybook/client-api';
import { within, userEvent, waitFor } from '@storybook/testing-library';

import canvasColumns from './canvasColumns';


const Delay = ()=>
  new Promise<void>((resolve)=>{
    setTimeout(()=>resolve(), 1000);
  })
export default {
    title: 'PCF Components/CommandBar',
    argTypes: {
        onClick: { action: 'clicked' },
        CommandSelected: {
            control: 'select',
            options: ['OpenPane', 'OpenInNewWindow', 'Save', 'Settings', 'SaveAndClose', 'Upload', 'Download'],
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const Template = (args) => {
    const [, updateArgs] = useArgs();
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(CommandBar, {
            Theme: StringPropertyMock,
            AccessibilityLabel: StringPropertyMock,
            InputEvent: StringPropertyMock,
            items: DataSetMock,
        });
    const items = mockGenerator.context.parameters.items as DataSetMock;
    items.columns = canvasColumns;

    items.initRecords(
        (args.items || []).map((item) => {
            const row = new EntityRecord(undefined, item.id, item[ItemColumns.DisplayName]);
            row.columns['id'] = item.id;
            row.columns[ItemColumns.DisplayName] = item[ItemColumns.DisplayName];
            row.columns[ItemColumns.Key] = item[ItemColumns.Key];
            row.columns[ItemColumns.IconName] = item[ItemColumns.IconName];
            row.columns[ItemColumns.IconColor] = item[ItemColumns.IconColor];
            return row;
        }),
    );
    items.openDatasetItem.callsFake((item) => {
        console.log(item.id);
        action('OpenDatasetItem')(item);
        updateArgs({ CommandSelected: item.name });
    });
    const theme = mockGenerator.context.parameters.Theme as StringPropertyMock;

    const accessibility = mockGenerator.context.parameters.AccessibilityLabel as StringPropertyMock;
    const Theme = mockGenerator.context.parameters.Theme as StringPropertyMock;
    Theme.setValue(args.theme);
    const InputEvent = mockGenerator.context.parameters.InputEvent as StringPropertyMock;
    InputEvent.setValue(args.inputEvent);

    mockGenerator.context.mode.allocatedHeight = 200;
    mockGenerator.context.mode.allocatedWidth = 200;
    mockGenerator.context.mode.isVisible = true;
    mockGenerator.context.mode.isControlDisabled = false;

    mockGenerator.SetControlResource(resourse);
    mockGenerator.ExecuteInit();
    const Component = mockGenerator.ExecuteUpdateView();
    return Component;
};
export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            id: '1',
            [ItemColumns.DisplayName]: 'OpenPane',
            [ItemColumns.Key]: 'OpenPane',

            [ItemColumns.IconName]: 'OpenPane',
            [ItemColumns.IconColor]: 'blue',
        },
        {
            id: '2',
            [ItemColumns.DisplayName]: 'OpenInNewWindow',
            [ItemColumns.Key]: 'OpenInNewWindow',

            [ItemColumns.IconName]: 'OpenInNewWindow',
            [ItemColumns.IconColor]: 'blue',
        },
        {
            id: '3',
            [ItemColumns.Key]: 'commandSave',
            [ItemColumns.DisplayName]: 'Save',
            [ItemColumns.IconName]: 'Save',
            [ItemColumns.IconColor]: 'green',
        },

        {
            id: '5',
            [ItemColumns.Key]: 'commandSettings',
            [ItemColumns.DisplayName]: 'Settings',
            [ItemColumns.IconName]: 'Settings',
            [ItemColumns.IconColor]: 'black',
        },
        {
            id: '6',
            [ItemColumns.Key]: 'commandSaveAndClose',
            [ItemColumns.DisplayName]: 'SaveAndClose',
            [ItemColumns.IconName]: 'Save',
            [ItemColumns.IconColor]: 'green',
        },
        // Sub Items Second Level
        {
            id: '7',
            [ItemColumns.Key]: 'commandUpload',
            [ItemColumns.DisplayName]: 'Upload',
            [ItemColumns.IconName]: 'Upload',
            [ItemColumns.IconColor]: 'blue',
        },
        {
            id: '8',
            [ItemColumns.Key]: 'commandDownload',
            [ItemColumns.DisplayName]: 'Download',
            [ItemColumns.IconName]: 'Download',
            [ItemColumns.IconColor]: 'red',
        },
    ],
    theme: '{"palette": {"themePrimary": "#test-primary"}}',
    inputEvent: 'SetFocus',
};

Primary.play = async({canvasElement, args}) => {
    const canvas  = within(canvasElement);
    await waitFor(Delay, {timeout: 2000});
  await userEvent.click( canvas.getByText(""));
  await waitFor(Delay, {timeout: 2000});
  console.log(args.checked);
}
