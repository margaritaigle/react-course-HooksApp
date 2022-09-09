import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Testing <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'demo todo',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should show the pending todo to complete', () => {

        render(<TodoItem
                    todo={todo}
                    onDeleteTodo={onDeleteTodoMock}
                    onToggleTodo={onToggleTodoMock} />);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('should show the todo complete', () => {

        todo.done = true;

        render(<TodoItem
                    todo={todo}
                    onDeleteTodo={onDeleteTodoMock}
                    onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span should call toggleTodo when the user clicks', () => {

        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('button should call deleteTodo when the user clicks', () => {

        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock} />);

        const deleteButton = screen.getByRole('button', {name: "Borrar"});
        fireEvent.click(deleteButton);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo.id);
    });
});