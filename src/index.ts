export type Reducer<T> = (x: T) => T;
export type Replacement<T> = {
  index: number;
  values: T[];
};

/**
 * @param array - The input array
 * @param findFn - A predicate function which, if returns `true` causes the current item to be operated on.
 * @param replaceWiths - If specified, each found value will be replaced with these values, else removed. If a `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value.
 */

export function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: T[]): T[];
export function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: Reducer<T>[]): T[];
export function immutableFindReplace<T>(
  array: T[],
  findFn: (x: T) => boolean,
  ...replacements: (T | Reducer<T>)[]
): T[] {
  const result: T[] = [...array];
  const found: Replacement<T>[] = [];

  for (let index = 0; index < result.length; index++) {
    const value = result[index];
    let expanded: T[] = [];
    replacements.forEach((replacement: T | Reducer<T>) => {
      if (typeof replacement === 'function') {
        expanded = expanded.concat((replacement as Reducer<T>)(value));
      } else {
        expanded.push(replacement);
      }
    });

    if (findFn(value)) {
      found.push({
        index: index,
        values: expanded
      });
    }
  }

  for (const item of found.reverse()) {
    result.splice(item.index, 1, ...item.values);
  }

  return result;
}
