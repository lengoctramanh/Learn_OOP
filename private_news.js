//?Được đánh dấu bằng #, chỉ truy cập được bên trong class.
class BankAccount {
    // Thuộc tính riêng tư (Private field)
    #balance = 0;

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    // Phương thức riêng tư (Private method)
    #validateAmount(amount) {
        return amount > 0;
    }

    // Phương thức công khai để gửi tiền
    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
            console.log(`Đã gửi ${amount} vào tài khoản.`);
        } else {
            console.log('Số tiền không hợp lệ để gửi.');
        }
    }

    // Phương thức công khai để rút tiền
    withdraw(amount) {
        if (this.#validateAmount(amount) && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Đã rút ${amount} từ tài khoản.`);
        } else {
            console.log('Số tiền không hợp lệ để rút hoặc số dư không đủ.');
        }
    }

    // Phương thức công khai để kiểm tra số dư
    getBalance() {
        console.log(`Số dư hiện tại là: ${this.#balance}`);
    }
}

// Tạo đối tượng BankAccount
const myAccount = new BankAccount("Tai Heo", 1000);

// Sử dụng các phương thức công khai
myAccount.deposit(500);     // Đã gửi 500 vào tài khoản.
myAccount.getBalance();      // Số dư hiện tại là: 1500
myAccount.withdraw(300);     // Đã rút 300 từ tài khoản.
myAccount.getBalance();      // Số dư hiện tại là: 1200

// Thử truy cập vào thuộc tính và phương thức riêng tư từ bên ngoài (sẽ gây lỗi)
console.log(myAccount.#balance);       // Lỗi: Private field '#balance' must be declared in an enclosing class
myAccount.#validateAmount(100);        // Lỗi: Private method '#validateAmount' is not accessible outside class

//CHƯA HIỂU LẮM
