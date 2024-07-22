console.log("hi from app03")

class person{

    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender

    }
//function
    walk(){
        console.log("walkin")
    }
    run(){
        console.log("running")
    }
    eat(){
        console.log(this.name +" is eating")
    }
}

class student extends person{
    constructor(name,age,gender,rollno)
    {
        super(name,age,gender)
        this.rollno = rollno
        
    }
    read()
    {
        console.log("reading")
    }
}

let person1 = new person('sow',28,'female')
let person2 = new person('pavan',32,'male')

let s1 = new student('sow',28,'female',37)
s1.read()

console.log(person1.name)
console.log(person2.name)

person1.eat()
person2.run()