console.log("Equal Object");

/**
 * Shallow Equality
 */

const shallowEqual = (objA, objB) => {
    const keysObjA = Object.keys(objA);
    const keysObjB = Object.keys(objB);

    if (keysObjA.length !== keysObjB.length) {
        return false;
    }

    for (const key of keysObjA) {
        if (objA[key] !== objB[key]) {
            return false;
        }
    }

    return true;
};

const hero_1 = {
    name: "Batman",
    realName: "Bruce Wayne",
};

const hero_2 = {
    name: "Batman",
    realName: "Bruce Wayne",
};

console.log("Shallow Equality", shallowEqual(hero_1, hero_2));

/**
 * Deep Equality
 */

const isObject = (obj) => {
    return obj !== null && typeof obj === "object";
};

const deepEqual = (objA, objB) => {
    const keysObjA = Object.keys(objA);
    const keysObjB = Object.keys(objB);

    if (keysObjA.length !== keysObjB.length) {
        return false;
    }

    for (const key of keysObjA) {
        const valObjA = objA[key];
        const valObjB = objB[key];
        const areObjects = isObject(valObjA) && isObject(valObjB);

        if (
            (areObjects && !deepEqual(valObjA, valObjB)) ||
            (!areObjects && valObjA !== valObjB)
        ) {
            return false;
        }
    }

    return true;
};

const hero_3 = {
    name: "Batman",
    realName: "Bruce Wayne",
    address: {
        city: "Gotham",
    },
};

const hero_4 = {
    name: "Batman",
    realName: "Bruce Wayne",
    address: {
        city: "Hanoi",
    },
};

console.log("Deep Equal", deepEqual(hero_3, hero_4));

/**
 * Clone Object
 */

const cloneObject = (obj) => {
    const clone = {};

    for (const key in obj) {
        if (isObject(key)) {
            clone[key] = cloneObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
};

const hero_5 = cloneObject(hero_4);
console.log("Copy object", hero_5);
