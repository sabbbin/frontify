import { stagger, useAnimate } from 'framer-motion';
import styles from './AmazingButtonClickAnimation.module.css';
import { CSSProperties } from 'react';
import { animate } from 'framer-motion';

/* eslint-disable-next-line */
export interface AmazingButtonClickAnimationProps {}

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];
export function AmazingButtonClickAnimation(
  props: AmazingButtonClickAnimationProps
) {
  const noofArray = Array.from({ length: 20 });
  const [scope, animate] = useAnimate();

  const reset: AnimationSequence = noofArray.map((_, i) => [
    `.sparkle-${i}`,
    {
      x: 0,
      y: 0,
    },
    { duration: 0.000001 },
  ]);
  const sparkout: AnimationSequence = noofArray.map((_, i) => [
    `.sparkle-${i}`,
    {
      opacity: 0,
      scale: 0,
    },
    { duration: 0.3, at: '<' },
  ]);

  const handleClick = () => {
    const noofArray = Array.from({ length: 20 });
    const sparkIn = noofArray.map((_, i) => [
      `.sparkle-${i}`,
      {
        x: generateRandomNumber(-100, 100),
        y: generateRandomNumber(-100, 100),
        opacity: 1,
        scale: generateRandomNumber(1.2, 2.5),
      },
      { duration: 0.4, at: '<' },
    ]);

    animate([
      ...(reset as never),
      ['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ...(sparkIn as never),
      ['button', { scale: 0.8 }, { duration: 0.1, at: '<' }],
      ['button', { scale: 1 }, { duration: 0.1 }],
      ['.letter', { y: 0 }, { duration: 0.000001, at: 0.5 }],
      ...(sparkout as never),
    ]);
  };
  return (
    <div ref={scope}>
      <button
        onClick={handleClick}
        className="border relative px-3 py-2  rounded-lg bg-blue-300 hover:bg-blue-600"
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
        <span className=" absolute block inset-0 ">
          {Array.from({ length: 20 }).map((_, index) => (
            <svg
              className={`absolute  block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 sparkle-${index}`}
              key={index}
              viewBox="0 0 122 117"
              width="10"
              height="10"
            >
              <path
                className="fill-green-600"
                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
              />
            </svg>
          ))}
        </span>
      </button>
    </div>
  );
}

export default AmazingButtonClickAnimation;
