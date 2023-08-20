import Peep from "../models/peep.model.js";

import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import server from "../server.js";
import testData from "./testData/testData.js";
const samplePeeps = testData.peeps;

chai.use(chaiHttp);

describe("Testing peep requests on the database", () => {
  const testServer = chai.request(server).keepOpen();

  beforeEach(async () => {
    try {
      await Peep.deleteMany();
      console.log(`Database cleared`);
    } catch (error) {
      console.log(`Peep test error clearing`);
      throw new Error();
    }
    try {
      await Peep.insertMany(samplePeeps);
      console.log(`Database populated with test Peeps`);
    } catch (error) {
      console.log(`Peep test error inserting`);
      throw new Error();
    }
  });

  describe("/GET Peeps", () => {
    it("should return all of the peeps as an array", async () => {
      const res = await testServer.get("/").send();

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array");
      expect(res.body).to.have.deep.members(samplePeeps);
    });

    it("should return an empty array with status 200 when there are no peeps", async () => {
      await Peep.deleteMany();
      const res = await testServer.get("/").send();

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array").that.is.empty;
    });
  });

  describe("/POST post a peep", () => {
    it("should not post a peep without name field", async () => {
      const newPeep = {
        username: "usernameA",
        peep: "Today is Sunday!",
        dateCreated: "2023-08-19T13:25:43.574Z",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(422);
      expect(res).to.have.property("error");
      expect(res.body.message).to.equal("Posting new peep failed");
    });

    it("should not post a peep without username field", async () => {
      const newPeep = {
        name: "usernameA",
        peep: "Today is Sunday!",
        dateCreated: "2023-08-19T13:25:43.574Z",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(422);
      expect(res).to.have.property("error");
      expect(res.body.message).to.equal("Posting new peep failed");
    });

    it("should not post a peep without peep field", async () => {
      const newPeep = {
        name: "usernameA",
        username: "usernameA",
        dateCreated: "2023-08-19T13:25:43.574Z",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(422);
      expect(res).to.have.property("error");
      expect(res.body.message).to.equal("Posting new peep failed");
    });

    it("should not post a peep without dateCreated field", async () => {
      const newPeep = {
        name: "usernameA",
        username: "usernameA",
        peep: "Today is Sunday!",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(422);
      expect(res).to.have.property("error");
      expect(res.body.message).to.equal("Posting new peep failed");
    });

    it("should not post a peep with a dateCreated field that is not ISO8601", async () => {
      const newPeep = {
        name: "usernameA",
        username: "usernameA",
        peep: "Today is Sunday!",
        dateCreated: "2022/2/2",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(422);
      expect(res).to.have.property("error");
      expect(res.body.message).to.equal("Posting new peep failed");
    });

    it("should not post a peep with a username that does not exist", async () => {
      const newPeep = {
        name: "usernameA",
        username: "usernameZERO",
        peep: "Today is Sunday!",
        dateCreated: "2023-08-19T13:25:43.574Z",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(400);
      expect(res).to.have.property("error");
      expect(res.body.message).to.equal("User details not found");
    });

    it("should post a peep and return the new peep", async () => {
      const newPeep = {
        name: "usernameA",
        username: "usernameA",
        peep: "Today is Sunday!",
        dateCreated: "2023-08-19T13:25:43.574Z",
      };

      const res = await testServer.post("/add-peep").send(newPeep);

      expect(res).to.have.status(201);
      expect(res.body.peep).to.have.deep.property("name");
      expect(res.body.peep).to.have.deep.property("peep");
      expect(res.body.peep).to.have.deep.property("username");
      expect(res.body.peep).to.have.deep.property("dateCreated");
    });
  });
});
