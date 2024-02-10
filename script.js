
const navbar = document.querySelector('.nav-bar');
const footer = document.querySelector('.footer-aburtech')
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
 
    if(scrollY >= 100 ){
      console.log(scrollY)

        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
    if(window.scrollY >= 4084){
        footer.classList.add('active')

    }else{
        footer.classList.remove('active')
    }

    section.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

     
      if(top >= offset && top < offset + height){
        navLinks.forEach(link =>{
            console.log('you clicked me')
            link.classList.remove('active')
            document.querySelector(' header nav  a[href*=' + id +']').classList.add('active');
        })
       
      }

  
    })
   



const nav = document.querySelector('.nav');
const manuBtn = document.querySelector('.menu-icon');

manuBtn.addEventListener('click', ()=>{
  nav.classList.toggle("active")
})
}