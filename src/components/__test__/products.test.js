import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Allproducts from '../products';

const mockStore = configureMockStore([]);
describe('Products displays products', () => {
  test('Products renders correctly', () => {
    const store = mockStore({
      products: {
        products: [],
      },
    });
    const tree = render(
      <Provider store={store}>
        <Allproducts />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
