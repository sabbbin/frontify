import { useRef } from 'react';
import styles from './AwesomeAmieslider.module.css';
import { TaskNames } from './constants/contants';
import { FeatureTitle, Features } from './features/features';

/* eslint-disable-next-line */
export interface AwesomeAmiesliderProps {}

export function AwesomeAmieslider(props: AwesomeAmiesliderProps) {
  return (
    <div className=" w-[100vw] h-screen">
      <div className="h-[50vh] aspect-square">
        <h2>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          laboriosam repellat voluptates pariatur ratione soluta veritatis rem
          ipsa saepe quasi?
        </h2>
      </div>
      <div className="flex w-full gap-10">
        <div className="w-full h-full bg-red-400">
          {TaskNames.map((taskName) => (
            <div className="flex justify-center items-center ">
              <FeatureTitle id={taskName.id}>{taskName.title}</FeatureTitle>
            </div>
          ))}
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-lg bg-gray-600 ">
            {TaskNames.map((TaskName) => (
              <TaskName.Card id={TaskName.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwesomeAmieslider;
