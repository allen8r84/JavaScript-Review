//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function(name, age, height, gender) {
    var returnObject = {};
    returnObject.name = name;
    returnObject.age = age;
    returnObject.height = height;
    returnObject.gender = gender;
    return returnObject;
}

//Create a animal array and a person array.

  //code here
var animal = [];
var personArr = [];

//Create two instances of Animal and push those into your animal array

  //code here
var animal1 = new Animal("Dog", "charles", 4, "black", ["bacon", "dead cat"]);
var animal2 = new Animal("snake", "draco", 0, "green", ["dead rat", "raw egg"]);
animal.push(animal1, animal2);

//Create two instances of person and push those into your person array.

  //code here
var person1 = person();
var person2 = person();
personArr.push(person1, person2);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
    var tempArr = this.food;
    var rand = tempArr[Math.floor(Math.random()*tempArr.length)];
    alert(this.name + ' ate ' + rand);
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
//no, it was not created with "new" so no prototype functionality


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  it creates a new version of that object that can be manipulated if needed with prototype
  2) What's a good way to describe the keyword 'this'
  the variable to the left of the "." of the key
  3) Can a normal function which creates an object and then returns that object use the prototype?
  no
  4) What happens if you forget to use 'new' when calling a constructor?
  it does not create the object.
*/