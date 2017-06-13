import * as matchers from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { updateReceivedBalance } from '../../actions/standard';
import createScope from '../createScope';
import dataStream from '../dataStream';
import requestBalance from './requestBalance';
import balance from './';

const $scope = createScope();
const token = 'some token';
const arg = { $scope, token, type: 'balance' };
const fakeChannel = dataStream(arg);
const payload = { balance: '12.00', currency: 'USD' };
const data = { balance: payload };
let firstBalance = true;

describe('balance channel integration', () => {
    it('should put UPDATE_RECEIVED_BALANCE', () =>
        expectSaga(balance, arg)
            .provide([
                [matchers.call.fn(requestBalance), {}],
                [matchers.call.fn(dataStream), fakeChannel],
                {
                    take({ channel }, next) {
                        if (channel === fakeChannel) {
                            if (firstBalance) {
                                firstBalance = false;
                                return data;
                            }
                            return undefined;
                        }
                        return next();
                    },
                },
            ])
            .put(updateReceivedBalance(payload))
            .run());
});
