import { expect } from 'chai';
import Promise from 'promise';
import sinon from 'sinon';

import api from '../src/api';
import index from '../src/index';

describe('index', () => {
    it('should return responses from api.', (done) => {
        const response_data = {data:[1,2,3,4,5]};
        const resolved = new Promise.resolve(response_data);
        sinon.stub(api, 'get').returns(resolved);

        index.api()
        .then((response) => {
            expect(response).to.eql(response_data['data']);
            done();
        }).catch(done);
    })

})