// Change navbar color when scroll

window.addEventListener('scroll' , () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// Show & Hidden Ques answer

const Ques = document.querySelectorAll(".ques");

Ques.forEach(ques => {
    ques.addEventListener('click', () => {
        ques.classList.toggle('open');
    });

    // change icon 

    const icon = ques.querySelector('.ques_icon i');
    if (icon.className === 'material-symbols-outlined'){
        icon.className = "material-symbols-outlined remove"   // after change this icon becouse dont work
    }else {
        icon.className = "material-symbols-outlined"
    }

}); 



// Show and Hidden Navbar


const menu = document.querySelector(".nav_menu");
const open_btn = document.querySelector("#open-menu-btn");
const close_btn = document.querySelector("#close-menu-btn");


open_btn.addEventListener('click', () => {
    menu.style.display ="flex";
})

open_btn.addEventListener('click', () => {
    menu.style.display = "flex";
    open_btn.style.display = "none";
    close_btn.style.display = "inline-block";
});


const closeNav = () => {

    menu.style.display = "none";
    open_btn.style.display = "inline-block";
    close_btn.style.display = "none";
}

close_btn.addEventListener('click', closeNav)



// Scroll Btn

let ScrollBtn = document.getElementById('btn-scroll');

window.onscroll = function() {
    if(scrollY >= 400) {
        ScrollBtn.style.display = 'block';
    }else {
        ScrollBtn.style.display = 'none';
    }
}

ScrollBtn.onclick = function() {
    scroll({
        top:0,
        left:0,
        behavior: "smooth"
    })

}




