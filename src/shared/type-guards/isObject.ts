function isObject(value: unknown): value is Record<PropertyKey, unknown> {
  return typeof value === 'object'
    && !Array.isArray(value)
    && value !== null;
}

export { isObject };
