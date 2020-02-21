//select dom
const menuBtn = document.querySelector('.menu-btn')
console.log('menuBtn1', menuBtn)

const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    navItems.forEach(item => {
      item.classList.add('show')
    })
    showMenu = true;
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(item => {
      item.classList.remove('show')
    })
    showMenu = false;
  }
}


//home 标题打字机
const titleEle = document.querySelector("#home-title")
const title = JSON.parse(titleEle.getAttribute('data-text'))

let index = 0;
let charIndex = 0;
let delta = 500;

let start = null;
let isDeleteing = false;

function typeText(time){
  window.requestAnimationFrame(typeText)
  if(!start) start = time;
  let progress = time - start;
  if(progress>delta){
    let text = title[index]
    if(!isDeleteing){
      titleEle.innerHTML = text.slice(0, ++charIndex)
      delta = 500 - Math.random() * 400;
    }else{
      titleEle.innerHTML = text.slice(0, charIndex--)
    }
    start = time;
    if(charIndex === text.length){
      isDeleteing = true;
      delta = 200;
      start = time + 1200;
    }
    if(charIndex < 0){
      isDeleteing = false;
      start = time + 1200;
      index = ++index % title.length
    }
  }
}

window.requestAnimationFrame(typeText)

// 在事件池中监听点击事件 处理显示
menuBtn.addEventListener('click', toggleMenu)
// image.addEventListener('DOMContentLoaded', function (e) {
//   console.log('load')
// })
//settingBtn.addEventListener('click', openSettingModal)
//closeBtn.addEventListener('click', closeSettingModal)