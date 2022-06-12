import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from '../Pages/Signup';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks()

const data = {data: "Successful operation"}

describe("Sign", ()=> {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Sign render", () => {
        render(<Router><Signup/></Router>)
        expect(screen.getByRole("form")).toBeInTheDocument()
    })

    it("test sign", async ()=> {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act( async () => {
            await fetch.mockImplementationOnce(() => Promise.resolve(data))
            render(<Router><Signup/></Router>)
        })
        // eslint-disable-next-line testing-library/no-node-access
        // const signBtn = screen.getByTestId("signup").querySelector(".registerbtn")
        fireEvent.submit(screen.getByTestId("signup"))

        // await expect(fetch).toHaveBeenCalledWith("http://localhost:5000/user",
        //     {
        //         method: "POST",
        //         body: JSON.stringify({ first_name: "", last_name: "", user_name: "", email: "", password: "", status: ""}),
        //         headers: {'Content-Type': 'application/json'}
        //     });
        await expect(fetch).toHaveBeenCalledTimes(1);
    })

})
