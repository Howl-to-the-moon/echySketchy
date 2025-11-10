    //Step 1. Created a 2x2 grid.

//gets a random color. 

        function getRandomColorRGB() {
      const r = Math.floor(Math.random() * 256); // Random red value (0-255)
      const g = Math.floor(Math.random() * 256); // Random green value (0-255)
      const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
      return `rgb(${r},${g},${b})`;
    }


    function getAmount(){

        const amount = prompt("Enter the amount of squares 16-100");

        while (amount < 16 || amount > 100) {
            alert("Try again ding dong");
            return getAmount();
        }

        return amount;
    }


    

    function etchSketch (square) {

        const container = document.querySelector(".container")

    for (let i = 0; i < square ; i++ ){

        const bread = document.createElement("div");

        
            for (let i = 0; i < square ; i++){

                const filling = document.createElement("div");
                filling.classList.add("filling");
                bread.appendChild(filling);

                filling.addEventListener("mouseenter", () => {
        filling.style.backgroundColor = getRandomColorRGB();
    });

            };

        container.appendChild(bread);

    };

};

let resetB = document.querySelector("button");

resetB.addEventListener("click", ()=> {

    etchSketch(getAmount());

});

etchSketch(16);
    