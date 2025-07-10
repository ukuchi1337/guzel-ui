// src/components/ui/hello/Hello.test.tsx
import { render, screen } from '@testing-library/react';

import { Hello } from './Hello';

describe('Hello component', () => {
  it('renders greeting text', () => {
    render(<Hello />);
    expect(screen.getByText('Hello, Guzel UI!')).toBeInTheDocument();
  });
});
