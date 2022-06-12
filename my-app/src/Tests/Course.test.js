import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Course from '../Pages/Course';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("Course", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    // it("Course render", () => {
    //     render(<Router><Course/></Router>)
    //     expect(screen.getByRole("form")).toBeInTheDocument()
    // })

    it("Test course", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data));
            render(<Router><Course /></Router>);
        });

        await expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("Test course delete", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data));
            render(<Router><Course /></Router>);
        });

        fireEvent.click(screen.getByTestId("btn"))

        await expect(fetch).toHaveBeenCalledTimes(2);
    });

    it("Test course entroll", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data));
            render(<Router><Course /></Router>);
        });

        fireEvent.click(screen.getByTestId("btn2"))

        await expect(fetch).toHaveBeenCalledTimes(2);
    });
})
