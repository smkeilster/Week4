
let array = [[1,2,[3]],4];
let result = [];



makeAthing = (a) =>
{

  for(let i=0; i<a.length; i++)
  {
    if(Array.isArray(a[i]))
    {
      makeAthing(a[i]);
    }
    else
    {
      result.push(a[i]);
    }
  }
}

makeAthing(array);
console.log(result);
