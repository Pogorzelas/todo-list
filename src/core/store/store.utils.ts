import { store } from './store';
import type { RootState } from './reducers';
import { isObject } from '../../shared/type-guards/isObject';

const STORE_LOCALSTORAGE_KEY = 'store';

function isStoreState(value: unknown): value is RootState {
  return isObject(value);
}

function subscriptionListener() {
  const state = store.getState();
  const serializedState = JSON.stringify(state);

  localStorage.setItem(STORE_LOCALSTORAGE_KEY, serializedState);
}

function setPreloadedState() {
  try {
    const serializedState = localStorage.getItem(STORE_LOCALSTORAGE_KEY);

    if (!serializedState) {
      return;
    }

    const state: unknown = JSON.parse(serializedState);

    if (isStoreState(state)) {
      return state;
    }
  } catch (error) {}
}

export { subscriptionListener, setPreloadedState };
