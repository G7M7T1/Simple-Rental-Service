let header = document.querySelector("header");
let headeranchor = document.querySelectorAll("header nav ul li a");
console.log(headeranchor);

window.addEventListener("scroll", () => {
    if(window.pageYOffset != 0) {
        header.style.backgroundColor = "rgba(0,0,0,0.8)";
        header.style.color = "white";
        headeranchor.forEach(a => {
            a.style.color = "white";
        })
    } else {
        header.style = "";
        headeranchor.forEach(a => {
            a.style.color = "#09777D";
        })
    }
})