import { Companies, CompanyType, Island, SocialNetworkType } from "./models.ts";

export const companies: Companies = [
  {
    name: "Acid Tango",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://acidtango.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/Acid-Tango-101103077972357",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/acidtango",
      },
      {
        type: SocialNetworkType.INSTAGRAM,
        link: "https://www.instagram.com/acidtango",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/acid-tango",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/acidtango",
      },
      {
        type: SocialNetworkType.YOUTUBE,
        link: "https://www.youtube.com/channel/UCFqkwvYiCRR3dupcxvbNOGA",
      },
    ],
    jobPage:
      "https://www.linkedin.com/company/avantic-estudio-de-ingenieros/jobs",
  },
  {
    name: "Avantic",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "http://www.avantic.net",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/avantic",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/avantic-estudio-de-ingenieros",
      },
    ],
    jobPage:
      "https://www.linkedin.com/company/avantic-estudio-de-ingenieros/jobs",
  },
  {
    name: "Desarrollo Cometa",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.desarrollocometa.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/desarrollocometa",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/devCometa",
      },
    ],
    jobPage: "https://www.desarrollocometa.com", // Not sure about this
  },
  {
    name: "Ecommium",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://ecommium.com",
    hiringFrom: [Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/ecommium-ecommerce",
      },
    ],
    jobPage: "https://ecommium.com/unete-al-equipo",
  },
  {
    name: "edataconsulting",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://edataconsulting.es",
    hiringFrom: [Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/edataconsulting",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/edataconsulting/",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/edataconsulting",
      },
      {
        type: SocialNetworkType.YOUTUBE,
        link: "https://www.youtube.com/channel/UCEEixyMsLJPw7-v_gtkSDrw",
      },
    ],
    jobPage: "https://people.edataconsulting.es/",
  },
  {
    name: "Expero",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.experoinc.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/experoinc",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/experoinc",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/experoinc",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/experoinc",
      },
      {
        type: SocialNetworkType.YOUTUBE,
        link: "https://www.youtube.com/channel/UCSpX7JV7sC-mH46oM09n_Nw",
      },
    ],
    jobPage: "https://www.experoinc.com/about/careers",
  },
  {
    name: "Glotio",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://glotio.com",
    hiringFrom: [Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/glotio",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/Glotio1",
      },
    ],
    jobPage: "https://www.linkedin.com/company/glotio/jobs",
  },
  {
    name: "HolaSoft",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.holasoft.es",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/HolaSoft.tpv.erp",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/holasoft",
      },
    ],
    jobPage: "https://www.linkedin.com/company/holasoft/jobs",
  },
  {
    name: "HYVE",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.hyve.net",
    hiringFrom: [Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/hyvetheinnovationcompany",
      },
      {
        type: SocialNetworkType.INSTAGRAM,
        link: "https://www.instagram.com/hyve_innovation",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/hyve-ag",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/hyve_innovation",
      },
      {
        type: SocialNetworkType.YOUTUBE,
        link: "https://www.youtube.com/channel/UCnazwh6SE2Rex_J2982kyTQ",
      },
    ],
    jobPage: "https://www.hyve.net/en/careers",
  },
  {
    name: "Ingenium Ventures",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.ingeniumventures.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/IngeniumVentures",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/ingenium-ventures",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/ingeniumv",
      },
    ],
    jobPage: "https://www.ingeniumventures.com/talento",
  },
  {
    name: "Intelequia",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://intelequia.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/Intelequia",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/intelequia",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/intelequia",
      },
    ],
    jobPage: "https://intelequia.com/social/empleos",
  },
  {
    name: "Lean Mind",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://leanmind.es",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/Lean-Mind-106484421092863",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/lean-mind",
      },
      {
        type: SocialNetworkType.INSTAGRAM,
        link: "https://www.instagram.com/leanfulness_es",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/leanfulness",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/leanfulness_es",
      },
      {
        type: SocialNetworkType.YOUTUBE,
        link: "https://www.youtube.com/channel/UCW16ot2jRfF3LgUSCEiGd8g",
      },
    ],
    jobPage: "https://leanmind.es/es/empleo",
  },
  {
    name: "Omnia Infosys",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://omniainfosys.com",
    hiringFrom: [Island.TENERIFE], // Not sure about this
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/Omnia-Infosys-126364607419620",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/omnia-infosys-slu",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/OmniaInfosys",
      },
    ],
    jobPage: "https://www.linkedin.com/company/omnia-infosys-slu/jobs/",
  },
  {
    name: "Open Canarias",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.opencanarias.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/opencanarias",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/opencanarias",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/open-canarias-sl",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/OpenCanarias",
      },
    ],
    jobPage: "https://www.linkedin.com/company/open-canarias-sl/jobs",
  },
  {
    name: "Prodanet",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.prodanet.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/prodanet",
      },
    ],
    jobPage: "https://www.linkedin.com/company/prodanet/jobs",
  },
  {
    name: "Proyectran",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.proyectran.com",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/Proyectran",
      },

      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/proyectran",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/Proyectran",
      },
    ],
    jobPage: "https://www.linkedin.com/company/proyectran/jobs",
  },
  {
    name: "Secret Source",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.secret-source.eu",
    hiringFrom: [Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/secretsource",
      },
      {
        type: SocialNetworkType.INSTAGRAM,
        link: "https://www.instagram.com/secret_source.eu",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/secret-source",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/SecretSourceEU",
      },
    ],
    jobPage: "https://careers.secret-source.eu",
  },
  {
    name: "Sirokko Open Source Solutions",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.sirokko.es",
    hiringFrom: [Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/SirokkoOSS",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/sirokko",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link:
          "https://www.linkedin.com/company/sirokko-open-source-solutions-s-l-/",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/sirokkooss",
      },
    ],
    jobPage:
      "https://www.linkedin.com/company/sirokko-open-source-solutions-s-l-/jobs/",
  },
  {
    name: "Squaads",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://squaads.com",
    hiringFrom: [Island.GRAN_CANARIA], // Not sure about this
    socialNetworks: [
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/squaads/",
      },
    ],
    jobPage: "https://www.linkedin.com/company/squaads/jobs/",
  },
  {
    name: "TecAlliance",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.tecalliance.net",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "facebook.com/TecAlliance",
      },
      {
        type: SocialNetworkType.INSTAGRAM,
        link: "https://www.instagram.com/tecalliance",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/tecalliance",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/TecAlliance",
      },
      {
        type: SocialNetworkType.YOUTUBE,
        link: "https://www.youtube.com/channel/UC_b7gPw0OabQ3b2CDTtdFnw",
      },
    ],
    jobPage: "https://www.tecalliance.net/en/career",
  },
  {
    name: "The Agile Monkeys",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.theagilemonkeys.com",
    hiringFrom: [Island.GRAN_CANARIA], // Not sure about this
    socialNetworks: [
      {
        type: SocialNetworkType.FACEBOOK,
        link: "https://www.facebook.com/TheAgileMonkeys",
      },
      {
        type: SocialNetworkType.GITHUB,
        link: "https://github.com/theam",
      },
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/theagilemonkeys",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/theagilemonkeys",
      },
    ],
    jobPage: "https://www.linkedin.com/company/theagilemonkeys/jobs",
  },
  {
    name: "Técnicas Competitivas",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.tecnicascompetitivas.com",
    hiringFrom: [Island.TENERIFE, Island.GRAN_CANARIA],
    socialNetworks: [
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/tecnicas-competitivas",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/TecnicasTCSA",
      },
    ],
    jobPage: "https://www.linkedin.com/company/tecnicas-competitivas/jobs",
  },
  {
    name: "Ultebra",
    type: CompanyType.SOFTWARE_DEVELOPMENT,
    website: "https://www.ultebra.eu",
    hiringFrom: [Island.TENERIFE],
    socialNetworks: [
      {
        type: SocialNetworkType.LINKEDIN,
        link: "https://www.linkedin.com/company/ultebra-solutions-s-l",
      },
      {
        type: SocialNetworkType.TWITTER,
        link: "https://twitter.com/ultebra",
      },
    ],
    jobPage: "https://www.ultebra.eu/#join",
  },
];
