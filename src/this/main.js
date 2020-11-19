var obj = {
    bar: function () {
        var x = () => this;
        return x;
    },
};
var fn = obj.bar();
console.log(fn());
