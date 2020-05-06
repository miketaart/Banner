//Fade in price
document.getElementById("fadeIn").className = "run";

//Type writer
document.addEventListener('DOMContentLoaded', () => {

    var yourSlogan = ["Een kind kan de was doen."]; // array with string to type in typewriter
    var interval = 100; // interval between each character in the string

    // shows/types each character of string with in interval in between
    let typeWriter = (slogan, i) => {

        // check if typing of slogan is finished
        if (i < (slogan.length) && typeof slogan[i] === "string") {
            // add next character to the p tag
            document.querySelector("p").innerHTML = slogan.substring(0, i + 1);
            // calls typewriter function again after interval (in ms)
            setTimeout(() => {
                typeWriter(slogan, i + 1)
            }, interval);
        }
    }

    // start animation
    let StartTypeWriter = (i) => {
        // checks if array is not empty
        if (i < yourSlogan[i].length) {
            // If array is not empty and is of type string then call typeWriter function
            typeWriter(yourSlogan[i], 0);
        }
    }


    // call typewriter
    StartTypeWriter(0);
});