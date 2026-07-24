/**
 * @param {*} value
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(value, classFunction) {
    if (typeof classFunction !== "function") return false;

    if (value instanceof classFunction) return true;

    if (value === null || value === undefined) return false;

    return Object(value) instanceof classFunction;
};