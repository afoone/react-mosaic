import { render, screen } from '@testing-library/react';
import TextComponent from './TextComponent'


describe("render components", () => {
    test("should render text component", async () => {
        render(<TextComponent />)
        let total = 0;
        try {
            const texts = await screen.findAllByTestId("text")
            total = texts.length
        } catch (err) { }
        expect(total).toBe(1)
    })

    test("should render the right text", async () => {
        render(<TextComponent text="pepe" />);
        const text = await screen.findByText(/pepe/i) //.catch(expect(false));
        expect(text).toBeInTheDocument();
    })
})