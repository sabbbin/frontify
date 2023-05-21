import classNames from 'classnames';
import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import FeatureStore, { IFeatureStore } from '../zustand/featureStore';

type IFeature = {
  gradient: string;
  children: React.ReactNode;
  id: string;
};

export const Features = ({ id, gradient, children }: IFeature) => {
  const isViewId = FeatureStore((state: IFeatureStore) => state.inViewId);
  return (
    <div
      className={classNames(
        ' absolute w-full  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5 rounded-lg aspect-square bg-slate-500 bg-gradient-to-br',
        gradient,

        isViewId == id ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
};

export const Todo = ({ id }: { id: string }) => {
  return (
    <Features id={id} gradient="from-[blue] to=[lightBlue]">
      <h2> We are from Todo List</h2>
    </Features>
  );
};

export const Progress = ({ id }: { id: string }) => {
  return (
    <Features id={id} gradient="from-[green] to-[lightGreen]">
      <h3> We are from Progres List</h3>
    </Features>
  );
};

export const Completed = ({ id }: { id: string }) => {
  return (
    <Features id={id} gradient="from-[red] to=[lightRed]">
      {' '}
      <h3> We are from Completed List</h3>
    </Features>
  );
};

type IFeatureTitle = {
  children: React.ReactNode;
  id: string;
};

export const FeatureTitle = ({ id, children }: IFeatureTitle) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const setViewId = FeatureStore((state: IFeatureStore) => state.setViewId);

  useEffect(() => {
    if (isInView) {
      console.log('helo', id);
      setViewId(id);
    }
  }, [isInView]);

  return (
    <p
      ref={ref}
      className={classNames(
        'font-heading text-5xl  py-96 transistion-[opacity]',
        isInView ? 'text-gray-900' : 'text-gray-500'
      )}
    >
      {children}
    </p>
  );
};
