    //Step 1. Created a 2x2 grid.


        function getRandomColorRGB() {
      const r = Math.floor(Math.random() * 256); // Random red value (0-255)
      const g = Math.floor(Math.random() * 256); // Random green value (0-255)
      const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
      return `rgb(${r},${g},${b})`;
    }

    const container = document.querySelector(".container")

    

    for (let i = 0; i < 16 ; i++ ){

        const bread = document.createElement("div");

        
            for (let i = 0; i < 16 ; i++){

                const filling = document.createElement("div");
                filling.classList.add("filling");
                bread.appendChild(filling);

                filling.addEventListener("mouseenter", () => {
        filling.style.backgroundColor = getRandomColorRGB();
    });

            };

        container.appendChild(bread);

    };

    