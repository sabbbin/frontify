import { render } from '@testing-library/react';

import CssMask from './css-mask';

describe('CssMask', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CssMask />);
    expect(baseElement).toBeTruthy();
  });
});
