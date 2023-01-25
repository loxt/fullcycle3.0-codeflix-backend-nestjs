import { ValueObject } from "../value-object";

class StubValueObject extends ValueObject<string> {}

describe("ValueObject unit tests", function () {
  it("should create a new value object", function () {
    const stubValueObject = new StubValueObject("value");
    expect(stubValueObject.value).toBe("value");
  });
});
