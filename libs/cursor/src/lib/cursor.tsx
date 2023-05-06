import styles from './cursor.module.css';
import classnames from 'classnames';

import { CursorImage } from '../constants/cursor.iitems';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

/* eslint-disable-next-line */
export interface CursorProps {}

export function Cursor(props: CursorProps) {
  const [active, setActive] = useState(1);
  const wrapperRef = useRef<HTMLUListElement | null>(null);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    console.log('acti', active);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    console.log('helof ');
    wrapperRef.current.style.setProperty(
      '--transition',
      '600ms cubic-bezier(0.22, 0.61, 0.36, 1)'
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty('--transition');
    }, 900) as never;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [active]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-[1200px]  max-w-full">
        <ul
          className="group flex  justify-center items-center w-full h-[640px] gap-3"
          ref={wrapperRef as never}
        >
          {CursorImage.map((cur: any, index) => (
            <li
              onClick={() => {
                setActive(index);
              }}
              aria-current={active === index}
              className={classnames(
                ' cursor-pointer relative  h-full last:w-[1%] first:w-[1%] [transition:width_var(--transition,200ms_ease-in)] w-[8%] [&[aria-current="true"]]:w-[48%]  bg-slate-400 overflow-hidden  before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden ',
                '[&:not(:hover), &:not(:first), &:not(:last)]:group-hover:w-[2%] hover:w-[12%]'
              )}
            >
              <div className="relative h-full w-full overflow-hidden  rounded-2xl ">
                <img
                  src={cur.image}
                  alt="no Image"
                  height="640px"
                  width="590px"
                  className={classnames(
                    'object-cover h-[640px] w-[590px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                  )}
                />
              </div>

              <div
                className={classNames(
                  'left-8 top-8 w-[590px] transition-[transform,opacity]  absolute p-0',
                  active === index
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4  opacity-0'
                )}
              >
                <p className="text-sm text-white"> {cur.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cursor;
