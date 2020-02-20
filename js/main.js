//select dom
const menuBtn = document.querySelector('.menu-btn')
console.log('menuBtn', menuBtn)
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const settingBtn = document.querySelector('.settings')
console.log('settingBtn', settingBtn)
const settingModal = document.querySelector('.settings-modal')
const closeBtn = document.querySelector('.modal-close')
console.log('closeBtn', closeBtn)

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

function openSettingModal() {
  settingModal.classList.add('show-modal')
}

function closeSettingModal() {
  settingModal.classList.remove('show-modal')
}

menuBtn.addEventListener('click', toggleMenu)
//settingBtn.addEventListener('click', openSettingModal)
//closeBtn.addEventListener('click', closeSettingModal)