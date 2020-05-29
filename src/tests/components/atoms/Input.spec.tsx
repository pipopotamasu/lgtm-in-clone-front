import React from 'react';
import { render } from '@testing-library/react';
import Input from 'src/components/atoms/Input';

const defaultProps = {
  type: 'text' as const,
  defaultValue: 'test text',
  id: 'test',
  name: 'test',
};

describe('components/atoms/Input', () => {
  describe('without error', () => {
    it('does not exist error message', () => {
      const result = render(<Input {...defaultProps} />);
      expect(result.getByDisplayValue('test text')).toBeInTheDocument();
      expect(result.container.querySelector('span')).toBe(null);
    });
  });

  describe('with error', () => {
    it('does not exist error message', () => {
      const props = {
        error: {
          type: 'test',
          message: 'error message',
        },
      };
      const result = render(<Input {...defaultProps} {...props} />);
      expect(result.getByText(/error message/)).toBeInTheDocument();
    });
  });
});
