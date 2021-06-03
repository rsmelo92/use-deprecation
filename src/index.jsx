/* eslint-disable no-console */
function useDeprecate() {
  const deprecatedComponent = (name, alternative) => {
    const message = alternative ? `use ${alternative} instead` : "don't use it anymore";
    const componentName = name || 'This component';
    console.warn(`DEPRECATED: ${componentName} is deprecated please ${message}`);
  };

  const deprecatedProps = (prop, options) => {
    const { value, alternative } = options || {};
    const message = alternative ? `use ${alternative} instead` : "don't use it anymore";
    if (value) {
      return prop === value && console.warn(`DEPRECATED: ${value} is deprecated please ${message}`);
    }
    return console.warn(`DEPRECATED: ${prop} is deprecated please ${message}`);
  };

  return { deprecatedComponent, deprecatedProps };
}

export { useDeprecate };
