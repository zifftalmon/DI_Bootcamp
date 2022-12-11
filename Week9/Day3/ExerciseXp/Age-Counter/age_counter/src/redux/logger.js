export const myLogger = (store) => (next) => (action) => {
    next(action)
    console.log('caught in the middlewear', JSON.stringify(store.getState()));
}