import dummyComponent from "./dummy.component"

beforeEach(angular.mock.module(dummyComponent))

let sut;

beforeEach(angular.mock.inject(($rootScope, $componentController) => {
  const $scope = $rootScope.$new()
  sut = $componentController("dummyComponent", { $scope })
}))

describe("dummy component", () => {
  it("should be defined", () => {
    expect(sut).toBeDefined()
  })

  it("should have a user binding", () => {
    expect(sut.user).toBeDefined();
  })
});
