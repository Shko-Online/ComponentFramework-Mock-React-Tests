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

initializeIcons(undefined /* optional base url */, { disableWarnings: true });

import { Meta } from '@storybook/react';
import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import { IInputs, IOutputs } from '@powercat/nav/Nav/generated/ManifestTypes';
import { Nav } from '@powercat/nav/Nav';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { TwoOptionsPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { ItemColumns } from '@powercat/nav/Nav/ManifestConstants';
import { useArgs } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';
import { within, userEvent, waitFor } from '@storybook/testing-library';

const Delay = () =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
    });

export default {
    title: 'PCF Components/Nav',
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onClick: { action: 'clicked' },
        LastSelected: {
            control: 'select',
            options: ['Pages', 'Save', 'News', 'Activity', 'More Pages', 'Save And Close'],
        },
    },
    args: {
        items: [
            {
                myId: '1',
                [ItemColumns.Key]: 'item1',
                [ItemColumns.DisplayName]: 'Pages',
                [ItemColumns.IconName]: 'FolderOpen',
                [ItemColumns.IconColor]: 'blue',
                [ItemColumns.Enabled]: true,
                [ItemColumns.Expanded]: true,
            },

            {
                myId: '3',
                [ItemColumns.Key]: 'item3',
                [ItemColumns.DisplayName]: 'Save',
                [ItemColumns.IconName]: 'Save',
                [ItemColumns.Enabled]: true,
                [ItemColumns.Expanded]: true,
                [ItemColumns.ParentKey]: 'item7',
            },
            {
                myId: '2',
                [ItemColumns.Key]: 'item2',
                [ItemColumns.DisplayName]: 'News',
                [ItemColumns.IconName]: 'News',
                [ItemColumns.IconColor]: 'red',
                [ItemColumns.Enabled]: true,
                [ItemColumns.Expanded]: true,
                [ItemColumns.ParentKey]: 'item7',
            },
            {
                myId: '6',
                [ItemColumns.Key]: 'commandNewFrom',
                [ItemColumns.DisplayName]: 'Activity',
                [ItemColumns.IconName]: 'OfficeFormsLogo',
                [ItemColumns.IconColor]: 'blue',
                [ItemColumns.Enabled]: false,
                [ItemColumns.ParentKey]: 'item1',
                [ItemColumns.Expanded]: true,
                [ItemColumns.TextColor]: 'red',
            },
            {
                myId: '7',
                [ItemColumns.Key]: 'item7',
                [ItemColumns.DisplayName]: 'More Pages',
                [ItemColumns.IconName]: 'OfficeFormsLogo',
                [ItemColumns.IconColor]: 'blue',
                [ItemColumns.Enabled]: true,
                [ItemColumns.ParentKey]: 'item1',
                [ItemColumns.Expanded]: true,
                [ItemColumns.TextColor]: 'blue',
            },
            {
                myId: '8',
                [ItemColumns.Key]: 'item6',
                [ItemColumns.DisplayName]: 'Save And Close',
                [ItemColumns.IconName]: 'Save',
                [ItemColumns.IconColor]: 'green',
                [ItemColumns.Enabled]: false,
                [ItemColumns.Expanded]: true,
            },
        ],
    },
} as Meta;

const Template = (args: {
    items: { id: string; ItemEnabled: boolean; ItemIconColor: string }[];
    EnableNotes: boolean;
    theme: string;
    CustomIconColor: boolean;
    AccessibilityLabel: string;
    Expanded: boolean;
}) => {
    const [{ items }, updateArgs] = useArgs();
    const argsItems = items as { id: string; ItemEnabled: boolean; ItemIconColor: string; ItemExpanded: boolean }[];
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(Nav, {
            SelectedKey: StringPropertyMock,
            Theme: StringPropertyMock,
            AccessibilityLabel: StringPropertyMock,
            CollapseByDefault: TwoOptionsPropertyMock,
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
                ItemColumns.Enabled,
                ItemColumns.ParentKey,
                ItemColumns.Expanded,
                ItemColumns.TextColor,
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
    mockGenerator.context._parameters.items._InitItems(args.items);
    mockGenerator.context._parameters.items.openDatasetItem.callsFake((item) => {
        console.log(item.id);
        action('OpenDatasetItem')(item);
        updateArgs({ LastSelected: item.name });
    });

    mockGenerator.metadata.initCanvasItems([
        {
            AccessibilityLabel: args.AccessibilityLabel,
            Theme: args.theme,
            CollapseByDefault: args.Expanded,
            InputEvent: 'SetFocus' + Math.random().toString(),
        },
    ]);

    if (args.EnableNotes !== undefined) {
        argsItems
            .filter((item) => item.id === '8')
            .forEach((item) => {
                console.log('Enable notes!', !!args.EnableNotes);
                item.ItemEnabled = !!args.EnableNotes;
            });
    }

    if (args.CustomIconColor !== undefined) {
        argsItems
            .filter((item) => item.id === '6' && item.ItemIconColor)
            .forEach((item) => {
                args.CustomIconColor === true ? (item.ItemIconColor = 'red') : (item.ItemIconColor = 'blue');
            });
    }
    
    mockGenerator.ExecuteInit();
    mockGenerator.notifyOutputChanged();
    return mockGenerator.ExecuteUpdateView();
};
export const Primary = Template.bind({});
Primary.args = {
    EnableNotes: true,
    AccessibilityLabel: 'This is a Nav Component',
    theme: JSON.stringify({
        palette: {
            themePrimary: '#test-primary',
        },
    }),
};

export const EnableNotes = Template.bind({});
EnableNotes.args = {
    AccessibilityLabel: 'This is a Nav Component',
    theme: JSON.stringify({
        palette: {
            themePrimary: '#test-primary',
        },
    }),
    EnableNotes: true,
    CustomIconColor: true,
    ShowActivityLink: true,
    InputEvent: 'SetFocus' + Math.random().toString(),
};

EnableNotes.parameters = {
    controls: {
        include: ['EnableNotes', 'CustomIconColor'],
    },
};

Primary.play = async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('More Pages'));
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('Pages'));
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('Pages'));
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('More Pages'));
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('News'));
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('Save'));
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('Save And Close'));
};
EnableNotes.play = async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await waitFor(Delay, { timeout: 2000 });
    await userEvent.click(canvas.getByText('Save And Close'));
    await waitFor(Delay, { timeout: 2000 });
};
