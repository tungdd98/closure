console.log("hash table");

const hash = {};
hash["one"] = 1;
hash["two"] = 2;
hash["three"] = 3;

for (let key in hash) {
    if (hash.hasOwnProperty(key)) {
        console.log(`${key} - ${hash[key]}`);
    }
}

function HashTable(obj) {
    this.length = 0;
    this.items = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            this.items[key] = obj[key];
            this.length++;
        }
    }

    this.setItem = function (key, value) {
        let prev = undefined;
        if (this.items.hasItem(key)) {
            prev = this.items[key];
        } else {
            this.length++;
        }
        this.items[key] = value;

        return prev;
    };

    this.hasItem = function (key) {
        return this.items.hasOwnProperty(key);
    };

    this.getItem = function (key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    };
}

const hashOne = new HashTable({
    one: 1,
    two: 2,
    three: 3,
});

console.log(hashOne);
console.log(hashOne.getItem("one"));
