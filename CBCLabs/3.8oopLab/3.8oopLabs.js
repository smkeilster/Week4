/*
Object Oriented Programming
Custom Classes
Abstraction
Inheritance
Polymophism
Encapsulation
*/
// This is the abstract class



class Animals
  {
    constructor(coat, legs)
    {
      this._coat = coat;
      this._legs = legs;
    }

  }
// This is the child class
class Fur extends Animals
{
  constructor(legs, moves)
  {
  super("fur", legs);
  this._moves = moves;
  }

  movement()
  {
    console.log("This furry animal " + this._moves);
  }

}


class Feathers extends Animals
{
  constructor(legs)
  {
  super("feathers", legs);
  }
  movement()
  {
    console.log("They fly.")
  }
}



class Scaled extends Animals
{
  constructor(legs)
  {
  super("scales", legs);
  }
  movement()
  {
    console.log("They swim.")
  }
}

class Fish extends Scaled
{
}
