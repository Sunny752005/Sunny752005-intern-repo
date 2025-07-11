import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';
import * as api from './api';


jest.mock('./api');

describe('UserList component', () => {
  test('displays users after successful API call', async () => {

    api.fetchUsers.mockResolvedValue([
      { id: 1, name: 'Sunny' },
      { id: 2, name: 'Jeremy' }
    ]);

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Sunny')).toBeInTheDocument();
      expect(screen.getByText('Jeremy')).toBeInTheDocument();
    });
  });

  test('displays error on failed API call', async () => {
    api.fetchUsers.mockRejectedValue(new Error('API failed'));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load users')).toBeInTheDocument();
    });
  });
});
