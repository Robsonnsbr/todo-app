import React from 'react';

export const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="absolute end-0 bottom-0 translate-y-10 py-1 px-2 sm:hidden shadow-md bg-blue-500 active:bg-blue-700 text-whiteSnow  font-bold w-fit rounded m-1"
    >
      Salvar
    </button>
  );
};
