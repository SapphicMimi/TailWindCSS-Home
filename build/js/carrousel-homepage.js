let botones_anime = document.querySelector(".buttons-of-carrousel");
let imgs_anime = document.querySelector(".carrousel-of-images");
let titus_anime = document.querySelector(".carrousel-of-titles");
let descs_anime = document.querySelector(".carrousel-of-descriptions");
let caja_anime = document.querySelector(".carrousel-of-starting");
let cats_anime = document.querySelector(".carrousel-of-belonging");

let botonp_anime;
let img_anime;
let titu_anime;
let desc_anime;
let boton_caja_anime;
let cat_anime;

for(let boton of botones_anime.querySelectorAll("button")) {
    boton.addEventListener("mouseenter", (evento) => {
        let cont = 0;
        let bool = true;

        for(let buttons of botones_anime.querySelectorAll("button")) {
            if(bool) {
                cont++;
            }
            
            if(buttons == evento.target) {
                bool = false;
            }
        }

        for(let boton of botones_anime.getElementsByClassName("bg-pink_hp")) {
            botonp_anime = boton;
        }
        
        for(let img of imgs_anime.getElementsByClassName("block")) {
            img_anime = img;
        }
        
        for(let titu of titus_anime.getElementsByClassName("block")) {
            titu_anime = titu;
        }

        for(let desc of descs_anime.getElementsByClassName("block")) {
            desc_anime = desc;
        }

        for(let boton_caja of caja_anime.getElementsByClassName("block")) {
            boton_caja_anime = boton_caja;
        }

        for(let cat of cats_anime.getElementsByClassName("block")) {
            cat_anime = cat;
        }
        
        if(!(evento.target == botonp_anime)) {
            evento.target.classList.remove("bg-grey_3");
            evento.target.classList.remove("w-[24px]");
            evento.target.classList.add("bg-pink_hp");
            evento.target.classList.add("w-[66px]");

            botonp_anime.classList.remove("bg-pink_hp");
            botonp_anime.classList.remove("w-[66px]");
            botonp_anime.classList.add("bg-grey_3");
            botonp_anime.classList.add("w-[24px]");

            imgs_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.add("block");
            imgs_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.remove("hidden");

            img_anime.classList.add("hidden");
            img_anime.classList.remove("block");

            titus_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.add("block");
            titus_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.remove("hidden");

            titu_anime.classList.add("hidden");
            titu_anime.classList.remove("block");

            descs_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.add("block");
            descs_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.remove("hidden");

            desc_anime.classList.add("hidden");
            desc_anime.classList.remove("block");

            caja_anime.querySelector(".hidden:nth-child(" + (cont + 1) + ")").classList.add("block");
            caja_anime.querySelector(".hidden:nth-child(" + (cont + 1) + ")").classList.add("pt-[3%]");
            caja_anime.querySelector(".hidden:nth-child(" + (cont + 1) + ")").classList.add("pb-[3%]");
            caja_anime.querySelector(".hidden:nth-child(" + (cont + 1) + ")").classList.remove("hidden");

            boton_caja_anime.classList.add("hidden");
            boton_caja_anime.classList.remove("block");
            boton_caja_anime.classList.remove("pt-[3%]");
            boton_caja_anime.classList.remove("pb-[3%]");

            cats_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.add("block");
            cats_anime.querySelector(".hidden:nth-child(" + cont + ")").classList.remove("hidden");

            cat_anime.classList.add("hidden");
            cat_anime.classList.remove("block");
            
        }

    })
}