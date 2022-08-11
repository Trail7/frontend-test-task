import { render, screen } from '@testing-library/react';
import {Horse} from "./horse";

describe('horse test suite', () =>{
    test('horse name is shown', () => {
        render(<Horse name={'Cricket'} distance={80} />);
        const name = screen.getByText(/Cricket/i);
        expect(name).toBeInTheDocument();
    });

    test('distance value is shown', () => {
        render(<Horse name={'Cricket'} distance={80} />);
        const value = screen.getByText('80');
        expect(value).toBeInTheDocument();
    });
})
