'use client';
import { useSubmitForm } from 'src/hooks';
import ErrorMessageInput from './components/errorMessageInput';
import { ContainerInput, InputTextArea, InputTitle } from './components/Inputs';
import LoadingSending from './components/loadingSending';
import { SubmitButton } from './components/submitButton';
import { InputStarCheckBox } from 'src/components/common/checkBox';

export const FormTask = () => {
  const {
    handleSubmit,
    register,
    reset,
    errors,
    isSubmitting,
    handleSubmitForm,
    handleKeyDown
  } = useSubmitForm();

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className={`relative transition-opacity ease-in-out duration-500 flex flex-col w-full max-w-xl rounded-md shadow-md border border-mediumGray ${
        isSubmitting ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <LoadingSending isSubmitting={isSubmitting} />
      <ContainerInput className="relative">
        <InputTitle
          {...register('title')}
          autoFocus={true}
          type="text"
          id="title"
          placeholder="Título"
          autoComplete="off"
          className="font-semibold  border-none"
          disabled={isSubmitting}
          onKeyDown={handleKeyDown}
          autoCapitalize="sentences"
        />

        <InputStarCheckBox
          title="Favorito"
          register={register}
          id="isFavorite"
          disabled={isSubmitting}
          onKeyDown={handleKeyDown}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 -translate-x-4 h-4 w-fit bg-transparent"
          name="isFavorite"
          reset={() => reset()}
        />
        <ErrorMessageInput message={errors.title?.message} />
      </ContainerInput>
      <hr className="border border-mediumGray" />
      <ContainerInput className="relative">
        <InputTextArea
          {...register('message')}
          id="message"
          placeholder="Criar sua nota..."
          className="bg-transparent  resize-none border-none"
          disabled={isSubmitting}
          onKeyDown={handleKeyDown}
          autoCapitalize="sentences"
        />

        <ErrorMessageInput message={errors.message?.message} />
      </ContainerInput>
      <SubmitButton />
    </form>
  );
};
