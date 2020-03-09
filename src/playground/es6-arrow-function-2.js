const add = (a, b) => {
  console.log(a, b)
  return a + b;
}

console.log(add(3, 5));

const user = {
  name: 'Mayank',
  cities: ['Bangalore', 'Mumbai'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((number) => this.multiplyBy * number)
  }
}

console.log(multiplier.multiply())
console.log(user.printPlacesLived())

