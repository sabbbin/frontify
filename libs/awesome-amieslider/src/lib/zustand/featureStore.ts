import React from 'react';
import { create } from 'zustand';

export interface IFeatureStore {
  inViewId: string | null;
  setViewId: (id: string) => void;
}

const FeatureStore = create((set) => ({
  inViewId: null,
  setViewId: (id: string) => set((state) => ({ inViewId: id })),
}));
export default FeatureStore;
