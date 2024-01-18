var a = {
    height: 5,
    width: 6,
    gender: "male"
};
// here we didn't added gender property it will not give error
var b = {
    height: 5,
    width: 6
};
var main = /** @class */ (function () {
    function main(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    return main;
}());
var obj = new main(5, 6);
console.log(obj.height);
// console.log(obj.weight);  // it will give error as weight is private
