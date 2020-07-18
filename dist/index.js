"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function immutableFindReplace(array, findFn) {
    var replacements = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        replacements[_i - 2] = arguments[_i];
    }
    var result = __spreadArrays(array);
    var found = [];
    var _loop_1 = function (index) {
        var value = result[index];
        var expanded = [];
        replacements.forEach(function (replacement) {
            if (typeof replacement === 'function') {
                expanded = expanded.concat(replacement(value));
            }
            else {
                expanded.push(replacement);
            }
        });
        if (findFn(value)) {
            found.push({
                index: index,
                values: expanded
            });
        }
    };
    for (var index = 0; index < result.length; index++) {
        _loop_1(index);
    }
    for (var _a = 0, _b = found.reverse(); _a < _b.length; _a++) {
        var item = _b[_a];
        result.splice.apply(result, __spreadArrays([item.index, 1], item.values));
    }
    return result;
}
exports.immutableFindReplace = immutableFindReplace;
