import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";
describe('Tests in useForm', () => { 

    const initialForm = { 
        name: "Margarita",
        email: "margarita@gmail.com"
    }
    test('should return the default values', () => { 
        const { result } = renderHook( () => useForm(initialForm) );

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          }
      )
    });

    test('should change the name in the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: "Francisco" } })
        });

        expect(result.current.name).toBe("Francisco");
        expect(result.current.formState.name).toBe("Francisco");
    });

    test('should reset the values in the form', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: "Francisco" } })
            onResetForm()
        });
        
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});