import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext";

describe("Tests in <MainApp />", () => {
  test("should show the HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Home" }).className).toBe(
      "nav-link active"
    );
  });

  test("should show the LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Login" }).className).toBe(
      "nav-link active"
    );
  });

  test("should show the AboutPage", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("AboutPage")).toBeTruthy();
    expect(screen.getByRole("link", { name: "About" }).className).toBe(
      "nav-link active"
    );
  });
});
