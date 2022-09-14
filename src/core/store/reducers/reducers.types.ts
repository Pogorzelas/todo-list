import type { StateFromReducersMapObject } from '@reduxjs/toolkit';
import type { combinedReducer } from './reducers';

type RootState = StateFromReducersMapObject<typeof combinedReducer>

export type { RootState };
