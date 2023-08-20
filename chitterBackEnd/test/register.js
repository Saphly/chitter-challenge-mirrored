import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import server from "../server.js";
import User from "../models/user.model.js";
import testData from "./testData/testData.js";
const sampleUsers = testData.users;

chai.use(chaiHttp);

describe("Testing register requests on the database", () => {
  const testServer = chai.request(server).keepOpen();

  beforeEach(async () => {
    try {
      await User.deleteMany();
      console.log(`Database cleared`);
    } catch (error) {
      console.log(`User test error clearing`);
      throw new Error();
    }
    try {
      await User.insertMany(sampleUsers);
      console.log(`Database populated with test Peeps`);
    } catch (error) {
      console.log(`User test error inserting`);
      throw new Error();
    }
  });

  describe("/POST register", () => {
    it("should not allow user to register with an email that already exists", async () => {
      const registerDetails = {
        email: "a@example.com",
        password: "asdf",
        name: "A",
        username: "usernameZERO",
      };

      const res = await testServer.post("/register").send(registerDetails);

      expect(res).to.have.status(400);
      expect(res.body.message).to.equal("Email already registered");
    });
  });

  it("should not allow user to register with a username that already exists", async () => {
    const registerDetails = {
      email: "zero@example.com",
      password: "asdf",
      name: "A",
      username: "usernameA",
    };

    const res = await testServer.post("/register").send(registerDetails);

    expect(res).to.have.status(400);
    expect(res.body.message).to.equal("Username already registered");
  });

  it("should not allow user to register without email field", async () => {
    const registerDetails = {
      password: "asdf",
      name: "A",
      username: "usernameZERO",
    };

    const res = await testServer.post("/register").send(registerDetails);

    expect(res).to.have.status(422);
    expect(res.body.message).to.equal("Registration failed");
  });

  it("should not allow user to register without password field", async () => {
    const registerDetails = {
      email: "zero@example.com",
      name: "A",
      username: "usernameZERO",
    };

    const res = await testServer.post("/register").send(registerDetails);

    expect(res).to.have.status(422);
    expect(res.body.message).to.equal("Registration failed");
  });

  it("should not allow user to register without name field", async () => {
    const registerDetails = {
      email: "zero@example.com",
      password: "A",
      username: "usernameZERO",
    };

    const res = await testServer.post("/register").send(registerDetails);

    expect(res).to.have.status(422);
    expect(res.body.message).to.equal("Registration failed");
  });

  it("should not allow user to register without username field", async () => {
    const registerDetails = {
      email: "zero@example.com",
      password: "A",
      name: "usernameZERO",
    };

    const res = await testServer.post("/register").send(registerDetails);

    expect(res).to.have.status(422);
    expect(res.body.message).to.equal("Registration failed");
  });

  it("should allow user to register if the email and username are not already registered", async () => {
    const registerDetails = {
      email: "zero@example.com",
      password: "asd",
      name: "zero",
      username: "usernameZERO",
    };

    const res = await testServer.post("/register").send(registerDetails);

    expect(res).to.have.status(200);
    expect(res.body.message).to.equal("Registration success");
  });
});
