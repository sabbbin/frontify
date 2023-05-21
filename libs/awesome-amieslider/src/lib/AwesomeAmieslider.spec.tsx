import { render } from '@testing-library/react';

import AwesomeAmieslider from './AwesomeAmieslider';

describe('AwesomeAmieslider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AwesomeAmieslider />);
    expect(baseElement).toBeTruthy();
  });
});
