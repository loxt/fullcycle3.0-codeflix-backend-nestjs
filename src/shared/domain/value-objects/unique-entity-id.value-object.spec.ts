import { InvalidUuidError } from "../../errors/invalid-uuid.error";
import { UniqueEntityId } from "./unique-entity-id.value-object";

describe("UniqueEntityId unit tests", function () {
  it("should throw error when uuid is invalid", function () {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    expect(function () {
      return new UniqueEntityId("invalid_uuid");
    }).toThrowError(InvalidUuidError);
    expect(validateSpy).toBeCalled();
  });
});
