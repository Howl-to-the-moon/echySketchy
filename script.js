  

//gets a random color. works, fine, nothing wrong with this

        function getRandomColorRGB() {
      const r = Math.floor(Math.random() * 256); // Random red value (0-255)
      const g = Math.floor(Math.random() * 256); // Random green value (0-255)
      const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
      return `rgb(${r},${g},${b})`;
    }


/*i don't think anything is wrong with this one. 
Basically it just gets the amount from the user, and calls itself again if they fuck up.
the console logs only go off once so this isn't the part thats looping.
*/

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




/* 

This is gonna have to be the part i destroy and bring back from scratch. 

So Glombo is the main div thats in from the start in the html file. This is so we can destroy and recreate the container in it to reset the etchy sketch.

we also have the resetB which is just targetting the reset button up top.



so. we have a function etchSketch that takes the parameter square. square being the amount by amount of squares we want in the board.

the first for loop creates the rows (horizontal) that will hold each etch a sketch square. this is so it makes each row so its a x by x board.

the second for loop creates each square (filling) in each row (horizontal). making it x by x rows.

maybe this is where i do the 960px / squares to make them propotional to the size or whatever???????????????

then we append filling to horizontal each time. and also place the color changing div there



*/

const glombo = document.querySelector(".glombo");
const resetB = document.querySelector("button");

    function etchSketch (square) {

        const container = document.createElement("div")
        container.classList.add("container");
        glombo.appendChild(container);

    for (let i = 0; i < square ; i++ ){

        const horizontal = document.createElement("div");

        
            for (let i = 0; i < square ; i++){

                const filling = document.createElement("div");
                filling.classList.add("filling");
                filling.style.width = (960 / square);
                filling.style.height = (960 / square);

                horizontal.appendChild(filling);

                filling.addEventListener("mouseenter", () => {
        filling.style.backgroundColor = getRandomColorRGB();
    });

            };

        container.appendChild(horizontal);
        

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
    