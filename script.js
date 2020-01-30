
const choices = document.getElementById("filterChoice");
const label = document.getElementById("label");


function hideDiv() {
    if (choices.style.display === "none") {
        choices.style.display = "block";
      } else {
        choices.style.display = "none";
    };

}
label.addEventListener("click", hideDiv);
