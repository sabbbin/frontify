import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './TooltipsAnimation.module.css';
import { BarSection, bars } from './chart-data-points';
import { barWidth, getX, getY } from './chart-utils';
import classNames from 'classnames';

/* eslint-disable-next-line */
export interface TooltipsAnimationProps {}

export function TooltipsAnimation(props: TooltipsAnimationProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [index, setIndex] = useState<number | null>(null);

  const tooltipsData = useMemo(() => {
    if (index == null) return null;
    return [...bars[index].data].reverse();
  }, [index]);

  useEffect(() => {
    if (activeSection == null) return;
    document
      .querySelector(`.legend-item-${activeSection}`)
      ?.scrollIntoView({ block: 'center' });

    return;
  }, [activeSection]);

  return (
    <div className="w-[100vw] flex  h[100vh]">
      <div className="relative touch-none select-none">
        <svg
          onPointerMove={(e) => {
            const temp = e.currentTarget.getBoundingClientRect();
            const xOverSvg = e.clientX - temp.left;
            const yOverSvg = e.clientY - temp.top;

            if (!wrapperRef.current) return;

            wrapperRef.current.style.setProperty('--top', `${xOverSvg + 30}px`);
            wrapperRef.current.style.setProperty(
              '--left',
              `${yOverSvg - 20}px`
            );
          }}
          className="h-[900px] w-[600px] max-w-full rounded-xl bg-gray"
        >
          {bars.map((bar, barIndex) => (
            <g
              key={bar.name}
              onPointerEnter={() => setIndex(barIndex)}
              onPointerLeave={() => setIndex(null)}
            >
              {bar.data.map((barSection, blockIndex) => (
                <rect
                  onPointerDown={(e) => {
                    (e.target as Element).releasePointerCapture(e.pointerId);
                  }}
                  className="cursor-pointer stroke-gray-600"
                  key={barSection.name}
                  onPointerEnter={() => setActiveSection(barSection.name)}
                  x={getX(barIndex)}
                  y={getY(barSection.value, blockIndex, bar.data)}
                  width={barWidth}
                  height={barSection.value}
                  fill={barSection.color}
                  rx="2"
                />
              ))}
            </g>
          ))}
        </svg>
        <div
          ref={wrapperRef as any}
          className={classNames(
            'absolute top-0  left-0  translate-x-[var(--top)]  translate-y-[var(--left)] bg-gray-500 p-5 rounded-xl',
            tooltipsData ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="overflow-hidden h-16 mask-legend scroll-smooth py-5">
            {tooltipsData &&
              tooltipsData.map((datapoint, ind) => (
                <div
                  className={classNames(
                    'flex gap-2  ',
                    `legend-item-${datapoint.name}`
                  )}
                >
                  <span
                    className="inline-block h-4 w-4"
                    style={{ backgroundColor: datapoint?.color }}
                  />
                  {datapoint?.name}: {datapoint?.value}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TooltipsAnimation;
