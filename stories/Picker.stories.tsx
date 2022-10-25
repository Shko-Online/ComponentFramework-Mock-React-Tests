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
import { ComponentFrameworkMockGeneratorReact } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator/ComponentFramework-Mock-Generator-React';
import {Picker} from '@powercat/picker/Picker';
import {
  IInputs,
  IOutputs,
} from "@powercat/picker/Picker/generated/ManifestTypes";
import { DecimalNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DecimalNumberProperty.mock';
import { TwoOptionsPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { WholeNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { EntityRecord } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock';
import { SuggestionsColumns, TagsColumns } from '@powercat/picker/Picker/ManifestConstants';
import { ContextEx } from '@powercat/picker/Picker/ContextExtended';

export default {
    title: "PCF Components/Picker",
    argTypes: {
      hint : { type: "string"},
      searchTerms: {type : "string"}

    },
    parameters: {
      layout: "fullscreen",
    },
  } as Meta;

  const Template = (args) =>{
    const mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs> = new ComponentFrameworkMockGeneratorReact(
        Picker,
        {   TagMaxWidth: DecimalNumberPropertyMock,
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
        }
    );
    var displayNameMetadataTags =
        mockGenerator.metadata.getAttributeMetadata('!!Tags', TagsColumns.TagsDisplayName) ||
        ({ EntityLogicalName: '!!Tags', LogicalName: TagsColumns.TagsDisplayName } as ShkoOnline.StringAttributeMetadata);
    mockGenerator.metadata.upsertAttributeMetadata('!!Tags', displayNameMetadataTags);
    mockGenerator.metadata.initItems({
        '@odata.context': '#!!Tags',
        value: args.tagsItems || [],
    });

    var displayNameMetadataSug =
        mockGenerator.metadata.getAttributeMetadata('!!Suggestions', SuggestionsColumns.SuggestionsDisplayName) ||
        ({ EntityLogicalName: '!!Suggestions', LogicalName: SuggestionsColumns.SuggestionsDisplayName } as ShkoOnline.StringAttributeMetadata);
    mockGenerator.metadata.upsertAttributeMetadata('!!Suggestions', displayNameMetadataSug);
    mockGenerator.metadata.initItems({
        '@odata.context': '#!!Suggestions',
        value: args.suggestionItems|| [],
    });
    mockGenerator.context.mode.allocatedHeight = 500;
    mockGenerator.context.mode.allocatedWidth = 500;
    mockGenerator.context.mode.trackContainerResize(true);
    mockGenerator.context.parameters.Suggestions.paging.setPageSize(500);
    mockGenerator.context.parameters.Tags.paging.setPageSize(500);
    mockGenerator.metadata.initCanvasItems([
      {
        HintText: args.HintText,   
        SearchTermToShortMessage: args.SearchTermToShortMessage,
      },
    ]);
    mockGenerator.ExecuteInit();
    return mockGenerator.ExecuteUpdateView();
   
  }

  export const Primary = Template.bind({});
Primary.args = {
    suggestionItems : [
         {  id: "1",
            [SuggestionsColumns.SuggestionKey]: 'green',
            [SuggestionsColumns.SuggestionsDisplayName]: 'Green',
            [SuggestionsColumns.SuggestionsBackgroundColor]:'green'

        },
        {  id: "2",
            [SuggestionsColumns.SuggestionKey]: 'pink',
            [SuggestionsColumns.SuggestionsDisplayName]: 'Pink',
            [SuggestionsColumns.SuggestionsBackgroundColor]:'pink',
        },
    ],
    suggestionsColumns:[
        {displayName: 'SuggestionsKey', name: null, dataType: 'SingleLine.Text', alias: 'SuggestionsKey', order: -1,visualSizeFactor: 1},
        {displayName: 'SuggestionsSubDisplayName', name: null, dataType: 'SingleLine.Text', alias: 'SuggestionsSubDisplayName', order: -1, visualSizeFactor: 1},
        {displayName: 'SuggestionsBackgroundColor', name: null, dataType: 'SingleLine.Text', alias: 'SuggestionsBackgroundColor', order: -1, visualSizeFactor: 1},
    ],
    tagsItems:[
         {  id: "aa",
            [TagsColumns.TagsKey]: 'red',
            [TagsColumns.TagsDisplayName]: 'Red',
            [TagsColumns.TagsIconName]: 'Edit',
            [TagsColumns.TagsBackgroundColor]:'red',
        },
        {   id: "ab",
            [TagsColumns.TagsKey]: 'blue',
            [TagsColumns.TagsDisplayName]: 'Blue',
            [TagsColumns.TagsIconName]: 'Add',
            [TagsColumns.TagsBackgroundColor]:'Blue'
        },
        {   id: "ac",
            [TagsColumns.TagsKey]: 'green',
            [TagsColumns.TagsDisplayName]: 'Green',
            [TagsColumns.TagsIconName]: 'Cancel',
            [TagsColumns.TagsBackgroundColor]:'green'
        },
        
    ],
    tagsColumns:[
        {displayName: 'TagsKey', name: null, dataType: 'SingleLine.Text', alias: 'TagsKey', order: -1, visualSizeFactor: 1},
        {displayName: 'TagsDisplayName', name: null, dataType: 'SingleLine.Text', alias: 'TagsDisplayName', order: -1, visualSizeFactor: 1},
        {displayName: 'TagsIconName', name: null, dataType: 'SingleLine.Text', alias: 'TagsIconName', order: -1, visualSizeFactor: 1},
        {displayName: 'TagsBackgroundColor', name: null, dataType: 'SingleLine.Text', alias: 'TagsBackgroundColor', order: -1, visualSizeFactor: 1}

    ],
    HintText : "Search",
    SearchTermToShortMessage: "Continue Typing...",
};