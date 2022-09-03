import { store } from './store'

const STORE_LOCALSTORAGE_KEY = 'store'

function subscriptionListener() {
  const state = store.getState()
  const serializedState = JSON.stringify(state)

  localStorage.setItem(STORE_LOCALSTORAGE_KEY, serializedState)
}

function setPreloadedState() {
  try {
    const serializedState = localStorage.getItem(STORE_LOCALSTORAGE_KEY)

    if (!serializedState) {
      return
    }

    const state = JSON.parse(serializedState)

    return state
  } catch (error) {}
}

export { subscriptionListener, setPreloadedState }
