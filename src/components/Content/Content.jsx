import React, { useRef } from 'react';

export const Content = ({ data }) => {
  const ref = useRef(null);
  const copy = async () => {
    await navigator.clipboard.writeText(ref.current.href);
  };
  return (
    <>
      <tr>
        <td>{data.target}</td>
        <td>
          <a
            ref={ref}
            href={`http://79.143.31.216/s/${data.short}`}
            target='_blank'
          >
            {data.short}
          </a>
          <div className='' onClick={copy}>
            Copy short link
          </div>
        </td>
        <td>{data.counter}</td>
      </tr>
    </>
  );
};
