function funClick() {
    var x = document.querySelector(".sidebar");
    var y=document.querySelectorAll(".sidebar ul span");
    var z= document.querySelector(".sidebar ul");

        if (x.style.width === "200px") {
            x.style.width = "70px";
            z.style.paddingLeft= "1rem";
            y.forEach(element => {
                element.style.display="none";
            })
        } else {
            x.style.width = "200px";
            z.style.paddingLeft= "2rem";
            y.forEach(element => {
                element.style.display="inline";
            })
        }
}
