'use client';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useFilterControls } from 'src/hooks';
import { InputStarCheckBox } from 'src/components/common/checkBox';
import InputSelectColor from './InputSelectColor';

export const SearchBar = () => {
  const { handleColorChange, handleFavoriteChange, handleTitleChange, color } =
    useFilterControls();

  return (
    <div className="relative flex w-full max-w-xl items-center gap-2">
      <InputGroup
        title="filter name"
        borderRadius={5}
        size="sm"
        width="100%"
        className="font-inter"
      >
        <Input
          type="text"
          placeholder="Pesquisar notas"
          border="1px solid #949494"
          id="searchInput"
          flex="1"
          pr="3.5rem"
          _focus={{ boxShadow: 'none', borderColor: '#949494' }}
          onChange={handleTitleChange}
        />
        <InputRightElement width="3.5rem" backgroundColor="none">
          <label htmlFor="searchInput" className="bg-transparent">
            <Search2Icon color="gray.600" backgroundColor="none" />
          </label>
        </InputRightElement>
      </InputGroup>

      <InputStarCheckBox
        title="filter favorites"
        id="isFavorite"
        name="isFavorite"
        onChange={handleFavoriteChange}
      />
      <InputSelectColor color={color} handleColorChange={handleColorChange} />
    </div>
  );
};
