/**
 * @param array - The input array
 * @param findFn - A predicate function which, if returns `true` causes the current item to be operated on.
 * @param replaceWiths - If specified, each found value will be replaced with these values, else removed. If a `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value.
 */

function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: T[]): T[];
function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: ((x: T) => T)[]): T[];
function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: ((x: T) => T)[] | T[]): T[] {
  const result: T[] = [...array];
  const found = [];
  
  for (const [index, value] of result.entries()) {
    let expanded = [];
    replacements.forEach(replacement => {
      if (typeof replacement === 'function') {
        expanded = expanded.concat(replacement(value));
      } else {
        expanded.push(replacement);
      }
    });

    if (findFn(value)) {
      found.push({
        index: index,
        replaceWithValue: expanded
      });
    }
  }

  for (const item of found.reverse()) {
    const spliceArgs = [item.index, 1].concat(item.replaceWithValue);
    result.splice.apply(result, spliceArgs);
  }

  return result;
}