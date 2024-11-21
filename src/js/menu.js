export function menu(params) {
  const headerToggle = document.getElementById("headerToggle");
  const haderNav = document.querySelector("header__nav");

  if(headerToggle){
    headerToggle.addEventListener('click', function(){
      haderNav.classList.toggle('show')

      headerToggle.getAttribute('aria-expanded')==='true'
      ?headerToggle.setAttribute('aria-expanded','false')
      :headerToggle.setAttribute('aria-expanded','true')
    })
  }
}