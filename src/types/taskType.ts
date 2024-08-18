export interface ITaskProps {
  _id: string;
  title: string;
  message: string;
  isFavorite?: boolean;
  color?: Color;
  createdAt?: Date;
  updatedAt?: Date;
}

export type FilterPropsCustom = {
  title?: string;
  isFavorite?: boolean;
  color?: Color;
};

export type ITaskPropsOmitID = Omit<ITaskProps, '_id'>;

export enum Color {
  None = '',
  WhiteSnow = '#FFFAFA',
  SkyBlue = '#BAE2FF',
  MintGreen = '#B9FFDD',
  LightYellow = '#FFE8AC',
  Peach = '#FFCAB9',
  LightCoral = '#F99494',
  LightSkyBlue = '#9DD6FF',
  Orchid = '#ECA1FF',
  LightLime = '#DAFF8B',
  Coral = '#FFA285',
  LightGray = '#CDCDCD',
  DarkGray = '#979797',
  Olive = '#A99A7C'
}
