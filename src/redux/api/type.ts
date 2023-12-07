export interface IArtifactResponse {
  _id: string;
  url: string;
  name: string;
  star?: number | undefined;
  vision: string;
  title: string;
  weapon: string;
}

export interface ICharacterResponse {
  _id: string;
  url: string;
  name: string;
  star?: number;
  vision: string;
  title: string;
  weapon: string;
}

export interface IWeaponResponse {
  _id: string;
  url: string;
  name: string;
  star?: number;
  vision: string;
  title: string;
  weapon: string;
}
