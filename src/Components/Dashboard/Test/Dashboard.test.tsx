import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '..';
import store from '../../../Services/Store/rootStore';


test('renders Dashboard', () => {
    render(<React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
    );
    const linkElement = screen.getByText('Total Cart Value');
    expect(linkElement).toBeInTheDocument();
  });