import React, { useEffect, useRef, useState } from 'react';
import { useCreateSqueezeMutation } from '../../services/Squeeze/SqueezeServices';

export const CreateLink = React.memo(() => {
  const linkRef = useRef(null);

  const [err, setErr] = useState('Введите ссылку');

  const [createSqueeze, { isLoading }] = useCreateSqueezeMutation(
    linkRef.current.value,
  );

  const handlerSqueeze = async (e) => {
    e.preventDefault();
    try {
      await createSqueeze(encodeURIComponent(linkRef.current.value));
      linkRef.current.value = '';
    } catch (err) {
      setErr('Введите ссылку!');
    }
  };
  useEffect(() => {
    linkRef.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handlerSqueeze}>
        <label htmlFor='link'>Full Link:</label>
        <input
          type='text'
          id='link'
          ref={linkRef}
          autoComplete='off'
          required
        />
        <button>Create short link</button>
      </form>
    </div>
  );
});
