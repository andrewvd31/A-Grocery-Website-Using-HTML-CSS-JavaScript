let searchBtn = document.querySelector('#search-btn')
let shoppingBtn = document.querySelector('#cart-btn')
let searchForm = document.querySelector('.search-form')
let shoppingCart = document.querySelector('.shopping-cart')
let loginBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form')
let navBar = document.querySelector('.navbar')
let navButton =document.querySelector('#menu-btn')

searchBtn.addEventListener('click',()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    navBar.classList.remove('active')
    loginForm.classList.remove('active')
})

shoppingBtn.addEventListener('click',()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    navBar.classList.remove('active')
    loginForm.classList.remove('active')
})

loginBtn.addEventListener('click',()=>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navBar.classList.remove('active')
})

navButton.addEventListener('click',()=>{
    navBar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
})

window.onscroll = () => {
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navBar.classList.remove('active')
    loginForm.classList.remove('active')
}
