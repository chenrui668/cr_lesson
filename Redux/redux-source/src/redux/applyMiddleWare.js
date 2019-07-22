import { createStore } from ".";

export default function (...middleWares) {
    return (createStore) => (...arg) => {
        const store = createStore(...arg);
        let dispatch = () => {
            throw new Error(
                'Dispatching while constructing your middleware is not allowed. ' +
                'Other middleware would not be applied to this dispatch.'
            )
        }
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        const chain = middleWares.map(middleWare => middleWare(middlewareAPI))
    }
}