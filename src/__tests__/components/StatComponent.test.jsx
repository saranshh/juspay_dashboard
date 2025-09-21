import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StatComponent from '../../components/StatComponent';

// Create a test theme
const theme = createTheme();

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('StatComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    value: '100',
    percentage: '+5%',
    icon: <span data-testid="test-icon">📈</span>,
    bgColor: '#ffffff'
  };

  it('renders with all required props', () => {
    renderWithTheme(<StatComponent {...defaultProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('+5%')).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies special styling for Customers title', () => {
    const props = { ...defaultProps, title: 'Customers' };
    renderWithTheme(<StatComponent {...props} />);
    
    const titleElement = screen.getByText('Customers');
    expect(titleElement).toHaveStyle('color: rgb(0, 0, 0)');
  });

  it('applies special styling for Growth title', () => {
    const props = { ...defaultProps, title: 'Growth' };
    renderWithTheme(<StatComponent {...props} />);
    
    const titleElement = screen.getByText('Growth');
    expect(titleElement).toHaveStyle('color: rgb(0, 0, 0)');
  });

  it('does not apply special styling for other titles', () => {
    renderWithTheme(<StatComponent {...defaultProps} />);
    
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).not.toHaveStyle('color: black');
  });

  it('renders with custom background color for special titles', () => {
    const props = { ...defaultProps, title: 'Customers', bgColor: '#ff0000' };
    renderWithTheme(<StatComponent {...props} />);
    
    const paperElement = screen.getByText('Customers').closest('[class*="MuiPaper"]');
    expect(paperElement).toHaveStyle('background-color: #ff0000');
  });

  it('handles empty or undefined values gracefully', () => {
    const props = {
      title: '',
      value: '',
      percentage: '',
      icon: null,
      bgColor: undefined
    };
    
    renderWithTheme(<StatComponent {...props} />);
    
    // Should render without crashing - check for the Paper component
    const paperElement = document.querySelector('.MuiPaper-root');
    expect(paperElement).toBeInTheDocument();
  });

  it('displays percentage and icon in the same container', () => {
    renderWithTheme(<StatComponent {...defaultProps} />);
    
    const percentageElement = screen.getByText('+5%');
    const iconElement = screen.getByTestId('test-icon');
    
    // Both should be in the same flex container
    const container = percentageElement.parentElement;
    expect(container).toContainElement(iconElement);
  });
});
