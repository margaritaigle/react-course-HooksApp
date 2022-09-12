import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("testing <LoginPage />", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should render the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    expect(screen.getByLabelText("preTag").innerHTML).toBe("null");
    screen.debug();
  });

  test("should call setUser when clicking the button", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button", { name: "Set user" });
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalledWith({
      email: "margarita@gmail.com",
      id: 123,
      name: "Margarita",
    });
  });
});
