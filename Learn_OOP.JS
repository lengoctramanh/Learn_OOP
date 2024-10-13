//*Lập trình hướng đối tượng (OOP):trong mỗi đối tượng
//* có một thuộc tính(property) và phương thức(method)
// VD: Đối tượng Human, Animals(chó,mèo..), Car(ford,porche)
/** Mỗi đối tượng có Properties(thuộc tính) và Method(phương thức) 
 * CAR
 * - Thuộc tính (Properties)
 * Màu sắc: "Đỏ"
 * Thương hiệu: "Toyota"
 * Năm sản xuất: 2020
- Hành vi (Methods):thực hiện hành động
Khởi động: "Xe đang khởi động"
Dừng lại: "Xe đã dừng lại"
Tăng tốc: "Xe đang tăng tốc"

* PEOPLE
-Thuộc tính (Properties):
Tên: "Nguyễn Văn A"
Tuổi: 20
Chuyên ngành: "Công nghệ thông tin"

-Hành vi (Methods):
Học tập: "Nguyễn Văn A đang học tập"
Thi: "Nguyễn Văn A đang thi"
*/
// FUNCTION VIẾT Ở ĐÂU CX ĐC
// METHOD PHẢI VIẾT BÊN TRONG ĐỐI TƯỢNG (object)CỦA NÓ


// Tạo ra một class tên là Person
class Person {
    //Tạo thuộc tính
    constructor(name, age,gender, phoneNumber){
        // class có thuộc tính này,cho phép truy cập vào phương thức
        // thuộc tính của đối tượng này
        this.name=name;
         this.age=age ;
         this.gender=gender;
          this.phoneNumber=phoneNumber;
    }
    
    // Tạo phương thức để hiển thị thông tin
    displayInfo(){
        console.log(`Name:${ this.name}, Age:${ this.age }`)
        console.log(`Gender:${ this.gender}, phoneNumber:${ this.phoneNumber }`)
    }
    // Tạo từng thuộc tính
    updateAge(newAge){
        this.age=newAge
    }
   
   showChange(){
       console.log("Da thay doi")
   }
}
 // Tạo một đối tượng con trong class Person
    // Từ khóa new:tạo ra một đối tượng mới,là cái khuôn mới
    const person1=new Person("ádgdf",30,"fgfgh",245436)
    
    // Gọi phương thức
    person1. displayInfo()
    person1. updateAge(31)
    person1. displayInfo()
    person1.showChange()