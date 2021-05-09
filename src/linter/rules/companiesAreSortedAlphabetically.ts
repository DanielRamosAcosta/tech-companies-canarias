import { Companies } from "../../models.ts";

export function companiesAreSortedAlphabetically(companies: Companies) {
  const companyNames = companies.map((company) => company.name.toLowerCase());
  const sortedCompanyNames = [...companyNames].sort();

  for (let i = 0; i < companyNames.length; i++) {
    const companyName = companyNames[i];
    const expectedCompanyName = sortedCompanyNames[i];

    if (companyName != expectedCompanyName) {
      return new Error(
        `Companies are not sorted, expected '${expectedCompanyName}' but found '${companyName}'`,
      );
    }
  }
}
