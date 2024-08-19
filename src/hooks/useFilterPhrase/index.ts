import { useState, useEffect } from 'react';
import { Color, FilterPropsCustom, ITaskProps } from 'src/types/taskType';

const colorNames: { [key in Color]: string } = {
  [Color.None]: 'Nenhuma',
  [Color.WhiteSnow]: 'Branco Neve',
  [Color.SkyBlue]: 'Azul Céu',
  [Color.MintGreen]: 'Verde Menta',
  [Color.LightYellow]: 'Amarelo Claro',
  [Color.Peach]: 'Pêssego',
  [Color.LightCoral]: 'Coral Claro',
  [Color.LightSkyBlue]: 'Azul Claro',
  [Color.Orchid]: 'Orquídea',
  [Color.LightLime]: 'Limão Claro',
  [Color.Coral]: 'Coral',
  [Color.LightGray]: 'Cinza Claro',
  [Color.DarkGray]: 'Cinza Escuro',
  [Color.Olive]: 'Oliva'
};

export const useFilterPhrase = (
  filters: FilterPropsCustom,
  filteredTasks?: ITaskProps[]
) => {
  const { title, isFavorite, color } = filters;
  const [phrase, setPhrase] = useState<string>(`Todos`);
  const [qtFiltered, setQTFiltered] = useState<number>(0);

  useEffect(() => {
    const colorName = color ? colorNames[color] : '';

    if (filteredTasks) {
      setQTFiltered(filteredTasks.length);
    }

    let newPhrase = `Todos`;

    if (isFavorite && title && colorName) {
      newPhrase = `Favoritos > ${title} > ${colorName}`;
    } else if (isFavorite && title) {
      newPhrase = `Favoritos > ${title}`;
    } else if (isFavorite && colorName) {
      newPhrase = `Favoritos > ${colorName}`;
    } else if (title && colorName) {
      newPhrase = `${title} > ${colorName}`;
    } else if (title) {
      newPhrase = `${title}`;
    } else if (colorName) {
      newPhrase = `${colorName}`;
    } else if (isFavorite) {
      newPhrase = `Favoritos`;
    }

    setPhrase(newPhrase);
  }, [color, filteredTasks, isFavorite, qtFiltered, title]);

  return { phrase, qtFiltered };
};
