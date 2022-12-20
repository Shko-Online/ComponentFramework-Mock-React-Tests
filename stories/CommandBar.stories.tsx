/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);
import { Meta } from '@storybook/react';
import {
    ComponentFrameworkMockGeneratorReact,
    StringPropertyMock,
    DataSetMock,
} from '@shko.online/componentframework-mock';
import { CommandBar } from '@powercat/command-bar/CommandBar';
import { IInputs, IOutputs } from '@powercat/command-bar/CommandBar/generated/ManifestTypes';
import resourse from '@powercat/command-bar/CommandBar/strings/CommandBar.1033.resx';
import { action } from '@storybook/addon-actions';
import { ItemColumns } from '@powercat/command-bar/CommandBar/ManifestConstants';
import { useArgs } from '@storybook/client-api';
import { within, userEvent, waitFor } from '@storybook/testing-library';

const Delay = () =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
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

    const itemLogicalName = '!!!items';

    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: itemLogicalName,
            LogicalName: itemLogicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: ItemColumns.DisplayName,
            Attributes: [
                'myId',
                ItemColumns.DisplayName,
                ItemColumns.Key,
                ItemColumns.IconName,
                ItemColumns.IconColor,
            ].map(
                (logicalName) =>
                    ({
                        EntityLogicalName: itemLogicalName,
                        LogicalName: logicalName,
                    } as ShkoOnline.StringAttributeMetadata),
            ),
        },
    ]);

    mockGenerator.context._parameters.items._Bind(itemLogicalName, 'items');
    mockGenerator.context._parameters.items._InitItems(args.items || []);
    mockGenerator.context._parameters.items.openDatasetItem.callsFake((item) => {
        console.log(item.id);
        action('OpenDatasetItem')(item);
        updateArgs({ CommandSelected: item.name });
    });

    mockGenerator.context._SetCanvasItems({
        Theme: args.theme,
        AccessibilityLabel: args.AccessibilityLabel,
        InputEvent: args.inputEvent,
    });

    mockGenerator.context.mode.allocatedHeight = 200;
    mockGenerator.context.mode.allocatedWidth = 200;
    mockGenerator.context.mode.isVisible = true;
    mockGenerator.context.mode.isControlDisabled = false;

    mockGenerator.SetControlResource(resourse);
    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
};
export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            myId: '1',
            [ItemColumns.DisplayName]: 'Open Pane',
            [ItemColumns.Key]: 'OpenPane',
            [ItemColumns.IconName]: 'OpenPane',
            [ItemColumns.IconColor]: 'blue',
        },
        {
            myId: '2',
            [ItemColumns.DisplayName]: 'Open In New Window',
            [ItemColumns.Key]: 'OpenInNewWindow',
            [ItemColumns.IconName]: 'OpenInNewWindow',
            [ItemColumns.IconColor]: 'blue',
        },
        {
            myId: '3',
            [ItemColumns.Key]: 'commandSave',
            [ItemColumns.DisplayName]: 'Save',
            [ItemColumns.IconName]: 'Save',
            [ItemColumns.IconColor]: 'green',
        },
        {
            myId: '5',
            [ItemColumns.Key]: 'commandSettings',
            [ItemColumns.DisplayName]: 'Settings',
            [ItemColumns.IconName]: 'Settings',
            [ItemColumns.IconColor]: 'black',
        },
        {
            myId: '6',
            [ItemColumns.Key]: 'commandSaveAndClose',
            [ItemColumns.DisplayName]: 'Save And Close',
            [ItemColumns.IconName]: 'Save',
            [ItemColumns.IconColor]: 'green',
        },
        // Sub Items Second Level
        {
            myId: '7',
            [ItemColumns.Key]: 'commandUpload',
            [ItemColumns.DisplayName]: 'Upload',
            [ItemColumns.IconName]: 'Upload',
            [ItemColumns.IconColor]: 'blue',
        },
        {
            myId: '8',
            [ItemColumns.Key]: 'commandDownload',
            [ItemColumns.DisplayName]: 'Download',
            [ItemColumns.IconName]: 'Download',
            [ItemColumns.IconColor]: 'red',
        },
    ],
    theme: '{"palette": {"themePrimary": "#test-primary"}}',
    inputEvent: 'SetFocus',
    AccessibilityLabel: 'Command Bar component',
};

Primary.play = async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText(''));
    await waitFor(Delay, { timeout: 2000 });
    console.log(args.checked);
};
