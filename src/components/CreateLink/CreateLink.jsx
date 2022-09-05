import React, { useEffect, useRef, useState } from 'react';
import { useCreateSqueezeMutation } from '../../services/Squeeze/SqueezeServices';

export const CreateLink = React.memo(() => {
  const linkRef = useRef();

  const [link, setLink] = useState();
  console.log('file: CreateLink.jsx ~ line 8 ~ link', link);
  const [err, setErr] = useState('Введите ссылку');
  const handleLinkInput = (e) => {
    if (e.clipboardData) {
      setLink(e.clipboardData.getData('Text'));
    }
    setLink(e.target.value);
  };

  const [createSqueeze, { isLoading }] = useCreateSqueezeMutation(link);

  const handlerSqueeze = async (e) => {
    e.preventDefault();
    try {
      await createSqueeze(encodeURIComponent(link));
      setLink('');
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
          value={link}
          onPaste={handleLinkInput}
          onChange={handleLinkInput}
          autoComplete='off'
          required
        />
        <button>Create short link</button>
      </form>
    </div>
  );
});
