// Code to flatten a JSON object Recursively

const flatten = (object) => {
  const keys = Object.keys(object);
  const keysCount = keys.length;

  if (keysCount <= 0) {
    return object;
  }

  let newObject = {};

  for (const key in object) {
    const value = object[key];
    if (typeof value === "object") {
      const nestedFlattenedObject = flatten(value);

      for (const key_nested in nestedFlattenedObject) {
        const new_key = key + "_" + key_nested;
        newObject[new_key] = nestedFlattenedObject[key_nested];
      }
    } else {
      newObject[key] = value;
    }
  }

  return newObject;
};
