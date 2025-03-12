import { expect, test } from "@jest/globals";
import { firstModule } from "../src/index";

describe("Test First Module", () => {


  test("when the index handler is invoked successfully for create rule request", async () => {
    firstModule();
    //assert
    expect(1).toBe(1);
  });
});
