import { render } from '@testing-library/react';

import AmazingButtonClickAnimation from './AmazingButtonClickAnimation';

describe('AmazingButtonClickAnimation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AmazingButtonClickAnimation />);
    expect(baseElement).toBeTruthy();
  });
});
