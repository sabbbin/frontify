import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './css-mask.module.css';
import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';

/* eslint-disable-next-line */
export interface CssMaskProps {}

export function CssMask(props: CssMaskProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const imageXcalc = useMotionTemplate`max(0px, calc(${imageX}% +calc(${imageX}vw-300px)))`;

  return (
    <main>
      <div ref={ref as never} className="relative z-10 h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="p-5 origin-[90%_40%]  hero-background  h-screen grid [grid-template-rows:4fr_1fr]  "
        >
          <div className="p-12 window-mask flex bg-white rounded-3xl  ">
            <div className="flex h-full flex-col   ">
              <h1 className="my-auto  max-w-[12ch] text-[98px] font-bold leading-[0.9]">
                {' '}
                Playing with masks and Framer Motion
              </h1>
              <p> this motion is inspired by the Runway.com home page .</p>
            </div>
            <div className=" border-[3px] aspect-[5/8] my-auto rounded-full border-gray-7 w-[200px]"></div>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-2 mt-2">
            <div className="col-span-2 border border-white  bg-black rounded-2xl "></div>
            <div className=" bg-orange-400 border rounded-2xl flex justify-center items-center font-bold text-2xl ">
              Early Access
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-blue-100 mt-[-180vh] pb-20  h-[180vh] overflow-clip ">
        <div>
          <motion.div
            style={{ x: imageXcalc }}
            className="mx-auto sticky top-1/4 block  h-80 aspect-vedio w-[1600px] mx-w-[90%] rounded-md"
          >
            {' '}
          </motion.div>
        </div>
        <div className="space-y-[80px]  bg-blue-100 text-[100px]">
          <p> Some more Content</p>
          <p> So there</p>
          <p> Some rooom</p>
          <p> To Scroll ...</p>
        </div>
      </div>
    </main>
  );
}

export default CssMask;
