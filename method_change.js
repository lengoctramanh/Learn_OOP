class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    // Phương thức cộng
    add(number) {
        this.value += number;
        return this;  // Trả về đối tượng Calculator để tiếp tục chaining
    }

    // Phương thức trừ
    subtract(number) {
        this.value -= number;
        return this;  // Trả về đối tượng Calculator để tiếp tục chaining
    }

    // Phương thức nhân
    multiply(number) {
        this.value *= number;
        return this;  // Trả về đối tượng Calculator để tiếp tục chaining
    }

    // Phương thức chia
    divide(number) {
        if (number !== 0) {
            this.value /= number;
        } else {
            console.log("Không thể chia cho 0!");
        }
        return this;  // Trả về đối tượng Calculator để tiếp tục chaining
    }

    // Phương thức để in giá trị hiện tại
    getResult() {
        console.log(`Kết quả hiện tại: ${this.value}`);
        return this;  // Trả về đối tượng Calculator để tiếp tục chaining
    }
}

// Sử dụng method chaining
const calc = new Calculator();
calc.add(10)       // Thêm 10
    .subtract(2)   // Trừ 2
    .multiply(3)   // Nhân với 3
    .divide(4)     // Chia cho 4
    .getResult();  // In ra kết quả: Kết quả hiện tại: 6
