export declare type Reducer<T> = (x: T) => T;
export declare type Replacement<T> = {
    index: number;
    values: T[];
};
/**
 * @param array - The input array
 * @param findFn - A predicate function which, if returns `true` causes the current item to be operated on.
 * @param replaceWiths - If specified, each found value will be replaced with these values, else removed. If a `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value.
 */
export declare function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: T[]): T[];
export declare function immutableFindReplace<T>(array: T[], findFn: (x: T) => boolean, ...replacements: Reducer<T>[]): T[];
