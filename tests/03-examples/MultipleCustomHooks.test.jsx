import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useCounter");
jest.mock("../../src/hooks/useFetch");

describe('Test in <MultipleCustomHooks />', () => {
    
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1, 
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('Breaking Bad Quotes')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect(nextButton.disabled).toBeTruthy();
    });

    test('should show a quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: "Margarita", quote: "May the force be with you" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText("Margarita")).toBeTruthy();
        expect(screen.getByText("May the force be with you")).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect(nextButton.disabled).toBeFalsy();
    });

    test('should call the increment function', () => {

        useFetch.mockReturnValue({
            data: [{ author: "Margarita", quote: "May the force be with you" }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled()
    });
})