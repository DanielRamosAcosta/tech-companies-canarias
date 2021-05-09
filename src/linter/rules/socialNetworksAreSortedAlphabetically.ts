import { Companies } from "../../models.ts";

export function socialNetworksAreSortedAlphabetically(companies: Companies) {
  for (const company of companies) {
    const socialNetworks = company.socialNetworks.map((socialNetwork) =>
      socialNetwork.type
    );
    const sortedSocialNetworks = [...socialNetworks].sort();

    for (let i = 0; i < socialNetworks.length; i++) {
      const socialNetwork = socialNetworks[i];
      const expectedCompanyName = sortedSocialNetworks[i];

      if (socialNetwork !== expectedCompanyName) {
        return new Error(
          `Social networks of company '${company.name}' are not sorted`,
        );
      }
    }
  }
}
