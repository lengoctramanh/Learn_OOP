//Lớp con có thể lấy lại method của lớp cha để dùng vào mục đích khác 
//! Tính đa hình:Các lớp con có thể ghi đè phương thức của 
//!lớp cha và có cách hành xử riêng, nhưng lớp cha vẫn không bị ảnh hưởng.
// Lớp cha
class Animal{
    makeSound(){
        console.log("haha")
    }
}
//Lớp con
class Dog extends Animal{
    makeSound(){
        console.log("gâu gâu")
    }
}
// Lớp con
class Cat extends Animal{
    makeSound(){
        console.log("meo meo")
    }
}
// Tạo đối tượng từ lớp con
const myDog=new Dog()
const myCat=new Cat()
// Gọi method đc khai báo từ các lớp con trên
myDog.makeSound()
myCat.makeSound()