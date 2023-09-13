import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import BackArrow from '../BackArrow';

describe('BackNavigation', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <BackArrow />
      </Router>,
    );
    expect(screen.getByTestId('back-navigation')).toBeInTheDocument();
  });
});
