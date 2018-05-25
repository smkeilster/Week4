/**
*
* Grid
*
*/
let aboutOpen = false;

  function Reveal()
  {alert("it worked");
    document.getElementById("about");

    if(aboutOpen === false)
    {
      document.getElementById("about").style.visibility = "hidden";
      aboutOpen = true;
  
    }
    else
    {
      document.getElementById("answer").style.visibility = "visible";
      AboutOpen = false;
     
    }
  }

  


