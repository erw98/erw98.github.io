const navSlide = () => {
    const sandwich = document.querySelector('.sandwich');
    const nav = document.querySelector('.nav-links');

    sandwich.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();