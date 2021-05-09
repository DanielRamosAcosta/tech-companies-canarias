export const enum Island {
  EL_HIERRO = "El Hierro",
  LA_PALMA = "La Palma",
  LA_GOMERA = "La Gomera",
  TENERIFE = "Tenerife",
  GRAN_CANARIA = "Gran Canaria",
  FUERTEVENTURA = "Fuerteventura",
  LANZAROTE = "Lanzarote",
  LA_GRACIOSA = "La Graciosa",
}

export enum SocialNetworkType {
  FACEBOOK = "Facebook",
  GITHUB = "Github",
  INSTAGRAM = "Instagram",
  LINKEDIN = "Linkedin",
  TWITTER = "Twitter",
  YOUTUBE = "YouTube",
}

export const enum CompanyType {
  SOFTWARE_DEVELOPMENT,
}

export type SocialNetwork = { type: SocialNetworkType; link: string };

export type SocialNetworks = SocialNetwork[];

export type Islands = Island[];

export type Company = {
  name: string;
  type: CompanyType;
  website: string;
  hiringFrom: Islands;
  socialNetworks: SocialNetworks;
  jobPage: string;
};

export type Companies = Company[];
