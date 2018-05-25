
// This is the abstract class
class Cycle
{
  constructor(seat,color)
  {
  this._seat = seat;
  this._color = color
  }

  get color()
  { return this._color;}

  set color(newcolor)
  { this.color = newcolor;  }

  get seat()
  {return this._seat;}

}

class Unicycle extends Cycle
{
  constructor(seat,color,wheels)
  {
    if(wheels == 1)
    {
      super(seat, color);
      this._wheels = wheels;
    }
    else
    {
      alert("This is not a unicycle.")
    }

  }

  get wheels()
  {
    return this._wheels;
  }

  set wheels(howmany)
  {
    if(howmany == 1)
    {
      this._wheels = howmany;
    }
    else
    {
      alert("This is not a unicycle.")
    }
  }
}

class Bicycle extends Cycle
{
  constructor(seat,color,wheels)
  {
    if(wheels == 2)
    {
      super(seat, color);
      this._wheels = wheels;
    }
    else
    {
      alert("This is not a bicycle.")
    }

  }

  get wheels()
  {
    return this._wheels;
  }

  set wheels(howmany)
  {
    if(howmany == 2 )
    {
      this._wheels = howmany;
    }
    else
    {
      alert("This is not a bicycle.")
    }
  }
}


build()
