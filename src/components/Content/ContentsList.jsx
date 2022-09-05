import React, { useState } from 'react';
import { useGetStaticticsQuery } from '../../services/Squeeze/SqueezeServices';
import { Content } from './Content';

const ContentsList = () => {
  const [sorts, setSorts] = useState({});
  const [toogleSortTarget, setToogleSortTarget] = useState();
  const [toogleSortCounter, setToogleSortCounter] = useState();
  const [toogleSortShort, setToogleSortShort] = useState();

  const handlerSortCounter = (e) => {
    setToogleSortCounter(!toogleSortCounter);
    setSorts({ ...sorts, 0: e.target.value });
  };
  const handlerSortTarget = (e) => {
    setToogleSortTarget(!toogleSortTarget);
    setSorts({ ...sorts, 1: e.target.value });
  };
  const handlerSortShort = (e) => {
    setToogleSortShort(!toogleSortShort);
    setSorts({ ...sorts, 2: e.target.value });
  };

  const resetSort = () => {
    setSorts({});
  };

  const sortArr = Object.values(sorts);

  const intSort = sortArr.reduce((a, v) => {
    let vString = `order=${v}&`;
    return a + vString;
  }, '');

  const [offset, setOffset] = useState(0);
  const prev = () => {
    setOffset((prevState) => (prevState ? offset - 5 : offset));
  };
  const next = () => {
    if (data.length < 5) {
      return;
    }
    setOffset((prevState) => prevState + 5);
  };

  const { data, isLoading, isSuccess } = useGetStaticticsQuery({
    offset: offset,
    limit: 5,
    sort: intSort,
  });
  return (
    <div>
      <button className='' onClick={prev}>
        Prev
      </button>
      <button className='' onClick={next}>
        Next
      </button>
      <button className='' onClick={resetSort}>
        Reset Sort
      </button>
      <table>
        <thead>
          <tr>
            <th colSpan='1'>
              <button
                type='button'
                value={toogleSortTarget ? 'asc_target' : 'desc_target'}
                onClick={handlerSortTarget}
              >
                Full Links
              </button>
            </th>
            <th colSpan='1'>
              <button
                type='button'
                value={toogleSortShort ? 'asc_short' : 'desc_short'}
                onClick={handlerSortShort}
              >
                Squeeze links
              </button>
            </th>
            <th colSpan='1'>
              <button
                type='button'
                value={toogleSortCounter ? 'asc_counter' : 'desc_counter'}
                onClick={handlerSortCounter}
              >
                Counter
              </button>
            </th>
          </tr>
        </thead>
        {isSuccess ? (
          <tbody>
            {data.map((data) => (
              <Content key={data.id} data={data} />
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan='3' className=''>
                Нет ссылок
              </td>
            </tr>
          </tbody>
        )}
      </table>
      {/* <span className='' onClick={prev}>
                    Prev
                    </span>
                    <span className='' onClick={next}>
                    Next
                  </span> */}
    </div>
  );
};

export default ContentsList;
