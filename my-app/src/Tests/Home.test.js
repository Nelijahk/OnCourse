import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Pages/Home';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("Home", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Test home", async ()=> {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act( async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data))
            render(<Router><Home/></Router>)
        })

        await expect(fetch).toHaveBeenCalledTimes(1);
    })
})
