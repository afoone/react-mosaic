import { render, screen } from '@testing-library/react';
import TitleComponent from './TitleComponent'


describe("render components", () => {
    test("should render text component", async () => {
        render(<TitleComponent />)
        let headingLength = 0;
        try {
            const headings = await screen.findAllByRole("heading")
            headingLength = headings.length
        } catch (err) { }
        expect(headingLength).toBe(1)
    })

    test("should render the right text", async () => {
        render(<TitleComponent text="pepe" />);
        const text = await screen.findByText(/pepe/i) //.catch(expect(false));
        expect(text).toBeInTheDocument();
    })
})