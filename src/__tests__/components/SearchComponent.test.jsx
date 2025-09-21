import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchComponent from '../../components/SearchComponent';

// Create a test theme
const theme = createTheme();

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('SearchComponent', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it('renders search input with placeholder', () => {
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders search icon', () => {
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    // Search icon should be present (MUI SearchIcon)
    const searchIcon = screen.getByTestId('SearchIcon');
    expect(searchIcon).toBeInTheDocument();
  });

  it('calls onSearch when user types in input', async () => {
    const user = userEvent.setup();
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    await user.type(searchInput, 'test search');
    
    expect(mockOnSearch).toHaveBeenCalledTimes(11); // Called for each character
    expect(mockOnSearch).toHaveBeenLastCalledWith('test search');
  });

  it('handles empty search input', async () => {
    const user = userEvent.setup();
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    await user.type(searchInput, 'test');
    await user.clear(searchInput);
    
    expect(mockOnSearch).toHaveBeenCalledWith('');
  });

  it('handles special characters in search', async () => {
    const user = userEvent.setup();
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    await user.type(searchInput, 'test@#$%');
    
    expect(mockOnSearch).toHaveBeenLastCalledWith('test@#$%');
  });

  it('handles rapid typing', async () => {
    const user = userEvent.setup();
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    await user.type(searchInput, 'quick');
    
    expect(mockOnSearch).toHaveBeenCalledTimes(5);
  });

  it('does not crash when onSearch is not provided', () => {
    // This should not throw an error
    expect(() => {
      renderWithTheme(<SearchComponent />);
    }).not.toThrow();
  });

  it('maintains input focus after typing', async () => {
    const user = userEvent.setup();
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    await user.type(searchInput, 'test');
    
    expect(searchInput).toHaveFocus();
  });

  it('handles onChange event correctly', () => {
    renderWithTheme(<SearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByPlaceholderText('Search…');
    fireEvent.change(searchInput, { target: { value: 'manual input' } });
    
    expect(mockOnSearch).toHaveBeenCalledWith('manual input');
  });
});
