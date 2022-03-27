import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Array sorting visualization', () => {
    it('Displays the header with UI elements to manipulate the array', () => {
        render(<App/>);
        expect(screen.getByTestId('arraySizeSlider')).toBeInTheDocument();
        expect(screen.getByTestId('regenerateArrayButton')).toBeInTheDocument();
        expect(screen.getByTestId('sortMethodSelect')).toBeInTheDocument();
        expect(screen.getByTestId('launchSortButton')).toBeInTheDocument();
    });
    it('Displays the array', () => {
        render(<App/>);
        expect(screen.getByTestId('arrayDisplay')).toBeInTheDocument();
    })
    it('Should update the size of the array', () => {
      render(<App/>)
      // wip, can't trigger even on MUI component
      fireEvent.change(screen.getByTestId('arraySizeSlider'), {target: {value:80}})
      fireEvent.click(screen.getByTestId('regenerateArrayButton'));
    })
});