function deepEquals(a, b) {
  // Handle strict equality
  if (a === b) {
    // Covers all primitives except NaN
    return true;
  }

  // Handle NaN equality
  if (typeof a === "number" && typeof b === "number") {
    return isNaN(a) && isNaN(b);
  }

  // Handle null and undefined
  if ((a === null && b === undefined) || (a === undefined && b === null)) {
    return false;
  }

  // Handle array comparison
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }

  // If one is array and the other isn't
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  // Handle object comparison
  if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!b.hasOwnProperty(key)) return false;
      if (!deepEquals(a[key], b[key])) return false;
    }

    return true;
  }

  // Everything else is not equal
  return false;
}


module.exports=deepEquals;