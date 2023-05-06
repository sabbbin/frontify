import { stagger, useAnimate } from 'framer-motion';
import styles from './AmazingButtonClickAnimation.module.css';
import { CSSProperties } from 'react';

/* eslint-disable-next-line */
export interface AmazingButtonClickAnimationProps {}

export function AmazingButtonClickAnimation(
  props: AmazingButtonClickAnimationProps
) {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate([
      ['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ['button', { scale: 0.8 }, { duration: 0.1, at: '<' }],
      ['button', { scale: 1 }, { duration: 0.1 }],
      ['.letter', { y: 0 }, { duration: 0.000001, at: 0.5 }],
    ]);
  };
  return (
    <div ref={scope}>
      <button
        onClick={handleClick}
        className="border px-3 py-2  rounded-lg bg-blue-300 hover:bg-blue-600"
      >
        <span className="sr-only"> Motion</span>
        <span aria-hidden className=" block h-8 overflow-hidden">
          {['M', 'o', 't', 'i', 'o', 'n'].map((letter, ind) => (
            <span
              data-letter={letter}
              style={
                {
                  '--animation-time': `${(ind + 1) * 400}ms`,
                } as CSSProperties
              }
              className={` h-8 after:h-8 leading-8  after:content-[attr(data-letter)]  inline-block relative letter after:absolute after:left-0 after:top-full  `}
              key={`${letter}-${ind}`}
            >
              {' '}
              {letter}{' '}
            </span>
          ))}
        </span>
      </button>
    </div>
  );
}

export default AmazingButtonClickAnimation;
