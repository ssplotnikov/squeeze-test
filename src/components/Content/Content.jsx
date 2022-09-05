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
          <div
            style={{
              cursor: 'pointer',
              border: '1px solid black',
              borderRadius: '50px',
              margin: '2px',
              padding: '10px',
            }}
            onClick={copy}
          >
            Copy short link
          </div>
        </td>
        <td>{data.counter}</td>
      </tr>
    </>
  );
};
