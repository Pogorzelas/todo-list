import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from 'redux';
import type { AppDispatch, RootState } from './store.types';

const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
