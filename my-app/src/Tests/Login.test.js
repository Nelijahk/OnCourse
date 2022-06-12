import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Pages/Login';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("Login", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Login render", () => {
        render(<Router><Login/></Router>)
        expect(screen.getByRole("form")).toBeInTheDocument()
    })

    it("test user login", async ()=> {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act( async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data))
            render(<Router><Login/></Router>)
        })
        // eslint-disable-next-line testing-library/no-node-access
        fireEvent.submit(screen.getByRole("form"))

        expect(screen.getByTestId("login-button")).toBeTruthy();

        await expect(fetch).toHaveBeenCalledTimes(1);
    })

})



