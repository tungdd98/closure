console.log("closure");

const initCount = 10;

const calculate = (() => {
    let count = initCount;

    const increment = (x) => {
        count += x;
        log();
    };

    const decrement = (x) => {
        count -= x;
        log();
    };

    const reset = () => {
        count = initCount;
        log();
    };

    const log = () => {
        document.querySelector(".js-count").innerHTML = count;
    };

    return Object.freeze({
        increment,
        decrement,
        reset,
        log,
    });
})(initCount);

window.onload = () => {
    calculate.log();
};
document
    .querySelector(".js-increment")
    .addEventListener("click", () => calculate.increment(2));

document
    .querySelector(".js-decrement")
    .addEventListener("click", () => calculate.decrement(2));

document.querySelector(".js-reset").addEventListener("click", calculate.reset);
