const body = document.querySelector("body"),
    btn = body.querySelector(".myBtn"),
    links = body.querySelectorAll("a");

const newObject = {
    name : "Boogie",
    sayHello : function() {
      console.log(`Hello, ${newObject.name}!!!!!!!!`);
    }
  }
  
  newObject.sayHello();

  function handleToggle(event) {
      const button = event.target;

      if(button.value === "day") {
          body.style.backgroundColor = "black";
          body.style.color = "white";
          links.forEach(function(element) {
              element.style.color = "powderblue";
          });
          button.innerHTML = "Day Mode";
          button.value = "night";
      } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        links.forEach(function(element) {
            element.style.color = "blue";
        });
        button.innerHTML = "Night Mode";
        button.value = "day";
      }

      console.log("toggled");
  }

  btn.addEventListener("click", handleToggle);