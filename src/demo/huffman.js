const countString = (string) => {
    const length = string.length;
    const cache = {};
    for (let i of string) {
        if (i in cache) {
            cache[i]++;
        } else {
            cache[i] = 1;
        }
    }
    return Object.entries(cache).map(([key, value]) => {
        return {
            name: key,
            val: value / length,
        };
    });
};

const buildTree = (string) => {
    let inputArr = countString(string);
    inputArr = inputArr.sort((a, b) => (a.val > b.val ? 1 : -1));
    return inputArr.reduce((tree, char) => {
        if (!tree.left) {
            tree.left = {
                name: char.name,
                val: char.val,
            };
            return tree;
        }

        if (!tree.right) {
            tree.right = {
                name: char.name,
                val: char.val,
            };
            tree.val = tree.left.val + tree.right.val;
            return tree;
        }

        return {
            val: Math.round(tree.val + char.val),
            left: tree,
            right: char,
        };
    }, {});
};

const searchTree = (c, node, outputStr = "") => {
    if (!node) {
        return null;
    }

    if (node.name == c) {
        return outputStr;
    }

    return (
        searchTree(c, node.left, outputStr + "0") ||
        searchTree(c, node.right, outputStr + "1")
    );
};

const encode = (string, tree) => {
    for (let i of string) {
        console.log(searchTree(`${i}`, tree));
    }
};

encode("kitten", buildTree("kitten"));
