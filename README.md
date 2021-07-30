# Use deprecation

React hook to deprecate components and props

## Install

```bash
yarn add use-deprecation
# or
npm install use-deprecation --save
```

## Usage

Just import and use the functions for components and props

### Component

```javascript
import { useDeprecation } from 'use-deprecation';

function OldAccordion() {
  const { deprecatedComponent } = useDeprecation();
  deprecatedComponent('OldAccordion', 'NewAccordion');

  return (...Component);
}

// When Component is used
<OldAccordion />

// Output will be
'DEPRECATED: OldAccordion is deprecated please use NewAccordion instead'

```

### Prop

```javascript
import { useDeprecation } from 'use-deprecation';

function Accordion(props) {
  const { color } = props;
  
  const { deprecatedProps } = useDeprecation();
  deprecatedProps(color, { value: 'green', alternative: 'blue' });

  return (...Component);
}

// When Component is used
<Accordion color="green" />

// Output will be
'DEPRECATED: green is deprecated please use blue instead'

```
