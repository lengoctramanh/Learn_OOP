class Person {
    constructor(name, age) {
        this._name = name;  // Sử dụng dấu gạch dưới để thể hiện thuộc tính riêng tư
        this._age = age;
    }

    // Getter cho thuộc tính name
    get name() {
        return this._name;
    }

    // Setter cho thuộc tính name
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Tên không được để trống.");
        }
    }

    // Getter cho thuộc tính age
    get age() {
        return this._age;
    }

    // Setter cho thuộc tính age
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Tuổi phải lớn hơn 0.");
        }
    }
}


