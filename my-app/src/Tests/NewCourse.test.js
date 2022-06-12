import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NewCourse from '../Pages/NewCourse';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("New course", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("New course render", () => {
        render(<Router><NewCourse/></Router>)
        expect(screen.getByRole("form")).toBeInTheDocument()
    })

    it("Test new course", async ()=> {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act( async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data))
            render(<Router><NewCourse/></Router>)
        })
        // eslint-disable-next-line testing-library/no-node-access
        fireEvent.click(screen.getByTestId("btn"))

        await expect(fetch).toHaveBeenCalledTimes(1);
    })
})
