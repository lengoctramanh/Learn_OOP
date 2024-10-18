// Các chức năng riêng biệt
const canFly = {
    fly() {
        console.log(`${this.name} đang bay!`);
    }
};

const canSwim = {
    swim() {
        console.log(`${this.name} đang bơi!`);
    }
};

const canWalk = {
    walk() {
        console.log(`${this.name} đang đi bộ!`);
    }
};

// Lớp động vật cơ bản
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Sử dụng composition để tạo ra các đối tượng động vật với khả năng khác nhau
class Duck extends Animal {
    constructor(name) {
        super(name);
        Object.assign(this, canFly, canSwim, canWalk);  // Kết hợp các thành phần
    }
}

class Penguin extends Animal {
    constructor(name) {
        super(name);
        Object.assign(this, canSwim, canWalk);  // Kết hợp thành phần đi bộ và bơi
    }
}

// Tạo các đối tượng từ các lớp đã được kết hợp
const donald = new Duck("Donald");
donald.fly();    // Donald đang bay!
donald.swim();   // Donald đang bơi!
donald.walk();   // Donald đang đi bộ!

const pingu = new Penguin("Pingu");
pingu.swim();    // Pingu đang bơi!
pingu.walk();    // Pingu đang đi bộ!
// pingu.fly();  // Sẽ báo lỗi nếu gọi vì Penguin không có khả năng bay
// CHƯA HIỂU LẮM