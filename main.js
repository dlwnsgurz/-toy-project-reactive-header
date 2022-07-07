const toggleBtn = document.querySelector('.toogle');
const menu = document.querySelector('.menulist');
const icons = document.querySelector('.logolist');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})