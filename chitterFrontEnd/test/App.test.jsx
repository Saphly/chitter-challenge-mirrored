import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { afterEach, vi, describe, test, expect } from "vitest";

import App from "../src/App.jsx";
import { login } from "../src/utils/loginServices";
import { register } from "../src/utils/registerServices";
import { postPeeps, getPeeps } from "../src/utils/peepDataServices";
import samplePeeps from "./samplePeeps.json";
import sampleUsers from "./sampleUsers.json";

vi.mock("../src/utils/loginServices.js", () => {
  return {
    login: vi.fn(),
  };
});

vi.mock("../src/utils/registerServices.js", () => {
  return {
    register: vi.fn(),
  };
});

vi.mock("../src/utils/peepDataServices.js", () => ({
  postPeeps: vi.fn(),
  getPeeps: vi.fn(),
}));

const loginUser = async (email, password) => {
  await userEvent.click(
    screen.getByRole("button", {
      name: /login/i,
    })
  );

  await userEvent.type(screen.getByLabelText("emailLoginInput"), email);
  await userEvent.type(screen.getByLabelText("passwordLoginInput"), password);
  await userEvent.click(screen.getByLabelText("modalLoginFormButton"));
};

describe("App Tests", () => {
  afterEach(() => vi.resetAllMocks());

  describe("App pre and after data return render Tests", () => {
    test("should render 'There are no new peeps!' when empty array returned from server", async () => {
      getPeeps.mockImplementation(() => {
        return { peeps: [], error: { message: "There are no new peeps!" } };
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const getErrorRender = await screen.findByText(
        /there are no new peeps!/i
      );

      expect(getErrorRender).toBeInTheDocument();
    });

    test("should render the peep input textbox after user logs in", async () => {
      login.mockImplementation(({ email, password }) => {
        const user = sampleUsers.find(
          (u) => u.email === email && u.password === password
        );

        if (user === undefined) {
          return { user: {}, error: { message: "Details not found" } };
        }

        return { user };
      });

      getPeeps.mockImplementation(() => {
        return { peeps: samplePeeps };
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      await loginUser("a@example.com", "asd");

      const postPeepButton = await screen.findByRole("button", {
        name: /post/i,
      });
      const textbox = await screen.getByRole("textbox");
      const title = await screen.getByText(/what's happening\?/i);

      expect(postPeepButton).toBeVisible();
      expect(textbox).toBeVisible();
      expect(title).toBeVisible();
    });

    test("should render the new peep after user submits a new peep", async () => {
      let peeps = [...samplePeeps];

      login.mockImplementation(({ email, password }) => {
        const user = sampleUsers.find(
          (u) => u.email === email && u.password === password
        );

        if (user === undefined) {
          return { user: {}, error: { message: "Details not found" } };
        }

        return { user };
      });

      getPeeps.mockImplementation(() => {
        return { peeps };
      });

      postPeeps.mockImplementation((peep) => {
        const peepWithId = { ...peep, _id: "foobarbaz" };
        peeps.push(peepWithId);
        return { peep: peepWithId, status: 200 };
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      await loginUser("a@example.com", "asd");

      const postPeepButton = await screen.findByRole("button", {
        name: /post/i,
      });
      const textbox = await screen.getByRole("textbox");
      await userEvent.type(textbox, "Shiny new peep from test!");
      await userEvent.click(postPeepButton);

      expect(
        await screen.findByText(/shiny new peep from test!/i)
      ).toBeVisible();
    });

    test("should remove the textbox area when user clicks logout", async () => {
      login.mockImplementation(({ email, password }) => {
        const user = sampleUsers.find(
          (u) => u.email === email && u.password === password
        );

        if (user === undefined) {
          return { user: {}, error: { message: "Details not found" } };
        }

        return { user };
      });

      getPeeps.mockImplementation(() => {
        return { peeps: samplePeeps };
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      await loginUser("a@example.com", "asd");

      const postPeepButton = await screen.findByRole("button", {
        name: /post/i,
      });
      const textbox = await screen.getByRole("textbox");
      const title = await screen.getByText(/what's happening\?/i);

      const logoutButton = await screen.getByRole("button", {
        name: /logout/i,
      });
      await userEvent.click(logoutButton);

      expect(postPeepButton).not.toBeVisible();
      expect(textbox).not.toBeVisible();
      expect(title).not.toBeVisible();
    });

    test("should show the register form when user clicks 'Click here to register'", async () => {
      getPeeps.mockImplementation(() => {
        return { peeps: samplePeeps };
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const loginHeaderButton = await screen.getByRole("button", {
        name: /login/i,
      });
      await userEvent.click(loginHeaderButton);
      const registerModalText = await screen.getByText(
        /click here to register/i
      );
      await userEvent.click(registerModalText);
      const backToLoginText = await screen.getByText(/back to login/i);
      expect(backToLoginText).toBeVisible();
    });

    test("should render the textbox for new peeps after user registers and logs in", async () => {
      const users = [...sampleUsers];

      register.mockImplementation((user) => {
        users.push(user);
        return { message: "Registration success" };
      });

      login.mockImplementation(({ email, password }) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user === undefined) {
          return { user: {}, error: { message: "Details not found" } };
        }

        return { user };
      });

      getPeeps.mockImplementation(() => {
        return { peeps: samplePeeps };
      });

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const loginHeaderButton = screen.getByRole("button", {
        name: /login/i,
      });
      await userEvent.click(loginHeaderButton);
      const registerModalText = screen.getByText(/click here to register/i);
      await userEvent.click(registerModalText);
      const emailRegisterInput = screen.getByLabelText("emailRegisterInput");
      const passwordRegisterInput = screen.getByLabelText(
        "passwordRegisterInput"
      );
      const nameRegisterInput = screen.getByLabelText("nameRegisterInput");
      const usernameRegisterInput = screen.getByLabelText(
        "usernameRegisterInput"
      );

      await userEvent.type(emailRegisterInput, "b@example.com");
      await userEvent.type(passwordRegisterInput, "fgh");
      await userEvent.type(nameRegisterInput, "B");
      await userEvent.type(usernameRegisterInput, "usernameB");

      await userEvent.click(screen.getByLabelText("modalRegisterFormButton"));

      const backToLoginText = screen.getByText(/back to login/i);
      await userEvent.click(backToLoginText);

      await loginUser("b@example.com", "fgh");

      const newPeepAreaTitle = screen.getByText(/what's happening\?/i);
      expect(newPeepAreaTitle).toBeVisible();
    });
  });
});
