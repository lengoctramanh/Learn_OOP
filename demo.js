//!Static Methods and Properties ( Phương thức tĩnh và thuộc tính tĩnh )
class Counter {
    // Thuộc tính tĩnh để đếm số lần sử dụng
    static count = 0;

    // Phương thức tĩnh để tăng giá trị đếm
    static increment() {
        Counter.count++; // Tăng giá trị thuộc tính tĩnh count
    }

    // Phương thức tĩnh để in giá trị hiện tại của count
    static getCount() {
        console.log(`Giá trị hiện tại của count là: ${Counter.count}`);
    }
}

// Gọi các phương thức tĩnh mà không cần tạo đối tượng

Counter.increment();  // Tăng giá trị của count
Counter.getCount();   // In ra: Giá trị hiện tại của count là: 1

Counter.increment();  // Tăng giá trị của count
Counter.getCount();   // In ra: Giá trị hiện tại của count là: 2

Counter.increment();  // Tăng giá trị của count
Counter.getCount();   // In ra: Giá trị hiện tại của count là: 3
