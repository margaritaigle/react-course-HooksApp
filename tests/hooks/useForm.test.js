import { renderHook } from "@testing-library/react";
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
 });