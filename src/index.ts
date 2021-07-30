interface Options {
  value?: string;
  alternative?: string;
}

function useDeprecate() {
  const deprecatedComponent = (name: string, alternative?: string) => {
    const message = alternative ? `use ${alternative} instead` : "don't use it anymore";
    const componentName = name || 'This component';

    console.warn(`DEPRECATED: ${componentName} is deprecated please ${message}`);
  };

  const deprecatedProps = (prop: string, options?: Options) => {
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
