import { render } from '@testing-library/react';

import TooltipsAnimation from './TooltipsAnimation';

describe('TooltipsAnimation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TooltipsAnimation />);
    expect(baseElement).toBeTruthy();
  });
});
