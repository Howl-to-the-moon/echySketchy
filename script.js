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

        while (amount < 16 || amount > 100 ) {
            alert("Try again ding dong");

            console.log("while loop in gA")
            return getAmount();
        }

        console.log("get amount")

        return amount;


    }

const glombo = document.querySelector(".glombo");
const resetB = document.querySelector("button");

    function etchSketch (square) {

    const container = document.createElement("div")
    container.classList.add("container");

    for (let i = 0; i < square ; i++ ){

        const horizontal = document.createElement("div");

        
            for (let i = 0; i < square ; i++){

                const filling = document.createElement("div");
                filling.classList.add("filling");
                horizontal.appendChild(filling);

                filling.addEventListener("mouseenter", () => {
        filling.style.backgroundColor = getRandomColorRGB();
    });

            };

        container.appendChild(horizontal);
        glombo.appendChild(container);

    };

    
 

    resetB.addEventListener("mouseup", ()=> {

//FIX THIS AROUND TO MAKE REMOVING AND RESETING WORK
//this is still hella broken and keeps doubling or sonmething but it works for now so yay. fuck me


    glombo.removeChild(container);

        console.log("a")

    etchSketch(getAmount());

    console.log("B");

});
    

};





etchSketch(16);
    