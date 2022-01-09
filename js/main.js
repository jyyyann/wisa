var cardToFlip = document.querySelectorAll(".flip-card-inner");

    for (var card of cardToFlip){
    card.addEventListener("click", toggleToFlip);
    }

function toggleToFlip() {
    this.classList.toggle("flipped");
}

var cardToFlip = document.querySelectorAll(".vision-card-inner");

    for (var card of cardToFlip){
    card.addEventListener("click", toggleToFlip);
    }

function toggleToFlip() {
    this.classList.toggle("flipped");
}