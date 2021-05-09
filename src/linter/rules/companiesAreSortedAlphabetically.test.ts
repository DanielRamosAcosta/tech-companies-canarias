import { expect } from "../../../deps.ts";
import { createCompany } from "../../../test/createCompany.ts";
import { companiesAreSortedAlphabetically } from "./companiesAreSortedAlphabetically.ts";

Deno.test({
  name: "returns void if commpanies are sorted",
  fn: () => {
    const companies = [
      createCompany({ company: "A Company" }),
      createCompany({ company: "B Company" }),
    ];

    const result = companiesAreSortedAlphabetically(companies);

    expect(result).toBeUndefined();
  },
});

Deno.test({
  name: "returns an error if companies are not sorted",
  fn: () => {
    const companies = [
      createCompany({ company: "B Company" }),
      createCompany({ company: "A Company" }),
    ];

    const result = companiesAreSortedAlphabetically(companies) as Error;

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toEqual(
      "Companies are not sorted, expected 'a company' but found 'b company'",
    );
  },
});

Deno.test({
  name: "returns an error if companies are not sorted ignoring the case",
  fn: () => {
    const companies = [
      createCompany({ company: "a Company" }),
      createCompany({ company: "B Company" }),
    ];

    const result = companiesAreSortedAlphabetically(companies) as Error;

    expect(result).toBeUndefined();
  },
});
