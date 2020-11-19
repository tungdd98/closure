console.log("instagram");

const DATA = {
    start: 0,
    end: 7,
    rounds: [
        [1, 3, 3, 0, 6, 2, 5, 4, 5],
        [0, 0, 1, 2, 2, 2, 0, 2, 1, 2, 1, 6],
        [1, 3, 4, 4, 0, 2, 3, 6, 2, 2, 7, 6, 3, 2, 5, 6],
    ],
    result: [2, 3, 2, 1, 2, 0, 4, 3, 1],
};

const Instagram = (data) => {
    const { start, end, rounds, result } = data;
    const arrayQ = getHeight(
        {
            length: result.length,
            res: getCountElm(result),
        },
        start,
        end
    );
    const spacers = [];
    for (let round of rounds) {
        const temp = {
            length: round.length,
            res: getCountElm(round),
        };
        spacers.push(getSpace(getHeight(temp, start, end), arrayQ));
    }

    return sortDesc(spacers);
};

const getCountElm = (arr) => {
    let counts = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    return counts;
};

const getHeight = (elm, start, end) => {
    const result = [];
    const { length, res } = elm;
    for (let i = start; i <= end; i++) {
        const ts = res[i] || 0;
        result.push(ts / length);
    }

    return result;
};

const getSpace = (a, b) =>
    a.reduce((act, cur, index) => (act += Math.abs(cur - b[index])), 0);

const sortDesc = (array) => array.sort((a, b) => a - b);

console.log(Instagram(DATA));
