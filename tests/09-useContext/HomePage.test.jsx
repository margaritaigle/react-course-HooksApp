import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext";
import { UserContext } from "../../src/09-useContext/context/UserContext";

const user = {
  id: 1,
  name: "Margarita",
};
describe("Testing <HomePage />", () => {
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("preTag");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("preTag");

    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name.toString());
  });
});
