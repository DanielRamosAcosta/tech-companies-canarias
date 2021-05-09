import {
  Company,
  CompanyType,
  Island,
  SocialNetworkType,
} from "../src/models.ts";

export const createCompany = ({
  company = "Example Company",
  type = CompanyType.SOFTWARE_DEVELOPMENT,
  website = "https://example.org/",
  hiringFrom = [Island.TENERIFE],
  socialNetworks = [{
    type: SocialNetworkType.INSTAGRAM,
    link: "https://www.instagram.com/example",
  }],
  jobPage = "https://example.org/jobs",
} = {}): Company => ({
  name: company,
  type,
  website,
  hiringFrom,
  socialNetworks,
  jobPage,
});
