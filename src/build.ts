import {
  Company,
  SocialNetwork,
  SocialNetworks,
  SocialNetworkType,
} from "./models.ts";
import { companies } from "./companies.ts";

const markdownHeader = `<!-- THIS FILE IS GENERATED, DO NOT TOUCH -->
# Tech Companies Canarias

Tech Companies Canarias is a list of tech companies that are offer tech work from the Canary Islands 🇮🇨.

Contributions are very welcome! Please [submit a pull request on GitHub](https://github.com/DanielRamosAcosta/tech-companies-canarias/blob/main/CONTRIBUTING.md).

| Company | Hiring from | Social Networks | Job Page |
| ------- | ----------- | --------------- | -------- |
`;

const iconsBaseUrl =
  "https://raw.githubusercontent.com/DanielRamosAcosta/tech-companies-canarias/main/icons";

const createSocialNetworkImageLink = (socialNetworkType: SocialNetworkType) =>
  `${iconsBaseUrl}/${socialNetworkType.toLowerCase()}.png`;

const createImage = (alt: string, url: string) => `![${alt}](${url})`;

const createLink = (content: string, link: string) => `[${content}](${link})`;

const createSocialNetworkEnabledIcon = ({
  type,
  link,
}: SocialNetwork) =>
  createLink(createImage(type, createSocialNetworkImageLink(type)), link);

const createSocialNetworkDisabledIcon = (type: SocialNetworkType) =>
  createLink(createImage(type, `${iconsBaseUrl}/empty.png`), "#");

const createSocialIcons = (socialNetworks: SocialNetworks) => {
  return Object.values(SocialNetworkType).map(
    (socialNetworkType) => {
      const socialNetwork = socialNetworks.find((socialNetwork) =>
        socialNetwork.type === socialNetworkType
      );

      return socialNetwork
        ? createSocialNetworkEnabledIcon(socialNetwork)
        : createSocialNetworkDisabledIcon(socialNetworkType);
    },
  ).join(" ");
};

const toColumns = ({
  name,
  website,
  hiringFrom,
  socialNetworks,
  jobPage,
}: Company) => [
  createLink(name, website),
  hiringFrom.join(", "),
  createSocialIcons(socialNetworks),
  createLink("💼", jobPage),
];

const toMarkdownColumns = (columns: string[]) => `| ${columns.join(" | ")} |`;

const companyTable = companies
  .map(toColumns)
  .map(toMarkdownColumns)
  .join("\n");

console.log(markdownHeader.concat(companyTable));
