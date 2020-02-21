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

// 在事件池中监听点击事件 处理显示
menuBtn.addEventListener('click', toggleMenu)
// image.addEventListener('DOMContentLoaded', function (e) {
//   console.log('load')
// })
//settingBtn.addEventListener('click', openSettingModal)
//closeBtn.addEventListener('click', closeSettingModal)