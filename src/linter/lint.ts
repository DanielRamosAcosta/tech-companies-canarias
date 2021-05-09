import { companies } from "../companies.ts";
import { companiesAreSortedAlphabetically } from "./rules/companiesAreSortedAlphabetically.ts";
import { socialNetworksAreSortedAlphabetically } from "./rules/socialNetworksAreSortedAlphabetically.ts";

function ensure(error?: Error) {
  if (error) {
    throw error;
  }
}

ensure(companiesAreSortedAlphabetically(companies));
ensure(socialNetworksAreSortedAlphabetically(companies));

console.log("All ok!");
