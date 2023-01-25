import { InvalidUuidError } from "../../../errors/invalid-uuid.error";
import { UniqueEntityId } from "../unique-entity-id.value-object";
import { validate as uuidValidate } from "uuid";

const spyValidateMethod = () => {
  return jest.spyOn(UniqueEntityId.prototype as any, "validate");
};

describe("UniqueEntityId unit tests", function () {
  it("should throw error when uuid is invalid", function () {
    const validateSpy = spyValidateMethod();

    expect(function () {
      return new UniqueEntityId("invalid_uuid");
    }).toThrowError(InvalidUuidError);
    expect(validateSpy).toBeCalled();
  });

  it("should accept a uuid passed in constructor", function () {
    const validateSpy = spyValidateMethod();
    const uuid = "c303282d-f2e6-46ca-a04a-35d3d873712d";
    const uniqueEntityId = new UniqueEntityId(uuid);
    expect(uniqueEntityId.value).toBe(uuid);
    expect(validateSpy).toBeCalled();
  });

  it("should accept a uuid not passed in constructor", function () {
    const uniqueEntityId = new UniqueEntityId();
    expect(uuidValidate(uniqueEntityId.value)).toBeTruthy();
    expect(spyValidateMethod()).toBeCalled();
  });
});
