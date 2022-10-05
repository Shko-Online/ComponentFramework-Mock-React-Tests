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
    const Tags = mockGenerator.context.parameters.Tags as DataSetMock;
    const Suggestions = mockGenerator.context.parameters.Suggestions as DataSetMock;

    Tags.columns= args.tagsColumns;
    Tags.initRecords((args.tagsItems || []).map((item) => {
        const row = new EntityRecord(undefined, item.id, item[TagsColumns.TagsDisplayName]);
        row.columns["id"] = item.id; row.columns["id"] = item.id;
        row.columns[TagsColumns.TagsKey] = item[TagsColumns.TagsKey];
        row.columns[TagsColumns.TagsDisplayName] = item[TagsColumns.TagsDisplayName];
        row.columns[TagsColumns.TagsIconName]= item[TagsColumns.TagsIconName];
        row.columns[TagsColumns.TagsBackgroundColor]= item[TagsColumns.TagsBackgroundColor];

       
        return row;
      }))

    Suggestions.columns = args.suggestionsColumns;
    Suggestions.initRecords((args.suggestionItems || []).map((item) => {
        const row = new EntityRecord(undefined, item.id, item[SuggestionsColumns.SuggestionKey]);

        row.columns[SuggestionsColumns.SuggestionKey] = item[SuggestionsColumns.SuggestionKey];
        row.columns [SuggestionsColumns.SuggestionsDisplayName] =item [SuggestionsColumns.SuggestionsDisplayName];
        row.columns[SuggestionsColumns.SuggestionsBackgroundColor]= item[ SuggestionsColumns.SuggestionsBackgroundColor];
        return row;
      }));

      (mockGenerator.context as unknown as ContextEx)["accessibility"] = {
          assignedTabIndex: 1
      }
   
    mockGenerator.context.mode.allocatedHeight = 500;
    mockGenerator.context.mode.allocatedWidth = 500;
    mockGenerator.context.mode.trackContainerResize(true);
    mockGenerator.context.parameters.Suggestions.paging.setPageSize(500);
    mockGenerator.context.parameters.Tags.paging.setPageSize(500);

    const Hint =mockGenerator.context.parameters.HintText as StringPropertyMock;
    Hint.setValue(args.hint);
    const SearchTermToShortMessage = mockGenerator.context.parameters.SearchTermToShortMessage as StringPropertyMock;
    SearchTermToShortMessage.setValue(args.searchTerms);

    mockGenerator.ExecuteInit();
    const Component = mockGenerator.ExecuteUpdateView();
    return Component;
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
    hint : "Search",
    searchTerms: "Continue Typing...",
};