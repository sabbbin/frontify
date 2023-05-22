import { render } from '@testing-library/react';

import MacSidebar from './MacSidebar';

describe('MacSidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MacSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
