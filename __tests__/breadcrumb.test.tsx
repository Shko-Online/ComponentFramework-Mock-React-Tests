/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import sinon from 'sinon';
import {
    ComponentFrameworkMockGeneratorReact,
    StringPropertyMock,
    WholeNumberPropertyMock,
    DataSetMock,
} from '@shko.online/componentframework-mock';
import { IInputs, IOutputs } from '@powercat/breadcrumb/Breadcrumb/generated/ManifestTypes';
import { Breadcrumb } from '@powercat/breadcrumb/Breadcrumb';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('BreadCrumb', () => {
    let mockGenerator: ComponentFrameworkMockGeneratorReact<IInputs, IOutputs>;
    beforeEach(() => {
        mockGenerator = new ComponentFrameworkMockGeneratorReact(Breadcrumb, {
            items: DataSetMock,
            AccessibilityLabel: StringPropertyMock,
            MaxDisplayedItems: WholeNumberPropertyMock,
            OverflowIndex: WholeNumberPropertyMock,
            InputEvent: StringPropertyMock,
            Theme: StringPropertyMock,
        });
    });

    afterEach(() => {
        document.body.innerHTML = null;
    });

    it('renders', () => {
        mockGenerator.ExecuteInit();
        const element = mockGenerator.ExecuteUpdateView();
        expect(element).toMatchSnapshot();
    });
    it('renders dummy items when no items configured', () => {
        mockGenerator.ExecuteInit();
        // Simulate there being no items bound - which causes an error on the parameters
        mockGenerator.context.parameters.items.error = true;
        sinon.assert.calledOnce(mockGenerator.control.init);
        const element = mockGenerator.ExecuteUpdateView();
        expect(element).toMatchSnapshot();
    });
    it('raises the onSelect event', () => {
        mockGenerator.ExecuteInit();
        const breadcrumbElement = mockGenerator.ExecuteUpdateView();

        const firstCommandReference = {
            id: { guid: '1' },
            name: '1',
        } as ComponentFramework.EntityReference;

        mockGenerator.context.parameters.items.records['1'].getNamedReference = jest
            .fn()
            .mockReturnValueOnce(firstCommandReference);
        const breadCrumb = mount(breadcrumbElement);
        const breadcrumbNode = breadCrumb.find('.ms-Breadcrumb-itemLink').first();
        expect(breadcrumbNode.length).toEqual(1);

        breadcrumbNode.simulate('click');
        expect(mockGenerator.context.parameters.items.openDatasetItem).toBeCalledTimes(1);
        expect(mockGenerator.context.parameters.items.openDatasetItem).toBeCalledWith(firstCommandReference);
    });
    it('theme', async () => {
        mockGenerator.ExecuteInit();
        mockGenerator.context.parameters.Theme.raw = JSON.stringify({
            palette: {
                themePrimary: '#0078d4',
            },
        });
        act(() => {
            mockGenerator.ExecuteInit();
            mockGenerator.ExecuteUpdateView();
        });
        const element = mockGenerator.ExecuteUpdateView();
        expect(element).toMatchSnapshot();
    });
});
