/* eslint-env mocha, jest */

import getActualComponentFactory from '../../lib/testUtils';
import Fork from '../fork';

const getActualFork = getActualComponentFactory(Fork, {});

it('should render', () => {
  getActualFork();
});
it('should contain an <svg />', () => {
  const wrapper = getActualFork();
  expect(wrapper.find('path').length).toBeGreaterThan(0);
});
