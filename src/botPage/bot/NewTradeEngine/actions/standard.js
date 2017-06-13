import * as actions from '../constants/actions';
import standardAction from './standardAction';

export const initialize = standardAction(actions.INITIALIZE);

export const start = standardAction(actions.START);

export const newTick = standardAction(actions.NEW_TICK);

export const stopBecauseOfError = standardAction(actions.STOP_BECAUSE_OF_ERROR);

export const initSaga = standardAction(actions.INIT_SAGA);

export const startSaga = standardAction(actions.START_SAGA);

export const purchaseSaga = standardAction(actions.PURCHASE_SAGA);

export const purchaseDone = standardAction(actions.PURCHASE_DONE);

export const receiveAllProposals = standardAction(actions.RECEIVE_ALL_PROPOSALS);
