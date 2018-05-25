
        let button1 = true;

        function Reveal()
        {
          document.getElementById("answer").innerHTML = "Able Brown";

          if(button1 === false)
          {
            document.getElementById("answer").style.visibility = "hidden";
            button1 = true;
            document.getElementById("p1").className = "";

          }
          else
          {
            document.getElementById("answer").style.visibility = "visible";
            button1 = false;
            document.getElementById("p1").className = "button1";
          }

        }


        let color = 1;

        function Color()
        {
          if(color === 1)
          {
          document.getElementById("p2").className = "fname";
          color = 2;
          }
          else
          {
          document.getElementById("p2").className = "paragraph";
          color =1;
          }
        }


      function Welcome()
      {
        setTimeout(function(){ alert("Welcome"); }, 3000);
      }

      function Caps()
      {
        var x =document.getElementById("fname");
        x.value = x.value.toUpperCase();
      }
