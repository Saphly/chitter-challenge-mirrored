import User from "../models/user.model.js";

import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import server from "../server.js";
import testData from "./testData/testData.js";
const sampleUsers = testData.users;

chai.use(chaiHttp);

describe("Testing login requests on the database", () => {
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

  describe("/POST login", () => {
    it("should not allow user to login without an email", async () => {
      const loginDetail = {
        email: "a",
        password: "a",
      };

      const res = await testServer.post("/login").send(loginDetail);

      expect(res).to.have.status(422);
      expect(res.body.message).to.equal("Login failed");
    });

    it("should not allow user to login using the wrong password", async () => {
      const loginDetail = {
        email: "a@example.com",
        password: "incorrect",
      };

      const res = await testServer.post("/login").send(loginDetail);

      expect(res).to.have.status(400);
      expect(res.body.message).to.equal("Details not found");
    });

    it("should login with the right login details", async () => {
      const loginDetail = {
        email: "a@example.com",
        password: "asd",
      };

      const res = await testServer.post("/login").send(loginDetail);
      console.log(res);
      expect(res).to.have.status(200);
      expect(res.body.message).to.equal("Login success");
      expect(res.body.user).to.deep.include({
        name: "A",
        username: "usernameA",
      });
    });
  });
});
