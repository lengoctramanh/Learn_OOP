// Encapsulation (Đóng gói)
//  * + bảo vệ trạng thái bên trong của đối tượng 
//  * +phép truy cập và sửa đổi các thuộc tính thông qua các phương thức (getter và setter).
//  * +ngăn chặn các thay đổi trực tiếp đến thuộc tính từ bên ngoài, 

class Person {
    // #:Thuộc tính private
    #name
    #age
    //Tạo thuộc tính
    constructor(name, age,gender, phoneNumber){
        // class có thuộc tính này,cho phép truy cập vào phương thức
        // thuộc tính của đối tượng này
        this.#name=name;
         this.#age=age ;
         this.gender=gender;
          this.phoneNumber=phoneNumber;
    }
    // Method lấy gtri cho property name
    getName(){
        return this.#name
    }
   // Method gán gtri cho property name
   setName(newName){
       this.#name=newName
   }
   
   // Method chọt thẳng vào property age
    getAge(){
        return this.#age
    }
   // Method thay đổi property age
   setAge(newAge){
     if(newAge>0){
         this.#age=newAge
     }
     else{
         console.log("Vui long nhap lai")
     }
   }
   
}
//Tạo một đối tượng tên Person
const person_child=new Person("ểgth",32,"male","2454610563")
// B1:chỏ vào gtri xét cứng ban đầu
   console.log(person_child.getName())
// B2:thay đổi tên
   person_child.setName("adrgthh")
// B3:hiển thị lại số liệu đã đc thay đổi
   console.log(person_child.getName())
   
   console.log(person_child.getAge())
   person_child.setAge(2436)
   console.log(person_child.getAge())
   
   person_child.setAge(-5)