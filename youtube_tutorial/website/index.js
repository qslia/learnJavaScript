function Car(make, model, year, color) {
    this.make = "Ford";
    this.model = "Mustang";
    this.year = 2020;
    this.color = "Red";
    this.speed = 0;
    this.accelerate = function() {
        this.speed += 10;
        console.log("The car is accelerating to " + this.speed + " mph");
    }
    this.brake = function() {
        this.speed -= 10;
        console.log("The car is braking to " + this.speed + " mph");
    }
}

const car1 = new Car("Ford", "Mustang", 2020, "Red");
console.log(car1);
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.speed);
car1.accelerate();
car1.brake();

const car2 = new Car("Chevy", "Camaro", 2021, "Blue");
console.log(car2);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car2.speed);
car2.accelerate();
car2.brake();