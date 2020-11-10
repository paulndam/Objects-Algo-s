// function that reprsents a vector in two dimensional space, takes x and y params.
//Give the vector prototype two methods, addition and subtraction that will take another vector as a params and returns a new vector that has the sum or difference of the two vectors(this and the params) x and y values
//Add a getter property lenght to the prototype that cwill compute the length of the vector. That is, the distance of the point (x,y) from the origin (0,0)

class Vector {
  //giving my constructor the the params it needs
  constructor (x, y) {
    (this.x = x), (this.y = y);
  }

  // implementing method number one

  addition (newVector) {
    return new Vector (this.x + newVector.x, this.y + newVector.y);
  }
  // implementing method number two

  subtraction (newVector) {
    return new Vector (this.x - newVector.x, this.y - newVector.y);
  }
  //computing the distance
  get length () {
    return Math.sqrt (this.x * this.x + this.y * this.y);
  }
}

console.log (new Vector (10, 20).addition (new Vector (20, 30)));
console.log (new Vector (10, 20).subtraction (new Vector (20, 30)));
console.log (new Vector (14, 18).length);
