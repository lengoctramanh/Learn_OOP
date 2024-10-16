//?Tính trừu tượng:ẩn đi các chi tiết phức tạp bên trong và chỉ hiển thị các chức năng cần thiết ra bên ngoài
class Car{
    //Các private properties
    #speed
    #fuel

    // Create constructor
    constructor(){
        this.#speed=0
        this.#fuel=100
    }

    //method public:LÁI XE
    drive(){
        if(this.#fuel>0){
            this.#speed=60
            this.#consumeFuel()
            console.log("Xe đi với tốc độ 60km/h và tiêu thụ xăng")
        }
        else{
            console.log("Không đủ xăng")
        }
    }
       //method public:ĐỔ XĂNG
    refuel(amout){
if(amout>0){
    this.#fuel+=amout
    console.log(`Da che them ${amout}`)
}
else {
    console.log("Đủ xăng ko cần chế nữa")
}
    }
     //method public:TIÊU THỤ XĂNG
    #consumeFuel(){
        this.#fuel-=10
        console.log(`Tieu thu 10 l,còn lại ${this.#fuel}`)
    }


}


// Create another object
const myCar=new Car()
//Use public method
myCar.drive()
myCar.refuel(50)
myCar.drive()

// CHƯA HIỂU LẮM