import { Category } from "./category";

describe("Category unit tests", function () {
  it("should be created", function () {
    const currentDate = new Date();
    const category = new Category({
      name: "Category name",
      description: "Category description",
      isActive: true,
      createdAt: currentDate,
    });

    expect(category.props).toStrictEqual({
      name: "Category name",
      description: "Category description",
      isActive: true,
      createdAt: currentDate,
    });
  });
});
