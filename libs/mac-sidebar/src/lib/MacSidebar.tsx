import { useRef } from 'react';
import styles from './MacSidebar.module.css';

import { IconsList } from './icons/icons';

/* eslint-disable-next-line */
export interface MacSidebarProps {}

export const scaleValue = (
  orV: number,
  [oMi, oMa]: number[],
  [tMi, tMa]: number[]
) => {
  return orV * ((tMa - tMi) / (oMa - oMi)) + (tMi - oMi);
};

export function MacSidebar(props: MacSidebarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!ref.current) return;
    const moousePosition = ev.clientX;
    const iconsPositionLeft = ev.currentTarget.getBoundingClientRect().left;

    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (moousePosition - iconsPositionLeft) / iconWidth;

    const offSetPixel = scaleValue(cursorDistance, [0, 1], [-5, 5]);
    console.log('off', offSetPixel);
    ref.current.style.setProperty(
      '--dock-offset-left',
      `${offSetPixel * -1}px`
    );

    ref.current.style.setProperty('--dock-offset-right', `${offSetPixel}px`);
  };
  return (
    <div ref={ref}>
      <ul className="flex flex-row   relative gap-9  items-center bg-blue-800  mt-28 rounded-md">
        {IconsList.map((a) => (
          <li className=" app " onMouseMove={handleAppHover}>
            <a.icons className=" w-full h-full" />
          </li>
        ))}
      </ul>

      <div className="h-1  flex bg-red-300"> </div>

      {IconsList.map((a, id) => (
        <div
          className="border w-[20%] border-gray-700 hover:border-gray-800 on-child-hover:border-gray-700 hover:bg-gray-400 active:bg-gray-5 on-child-[active,hover]:bg-red-300 rounded-md cursor-pointer select-none group bg-gray-300 flex flex-col overflow-hidden"
          key={id}
        >
          <header className="px-16 py-8 bg-gray-200 group-hover:bg-gray-300 group-active:bg-gray-400 group-on-child-[hover,active]:bg-green-900">
            <a.icons />
          </header>
          <hr className="group-hover:border-gray-100 group-on-child-[hover, active]:border-gray-900" />
          <footer className="px-4 py-2.5 flex items-center space-x-2.5">
            <a className="hover:text-gray-300  child">abcld</a>
          </footer>
        </div>
      ))}

      <form className="flex inverted-colors:outline  mb-36 ">
        <input className="optional:border-gray-900 " />
        <button className="bg-blue-100 hocus:bg-blue-600"> click</button>
      </form>
      <div className="mt-96">helo</div>
    </div>
  );
}

export default MacSidebar;
