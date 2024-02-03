import {render, screen} from '@testing-library/react'
import HeaderContents from "../HeaderContents";
import userEvent from "@testing-library/user-event";

describe("HeaderContents", ()=> {


    test("render HeaderContents", async ()=> {
        render(<HeaderContents/>)
        expect(screen.getByText("Stock.")).toBeVisible()
    })

    it("select any stock", async ()=> {
        const setStock = jest.fn()
        render(<HeaderContents setStock={ setStock }/>)
        const selector = screen.getByRole("combobox")
        userEvent.selectOptions(selector, "MSFT")
        expect(setStock).toHaveBeenCalledWith("MSFT")
    })
})