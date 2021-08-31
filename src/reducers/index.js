import incrementNum from './AddToCart';

import { combineReducers } from 'redux';

const rootReducers = combineReducers(
    {
        incrementNum
    }
)

export default rootReducers;