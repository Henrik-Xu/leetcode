/**
 * Destination City
 */
const destCity = (paths) => {
    const set = new Set();
    for (const path of paths) set.add(path[0]);
    for (const path of paths) {
      if (!set.has(path[1])) return path[1];
    }
  };