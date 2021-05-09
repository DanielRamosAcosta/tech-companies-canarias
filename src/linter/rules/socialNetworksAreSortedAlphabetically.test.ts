import { expect } from "../../../deps.ts";
import { createCompany } from "../../../test/createCompany.ts";
import { SocialNetworkType } from "../../models.ts";
import { socialNetworksAreSortedAlphabetically } from "./socialNetworksAreSortedAlphabetically.ts";

Deno.test({
  name: "returns void if social networks are sorted",
  fn: () => {
    const companies = [
      createCompany({
        socialNetworks: [
          {
            type: SocialNetworkType.INSTAGRAM,
            link: "https://www.instagram.com/example",
          },
          {
            type: SocialNetworkType.LINKEDIN,
            link: "https://www.linkedin.com/company/example",
          },
        ],
      }),
    ];

    const result = socialNetworksAreSortedAlphabetically(companies);

    expect(result).toBeUndefined();
  },
});

Deno.test({
  name: "returns an error if social networks are not sorted",
  fn: () => {
    let companyName = "My Company";
    const companies = [
      createCompany({
        name: companyName,
        socialNetworks: [
          {
            type: SocialNetworkType.LINKEDIN,
            link: "https://www.linkedin.com/company/example",
          },
          {
            type: SocialNetworkType.INSTAGRAM,
            link: "https://www.instagram.com/example",
          },
        ],
      }),
    ];

    const result = socialNetworksAreSortedAlphabetically(companies) as Error;

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toEqual(
      `Social networks of company '${companyName}' are not sorted`,
    );
  },
});
