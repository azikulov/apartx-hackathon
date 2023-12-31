'use client';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import cx from 'classnames';

import { ImageSvg } from '@/assets/icons/ImageSvg';
import type { InputProps } from './types';

export function Input({
  label,
  placeholder,
  type,
  onChange,
  errorMessage,
  ...rest
}: InputProps) {
  const [image, setImage] = useState<string | null>(null);
  const [isEmptyField, setIsEmptyField] = useState<boolean>(false);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files;
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file[0]);

      reader.onload = () => {
        setImage(reader.result as string);
      };
    }
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e);
    }
    if (e.target.value === '') {
      return setIsEmptyField(true);
    }

    return setIsEmptyField(false);
  }

  if (type === 'image') {
    return (
      <div aria-label='input-image' className={`flex flex-col mt-[1.5rem]`}>
        <label htmlFor={label} className='text-sm text-[#2D2F37]'>
          {label}
        </label>

        <label
          htmlFor={label}
          className='mt-[0.625rem] flex items-center gap-x-[0.625rem]'
        >
          <div
            className={`${
              image ? '' : 'p-[1.25rem]'
            } border border-[#DFDFDF] rounded`}
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className='aspect-square w-[5rem] h-[5rem]'
                src={image}
                alt='selected image in user device'
              />
            ) : (
              <ImageSvg className='w-10 h-10 flex-shrink-0' />
            )}
          </div>

          <p className='text-[#2D2F37] text-sm'>{placeholder}</p>
          <input
            {...rest}
            type='file'
            accept='image/*'
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }
              handleSelectImage(e);
            }}
            hidden
            id={label}
          />
        </label>
      </div>
    );
  }

  return (
    <div aria-label='input' className={`flex flex-col mt-[1.5rem]`}>
      <label htmlFor={label} className='text-sm text-[#2D2F37]'>
        {label}
      </label>

      <input
        {...rest}
        id={label}
        onChange={handleChangeInput}
        className={cx(
          'mt-[0.625rem] py-3 px-[1.125rem] text-sm text-[#2D2F37] outline-none rounded border border-[#DFDFDF] focus:border-[#5774CD]',
          { 'border-[#ef233c]': isEmptyField }
        )}
        type={type}
        placeholder={placeholder}
      />

      {errorMessage && isEmptyField && (
        <p className='text-sm mt-2 text-[#ef233c]'>{errorMessage}</p>
      )}
    </div>
  );
}
