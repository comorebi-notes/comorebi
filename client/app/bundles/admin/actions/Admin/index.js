import { createAction } from 'redux-actions'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const increment = createAction(INCREMENT_COUNTER)
export const decrement = createAction(DECREMENT_COUNTER)
