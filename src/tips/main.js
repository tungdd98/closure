// 1. Convert sang boolean dùng operator !!
// chuyển bất kỳ loại data nào thành boolean
// trả về false khi nhận các giá trị 0, "", undefined, null, NaN
function Account(_cash, _address) {
    this.cash = _cash;
    this.hasAccount = !!_cash;
    this.address = _address;
    this.hasAddress = !!_address;
}

const acc01 = new Account(10, null);
// console.log(acc01.cash, acc01.hasAccount, acc01.address, acc01.hasAddress);
const acc02 = new Account(0);
// console.log(acc02.cash, acc02.hasAccount);

// 2. Conditional short
// kết hợp 1 variable và 1 function
// kiểm tra nếu variable return true thì thực hiện func
function Authenticate(_isLogin, cb) {
    this.isLogin = _isLogin;
    this.login = cb;
}
const person01 = new Authenticate(true, () => console.log("Login successful"));
// if (person01.isLogin) {
//     person01.login();
// }
// person01.isLogin && person01.login();

// 3. Detect các property trong 1 object
// kiểm tra xem thuộc tính đang xét có tồn tại trong object hay không
const people = {
    name: "batman",
    age: 12,
    address: {
        city: "Gotham",
    },
};

// "name" in people
//     ? console.log("name có tồn tại")
//     : console.log("name không tồn tại");
// people.hasOwnProperty("age2")
//     ? console.log("Age có tồn tại")
//     : console.log("Age tồn tại");

// 4. Lấy giá trị cuối cùng trong mảng
// slice(begin, end)
// nếu k set giá trị cho end -> tự động lấy giá trị lớn nhất của array
// nếu begin là giá trị âm -> lấy các giá trị cuối cùng trong array

const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.slice(1, 3));
// console.log(numbers.slice(1));
// console.log(numbers.slice(-3));
// console.log(numbers.slice(0, -3));

// 5. Cắt array
// ngoài việc dùng slice, ta có thể set lại length của array
const numbers02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// lấy 5 phần tử đầu tiên
numbers02.length = 5;
console.log(numbers02);
