import React from 'react';
import { render } from '@testing-library/react';

import { useDeprecate } from '..';

interface MockComponent {
  color: string;
}

describe('@jusbrasil-rc/utils-deprecate', () => {
  beforeEach(() => {
    console.warn = jest.fn();
  });

  describe('component', () => {
    it('should deprecate component correctly', () => {
      const MockComponent = () => {
        const { deprecatedComponent } = useDeprecate();
        deprecatedComponent('MockComponent');
        return <div>Mocked</div>;
      };

      render(<MockComponent />);

      expect(console.warn).toHaveBeenCalledWith(
        "DEPRECATED: MockComponent is deprecated please don't use it anymore"
      );
    });

    it('should deprecate component correctly with alternative', () => {
      const MockComponent = () => {
        const { deprecatedComponent } = useDeprecate();
        deprecatedComponent('MockComponent', 'Navbar');
        return <div>Mocked</div>;
      };

      render(<MockComponent />);

      expect(console.warn).toHaveBeenCalledWith(
        'DEPRECATED: MockComponent is deprecated please use Navbar instead'
      );
    });
  });

  describe('prop', () => {
    it('should deprecate all prop values correctly', () => {
      const MockComponent = ({ color }: MockComponent) => {
        const { deprecatedProps } = useDeprecate();
        deprecatedProps(color);
        return <div>Mocked</div>;
      };

      render(<MockComponent color="green" />);

      expect(console.warn).toHaveBeenCalledWith(
        "DEPRECATED: green is deprecated please don't use it anymore"
      );

      render(<MockComponent color="red" />);

      expect(console.warn).toHaveBeenCalledWith(
        "DEPRECATED: red is deprecated please don't use it anymore"
      );
    });

    it('should deprecate only one prop value correctly', () => {
      const MockComponent = ({ color }: MockComponent) => {
        const { deprecatedProps } = useDeprecate();
        deprecatedProps(color, { value: 'green' });
        return <div>Mocked</div>;
      };

      render(<MockComponent color="green" />);

      expect(console.warn).toHaveBeenCalledWith(
        "DEPRECATED: green is deprecated please don't use it anymore"
      );
    });

    it('should deprecate prop correctly with alternative', () => {
      const MockComponent = ({ color }: MockComponent) => {
        const { deprecatedProps } = useDeprecate();
        deprecatedProps(color, { value: 'green', alternative: 'blue' });
        return <div>Mocked</div>;
      };

      render(<MockComponent color="green" />);

      expect(console.warn).toHaveBeenCalledWith(
        'DEPRECATED: green is deprecated please use blue instead'
      );
    });

    it('should not warn when prop is not deprecated', () => {
      const MockComponent = ({ color }: MockComponent) => {
        const { deprecatedProps } = useDeprecate();
        deprecatedProps(color, { value: 'green' });
        return <div>Mocked</div>;
      };

      render(<MockComponent color="blue" />);

      expect(console.warn).not.toHaveBeenCalled();
    });
  });
});
