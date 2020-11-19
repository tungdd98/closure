let inputArr = [
    { name: "b", val: 0.02 },
    { name: "c", val: 0.16 },
    { name: "a", val: 0.02 },
    { name: "d", val: 0.8 },
];

inputArr = inputArr.sort((a, b) => a.val > b.val ? 1 : -1);
let tree = inputArr.reduce((tree, character) => {
    if (!tree.left) {
        tree.left = {
            name: character.name,
            val: character.val,
        };
        return tree;
    }

    if (!tree.right) {
        tree.right = {
            name: character.name,
            val: character.val,
        };
        tree.val = tree.left.val + tree.right.val;
        return tree;
    }

    return {
        val: tree.val + character.val,
        left: tree,
        right: character,
    }
}, {});

function searchTree(c, node, outputStr = '') {
    if (!node) {
        return null;
    }

    if (node.name == c) {
        return outputStr;
    }

    return searchTree(c, node.left, outputStr + '0')
        || searchTree(c, node.right, outputStr + '1')
}

console.log(searchTree('a', tree));
console.log(searchTree('b', tree));
console.log(searchTree('c', tree));
console.log(searchTree('d', tree));
console.log(JSON.stringify(tree));
