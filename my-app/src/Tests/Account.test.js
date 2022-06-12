import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {act} from "react-dom/test-utils";
import fetchMock from "jest-fetch-mock";
import Account from "../Pages/Account";

fetchMock.enableMocks()

const data2 = {data: "Successful operation"}

describe("Account page", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Test acc", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data2));
            render(<Router><Account /></Router>);
        });

        await expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("Test acc delete", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data2));
            render(<Router><Account /></Router>);
        });

        fireEvent.click(screen.getByTestId("btn"))

        await expect(fetch).toHaveBeenCalledTimes(2);
    });
});
