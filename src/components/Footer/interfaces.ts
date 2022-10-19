export type Location = {
  bairro: string;
  cidade: string;
  pais: string;
} & string;

export interface OpenPositionData {
  cargo: string;
  ativa: boolean;
  link: string;
  localizacao: Location;
}
