import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Teacher from '../Pages/AboutTeacher';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("Teacher", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it.only("Test teacher", async ()=> {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act( async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data))
            render(<Router><Teacher/></Router>)
        })

        await expect(fetch).toHaveBeenCalledTimes(1);
    })
})
