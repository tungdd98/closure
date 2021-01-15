console.log("Histogram JS");
const data = {
    1: [1, 3, 3, 0, 6, 2],
    2: [0, 0, 1, 2, 2, 2, 0, 2, 1, 2, 1, 6],
    3: [1, 3, 4, 4, 0, 2, 3, 6, 2, 2, 7, 6, 3, 2, 5, 6],
};
const Q = [2, 3, 2, 1, 2, 0, 4, 3, 1];
const k = 7;
const countExistData = (obj, k) => {
    const total = obj.length;
    const cache = {};
    for (let i of obj) {
        if (i in cache) {
            cache[i]++;
        } else {
            cache[i] = 1;
        }
    }
    for (let i = 0; i <= k; i++) {
        if (i in cache) {
            cache[i] = parseFloat(cache[i] / total);
        } else {
            cache[i] = 0;
        }
    }
    console.log(cache);
    return cache;
};

const pointsQ = countExistData(Q);
const distance = (obj, k) => {
    const points = countExistData(obj, k);
    let distance = 0;
    for (let i = 0; i <= k; i++) {
        distance += Math.abs(pointsQ[i] - points[i]);
    }
    return distance;
};

const Histogram = (data, k) => {
    Object.values(data).forEach((item) => {
        console.log(distance(item, k));
    });
};

Histogram(data, k);
