import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Edit from '../Pages/EditAccount';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("Edit acc", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Test edit acc", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data));
            render(<Router><Edit /></Router>);
        });

        await expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("Test acc put", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data));
            render(<Router><Edit /></Router>);
        });

        fireEvent.click(screen.getByTestId("btn"))

        await expect(fetch).toHaveBeenCalledTimes(2);
    });
})
