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
import { IInputs, IOutputs } from '@powercat/breadcrumb/Breadcrumb/generated/ManifestTypes';
import { Breadcrumb } from '@powercat/breadcrumb/Breadcrumb';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { WholeNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { action } from '@storybook/addon-actions';
import { ItemColumns } from '@powercat/breadcrumb/Breadcrumb/ManifestConstants';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'PCF Components/Breadcrumb',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        onClick: { action: 'clicked' },
        LastSelected: { control: 'select', options: ['text1', 'text2', 'text3', 'text4'] },
    },
} as Meta;
const Template = (args) => {
    const [, updateArgs] = useArgs();
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(Breadcrumb, {
            items: DataSetMock,
            AccessibilityLabel: StringPropertyMock,
            MaxDisplayedItems: WholeNumberPropertyMock,
            OverflowIndex: WholeNumberPropertyMock,
            InputEvent: StringPropertyMock,
            Theme: StringPropertyMock,
        });

    const logicalName = '!!!items';
    mockGenerator.context._parameters.items._Bind(logicalName, 'items');
    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: logicalName,
            LogicalName: logicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: ItemColumns.DisplayName,
            Attributes: [
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.DisplayName,
                } as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: 'myId',
                } as ShkoOnline.StringAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.Clickable,
                } as ShkoOnline.BooleanAttributeMetadata,
                {
                    EntityLogicalName: '!!items',
                    LogicalName: ItemColumns.Key,
                } as ShkoOnline.NumberAttributeMetadata,
            ],
        },
    ]);

    mockGenerator.metadata.initItems({
        '@odata.context': '#!!!items',
        value: args.items || [],
    });

    mockGenerator.context._parameters.items.openDatasetItem.callsFake((item) => {
        console.log(item.id);
        action('OpenDatasetItem')(item);
        updateArgs({ LastSelected: item.name });
    });

    mockGenerator.metadata.initCanvasItems([
        {
            AccessibilityLabel: args.accessibility,
            MaxDisplayedItems: args.MaxdisplayedItems,
            OverflowIndex: args.overflowIndex,
            Theme: args.theme,
        },
    ]);

    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
};

export const Primary = Template.bind({});
Primary.args = {
    items: [
        { myId: '1', [ItemColumns.Key]: 1, [ItemColumns.DisplayName]: 'Text1', [ItemColumns.Clickable]: true },
        { myId: '2', [ItemColumns.Key]: 2, [ItemColumns.DisplayName]: 'Text2', [ItemColumns.Clickable]: true },
        { myId: '3', [ItemColumns.Key]: 3, [ItemColumns.DisplayName]: 'Text3', [ItemColumns.Clickable]: true },
        { myId: '4', [ItemColumns.Key]: 4, [ItemColumns.DisplayName]: 'Text4', [ItemColumns.Clickable]: true },
    ],
    overflowIndex: 5,
    accessibility: 'Breadcrumb Component',
    theme: JSON.stringify({
        palette: {
            themePrimary: '#test-primary',
        },
    }),
    MaxdisplayedItems: 4,
};
