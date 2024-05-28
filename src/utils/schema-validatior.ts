export const getErrorMessageBypPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
): string | undefined => {
  const keys = propertyPath.split(".");
  let error = obj;
  // keys.forEach((key) => {
  //   error = error[key];
  // });

  for (const prop of keys) {
    if (error[prop]) {
      error = error[prop];
    } else {
      return undefined;
    }
  }

  return error.message;
};
