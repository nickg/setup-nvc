import {validateVersion} from "./util";

test("latest is valid", () => {
  expect(validateVersion("latest")).toBeTruthy();
  expect(validateVersion("latest")).toEqual("latest");
});

test("invalid version", () => {
  expect(validateVersion("bogus")).toBeNull();
  expect(validateVersion("1.17")).toBeNull();
});

test("numbered releases without r", () => {
  expect(validateVersion("1.16.2")).toEqual("1.16.2");
  expect(validateVersion("1.17.0")).toEqual("1.17.0");
});

test("numbered releases with r", () => {
  expect(validateVersion("r1.16.2")).toEqual("1.16.2");
  expect(validateVersion("r1.17.0")).toEqual("1.17.0");
});

test("trims whitespace", () => {
  expect(validateVersion(" r1.16.2   ")).toEqual("1.16.2");
  expect(validateVersion("r1.17.0   ")).toEqual("1.17.0");
  expect(validateVersion("  latest")).toEqual("latest");
});
