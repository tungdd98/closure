console.log("Leven");

const s1 = "kitten";
const s2 = "sitting";
const createArray2D = (rows, cols) => {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = Array(cols).fill(0);
    }

    return array;
};
const Levenshtein = (s1, s2) => {
    const lengthS1 = s1.length,
        lengthS2 = s2.length;
    const d = createArray2D(lengthS1, lengthS2);
    for (let i = 0; i < lengthS1; i++) {
        d[i][0] = i;
    }
    for (let i = 0; i < lengthS2; i++) {
        d[0][i] = i;
    }
    for (let i = 1; i < lengthS1; i++) {
        for (let j = 1; j < lengthS2; j++) {
            const cost = s1.charCodeAt(i - 1) === s2.charCodeAt(j - 1) ? 0 : 1;
            d[i][j] = Math.min(
                d[i - 1][j] + 1,
                d[i][j - 1] + 1,
                d[i - 1][j - 1] + cost
            );
        }
    }
    return d[lengthS1 - 1][lengthS2 - 1];
};

console.log(Levenshtein(s1, s2));
