import expect from 'expect';

import * as actions from '../src/js/actions/actions.js';


describe('update info action', () => {
  it('should create an action and pass info through', () => {
    const name = "test_field";
    const data = "Test Content";

    const expectedResult = {
      type : actions.UPDATE_INFO,
      name : name,
      data : data
    };

    expect(actions.updateInfo(name, data)).toEqual(expectedResult);
  });
});
  
