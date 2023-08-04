/**
 * Design Parking System
 */
var ParkingSystem = function(big, medium, small) {
    let map=new Map();
    map.set(1,big);
    map.set(2,medium);
    map.set(3,small);
    this.map=map;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(this.map.get(carType)===0){
        return false;
    }else{
        this.map.set(carType,this.map.get(carType)-1);   
        return true; 
    }
};