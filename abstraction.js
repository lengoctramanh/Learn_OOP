//?Tính trừu tượng:ẩn đi các chi tiết phức tạp bên trong và chỉ hiển thị các chức năng cần thiết ra bên ngoài
class Car {
    // Các thuộc tính private
    #speed;
    #fuel;

    // Tạo constructor
    constructor() {
        this.#speed = 0;
        this.#fuel = 100;
    }

    // Phương thức public: Lái xe
    drive() {
        if (this.#fuel > 0) {
            this.#speed = 60;
            this.#consumeFuel();
            console.log("Xe đang di chuyển với tốc độ 60 km/h");
        } else {
            console.log("Không đủ nhiên liệu để di chuyển.");
        }
    }

    // Phương thức public: Nạp nhiên liệu
    refuel(amount) {
        if (amount > 0) {
            this.#fuel += amount;
            console.log(`Đã nạp thêm ${amount} lít nhiên liệu.`);
        } else {
            console.log("Số lượng nhiên liệu không hợp lệ.");
        }
    }

    // Phương thức private: Tiêu thụ nhiên liệu
    #consumeFuel() {
        this.#fuel -= 10;
        console.log(`Tiêu thụ 10 lít nhiên liệu, còn lại ${this.#fuel} lít.`);
    }
}

// Tạo đối tượng Car
const myCar = new Car();

// Sử dụng phương thức public
myCar.drive(); // Xe đang di chuyển với tốc độ 60 km/h, Tiêu thụ 10 lít nhiên liệu
myCar.refuel(20); // Đã nạp thêm 20 lít nhiên liệu.
myCar.drive(); // Xe đang di chuyển với tốc độ 60 km/h, Tiêu thụ 10 lít nhiên liệu

// Lưu ý: Không thể truy cập trực tiếp vào thuộc tính private
// console.log(myCar.#fuel); // Sẽ báo lỗi

// CHƯA COMMENT, HIỂU BẢN CHẤT,MAI COI