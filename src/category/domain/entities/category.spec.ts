import { Category } from "./category";
import { omit } from "lodash";
import { UniqueEntityId } from "../../../shared/domain/value-objects/unique-entity-id.value-object";

describe("Category unit tests", function () {
  it("should be created", function () {
    const category = new Category({
      name: "Category name",
      description: "Category description",
      isActive: true,
    });

    let props = omit(category.props, ["createdAt"]);
    expect(props).toStrictEqual({
      name: "Category name",
      description: "Category description",
      isActive: true,
    });
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  test("getter of name field", function () {
    const category = new Category({
      name: "Category name",
    });
    expect(category.name).toBe("Category name");
  });

  test("should register id field", () => {
    const category2 = new Category(
      {
        name: "Category name",
      },
      new UniqueEntityId()
    );
    expect(category2.id).toBeInstanceOf(UniqueEntityId);
  });

  test("getter and setter of description field", function () {
    const category = new Category({
      name: "Category name",
    });

    expect(category.description).toBeNull();

    category.props.description = "Category description";
    expect(category.description).toBe("Category description");

    category.props.description = "New category description";

    expect(category.description).toBe("New category description");
  });

  test("getter and setter of isActive field", function () {
    const category = new Category({
      name: "Category name",
    });

    expect(category.isActive).toBeTruthy();

    category.props.isActive = false;
    expect(category.isActive).not.toBeTruthy();

    category.props.isActive = true;

    expect(category.isActive).toBeTruthy();
  });

  test("getter of createdAt field", function () {
    const category = new Category({
      name: "Category name",
    });

    expect(category.createdAt).toBeInstanceOf(Date);

    const createdAt = category.createdAt;
    category.props.createdAt = new Date();
    expect(category.createdAt).not.toBe(createdAt);
  });
});
