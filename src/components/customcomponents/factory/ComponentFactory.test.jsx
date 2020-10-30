import { render, screen } from '@testing-library/react';
import ComponentFactory from './ComponentFactory';

describe("render components", () => {
    test("should render heading component", async () => {
        render(<ComponentFactory type="title" />)
        let numberOfHeadings = 0;
        try {
            const headings = await screen.findAllByRole("heading");
            numberOfHeadings = headings.length;
        } catch {
        }
        expect(numberOfHeadings).toBe(1)
    })

    test("the element has data-grid in properties", () => {
        const componentDefinition = {
            type: "text",
            configuration: { text: "Un texto configurado" },
            layout: { x: 0, y: 0, w: 3, h: 2 },
        }

        jest.mock(<ComponentFactory key="1" {...componentDefinition} />)

    }
    )
})