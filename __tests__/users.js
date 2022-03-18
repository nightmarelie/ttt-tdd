import { describe, it, expect, jest } from "@jest/globals";
import axios from "axios";
import Users from "../src/users";

jest.mock("axios");

describe("Mocking Module", () => {
  it("users", () => {
    const users = [{ name: "Bob" }];
    const res = { data: users };
    axios.get.mockResolvedValue(res);

    return Users.all().then((data) => expect(data).toEqual(users));
  });
});
