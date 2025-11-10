    //Step 1. Created a 2x2 grid.


    const container = document.querySelector(".container")

    

    for (let i = 0; i < 16 ; i++ ){

        const bread = document.createElement("div");
        bread.classList.add("bread");
            for (let i = 0; i < 16 ; i++){

                const filling = document.createElement("div");
                filling.classList.add("filling");
                bread.appendChild(filling);

            };

        container.appendChild(bread);

    };