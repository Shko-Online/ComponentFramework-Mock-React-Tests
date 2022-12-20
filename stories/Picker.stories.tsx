/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons(/* optional base url */);

import { Meta } from '@storybook/react';
import {
    ComponentFrameworkMockGeneratorReact,
    DecimalNumberPropertyMock,
    TwoOptionsPropertyMock,
    StringPropertyMock,
    WholeNumberPropertyMock,
    DataSetMock,
} from '@shko.online/componentframework-mock';
import { Picker } from '@powercat/picker/Picker';
import { IInputs, IOutputs } from '@powercat/picker/Picker/generated/ManifestTypes';
import { SuggestionsColumns, TagsColumns } from '@powercat/picker/Picker/ManifestConstants';
import { ContextEx } from '@powercat/picker/Picker/ContextExtended';

export default {
    title: 'PCF Components/Picker',
    argTypes: {
        HintText: { type: 'string' },
        SearchTermToShortMessage: { type: 'string' },
    },
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const Template = (args) => {
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> =
        new ComponentFrameworkMockGeneratorReact(Picker, {
            TagMaxWidth: DecimalNumberPropertyMock,
            AllowFreeText: TwoOptionsPropertyMock,
            SearchTermToShortMessage: StringPropertyMock,
            HintText: StringPropertyMock,
            NoSuggestionFoundMessage: StringPropertyMock,
            MinimumSearchTermLength: WholeNumberPropertyMock,
            MaxTags: WholeNumberPropertyMock,
            Error: TwoOptionsPropertyMock,
            Theme: StringPropertyMock,
            FontSize: WholeNumberPropertyMock,
            BorderRadius: WholeNumberPropertyMock,
            ItemHeight: WholeNumberPropertyMock,
            AccessibilityLabel: StringPropertyMock,
            InputEvent: StringPropertyMock,
            Tags: DataSetMock,
            Suggestions: DataSetMock,
        });
    (mockGenerator.context as unknown as ContextEx).accessibility = {
        assignedTabIndex: 0,
        assignedTooltip: '',
    };

    const tagsLogicalName = '!!!Tags';
    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: tagsLogicalName,
            LogicalName: tagsLogicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: TagsColumns.TagsDisplayName,
            Attributes: [
                'myId',
                TagsColumns.TagsKey,
                TagsColumns.TagsDisplayName,
                TagsColumns.TagsIconName,
                TagsColumns.TagsBackgroundColor,
            ].map(
                (logicalName) =>
                    ({
                        EntityLogicalName: tagsLogicalName,
                        LogicalName: logicalName,
                    } as ShkoOnline.StringAttributeMetadata),
            ),
        },
    ]);

    mockGenerator.context._parameters.Tags._Bind(tagsLogicalName, 'Tags');
    mockGenerator.context._parameters.Tags._InitItems(args.tagsItems || []);

    const suggestionsLogicalName = '!!!Suggestions';
    mockGenerator.metadata.initMetadata([
        {
            EntitySetName: suggestionsLogicalName,
            LogicalName: suggestionsLogicalName,
            PrimaryIdAttribute: 'myId',
            PrimaryNameAttribute: SuggestionsColumns.SuggestionsDisplayName,
            Attributes: [
                'myId',
                SuggestionsColumns.SuggestionKey,
                SuggestionsColumns.SuggestionsDisplayName,
                SuggestionsColumns.SuggestionsBackgroundColor,
            ].map(
                (entityLogicalName) =>
                    ({
                        EntityLogicalName: suggestionsLogicalName,
                        LogicalName: entityLogicalName,
                    } as ShkoOnline.StringAttributeMetadata),
            ),
        },
    ]);
    mockGenerator.context._parameters.Suggestions._Bind(suggestionsLogicalName, 'Suggestions');
    mockGenerator.context._parameters.Suggestions._InitItems(args.suggestionItems || []);

    mockGenerator.metadata.initCanvasItems([
        {
            HintText: args.HintText,
            SearchTermToShortMessage: args.SearchTermToShortMessage,
            assignedTabIndex: args.assignedTabIndex,
        },
    ]);

    mockGenerator.context.mode.allocatedHeight = 500;
    mockGenerator.context.mode.allocatedWidth = 500;
    mockGenerator.context.mode.trackContainerResize(true);
    mockGenerator.context.parameters.Suggestions.paging.setPageSize(500);
    mockGenerator.context.parameters.Tags.paging.setPageSize(500);

    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
};

export const Primary = Template.bind({});
Primary.args = {
    suggestionItems: [
        {
            myId: '1',
            [SuggestionsColumns.SuggestionKey]: 'green',
            [SuggestionsColumns.SuggestionsDisplayName]: 'Green',
            [SuggestionsColumns.SuggestionsBackgroundColor]: 'green',
        },
        {
            myId: '2',
            [SuggestionsColumns.SuggestionKey]: 'pink',
            [SuggestionsColumns.SuggestionsDisplayName]: 'Pink',
            [SuggestionsColumns.SuggestionsBackgroundColor]: 'pink',
        },
    ],
    tagsItems: [
        {
            myId: 'aa',
            [TagsColumns.TagsKey]: 'red',
            [TagsColumns.TagsDisplayName]: 'Red',
            [TagsColumns.TagsIconName]: 'Edit',
            [TagsColumns.TagsBackgroundColor]: 'red',
        },
        {
            myId: 'ab',
            [TagsColumns.TagsKey]: 'blue',
            [TagsColumns.TagsDisplayName]: 'Blue',
            [TagsColumns.TagsIconName]: 'Add',
            [TagsColumns.TagsBackgroundColor]: 'Blue',
        },
        {
            myId: 'ac',
            [TagsColumns.TagsKey]: 'green',
            [TagsColumns.TagsDisplayName]: 'Green',
            [TagsColumns.TagsIconName]: 'Cancel',
            [TagsColumns.TagsBackgroundColor]: 'green',
        },
    ],
    HintText: 'Search',
    SearchTermToShortMessage: 'Continue Typing...',
};
