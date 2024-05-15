const filter = document.querySelectorAll('.filter button');
const filterItem = document.querySelectorAll('.item .card');

const filterItems = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterItem.forEach(card =>{
        card.classList.add("hide");
        
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
}

filter.forEach(button => button.addEventListener("click",filterItems));