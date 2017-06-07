import { testSaga } from 'redux-saga-test-plan';
import * as selectors from '../selectors';
import requestPurchase from './requestPurchase';
import purchase from './';

const contractType = 'CALL';

const selectedProposal = { contract_type: 'CALL' };

const receivedProposals = {
    uuid1: {},
    uuid2: selectedProposal,
};

describe('Purchase saga', () => {
    it('should select a proposal using the contract type and purchase it', () => {
        testSaga(purchase, contractType)
            .next()
            .select(selectors.receivedProposals)
            .next(receivedProposals)
            .call(requestPurchase, selectedProposal)
            .next()
            .isDone();
    });
});
