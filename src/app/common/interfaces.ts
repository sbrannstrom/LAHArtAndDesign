export interface IAssets {
  paintings: IPicGrid[];
  tovningar: IPicGrid[];
  blandat: IPicGrid[];
}

export interface IPicGrid {
  title?: string;
  content?: string;
  price?: number | string;
  sold?: boolean;
  path: string;
}