class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name,
    this.age = age
  }

  getGretting() {
    return `Hi, I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} years(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major;
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let desciption = super.getDescription()
     
    if(this.hasMajor()) {
       desciption += `Major is ${this.major}`
    }
    
    return desciption
  }
}


const me = new Student('Mayank Jain', 8, 'Computer Science')
console.log(me.getDescription())

const other = new Student()
console.log(other.getDescription())

