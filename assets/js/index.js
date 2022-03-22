const links = document.querySelectorAll(".description-list-menu");
links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"center"})
    })
})