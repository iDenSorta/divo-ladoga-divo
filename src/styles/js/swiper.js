// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';



const swiper_popup_ladoga = new Swiper('.swiper-popup#ladoga', {
 modules: [Navigation, Pagination],
 
 pagination: {
   el: '.swiper-pagination#popup_ladoga',
 },

 // If we need pagination
 navigation: {
     nextEl: ".swiper-button-next#popup_ladoga",
     prevEl: ".swiper-button-prev#popup_ladoga",
   },
 
});

const swiper_popup_valaam = new Swiper('.swiper-popup#valaam', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_valaam',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_valaam",
      prevEl: ".swiper-button-prev#popup_valaam",
    },
  
 });

 const swiper_popup_ladval = new Swiper('.swiper-popup#ladval', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_ladval',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_ladval",
      prevEl: ".swiper-button-prev#popup_ladval",
    },
  
 });

 const swiper_popup_individual = new Swiper('.swiper-popup#individual', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_individual',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_individual",
      prevEl: ".swiper-button-prev#popup_individual",
    },
  
 });



 const swiper_popup_expedition = new Swiper('.swiper-popup#expedition', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_expedition',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_expedition",
      prevEl: ".swiper-button-prev#popup_expedition",
    },
  
 });
 
 const swiper_popup_auto = new Swiper('.swiper-popup#auto', {
   modules: [Navigation, Pagination],
   
   pagination: {
     el: '.swiper-pagination#popup_auto',
   },
  
   // If we need pagination
   navigation: {
       nextEl: ".swiper-button-next#popup_auto",
       prevEl: ".swiper-button-prev#popup_auto",
     },
   
  });
 
  const swiper_popup_ruskeala = new Swiper('.swiper-popup#ruskeala', {
   modules: [Navigation, Pagination],
   
   pagination: {
     el: '.swiper-pagination#popup_ruskeala',
   },
  
   // If we need pagination
   navigation: {
       nextEl: ".swiper-button-next#popup_ruskeala",
       prevEl: ".swiper-button-prev#popup_ruskeala",
     },
   
  });
 
  const swiper_popup_transfer = new Swiper('.swiper-popup#transfer', {
   modules: [Navigation, Pagination],
   
   pagination: {
     el: '.swiper-pagination#popup_transfer',
   },
  
   // If we need pagination
   navigation: {
       nextEl: ".swiper-button-next#popup_transfer",
       prevEl: ".swiper-button-prev#popup_transfer",
     },
   
  });
 




 const swiper_popup_house_1 = new Swiper('.swiper-popup#house_1', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_house_1',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_house_1",
      prevEl: ".swiper-button-prev#popup_house_1",
    },
  
 });


 const swiper_popup_house_2 = new Swiper('.swiper-popup#house_2', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_house_2',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_house_2",
      prevEl: ".swiper-button-prev#popup_house_2",
    },
  
 });


 const swiper_popup_house_3 = new Swiper('.swiper-popup#house_3', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_house_3',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_house_3",
      prevEl: ".swiper-button-prev#popup_house_3",
    },
  
 });


 const swiper_popup_house_4 = new Swiper('.swiper-popup#house_4', {
  modules: [Navigation, Pagination],
  
  pagination: {
    el: '.swiper-pagination#popup_house_4',
  },
 
  // If we need pagination
  navigation: {
      nextEl: ".swiper-button-next#popup_house_4",
      prevEl: ".swiper-button-prev#popup_house_4",
    },
  
 });




const swiper_catalog = new Swiper('.swiper-feedback', {
 modules: [Navigation],

 spaceBetween: 16,
 breakpointsBase: 'window',
 




 // If we need pagination
 navigation: {
     nextEl: ".swiper-button-next#feedback",
     prevEl: ".swiper-button-prev#feedback",
   },
 


 breakpoints: {
   100:{
     slidesPerView: 1,
     
   },

   430:{
     slidesPerView: 1,
     spaceBetween: 6,

   },
   
   430:{
     slidesPerView: 1,
     
   },

   1024: {
     
    slidesPerView: 1.5,
    spaceBetween: 16,
    
  },

   1200: {
     
     slidesPerView: 2.5,
     spaceBetween: 16,
     
   },

   
   
   1440: {
     slidesPerView: 2.5,
     spaceBetween: 16,
   },
   
 
   },

});


const swiper = document.querySelector('.swiper-feedback').swiper;

// Now you can use all slider methods like






swiper.on('realIndexChange', function () {

  
  if (document.querySelector('.swiper-button-next.swiper-button-disabled') == null){
  setTimeout( function(){
    document.querySelector('.swiper-arrows-wrapper').classList.remove("overlay-left");
    document.querySelector('.swiper-arrows-wrapper').classList.add("overlay-right"); }, 100);}
    else{
      
  setTimeout( function(){
    document.querySelector('.swiper-arrows-wrapper').classList.remove("overlay-right");
    document.querySelector('.swiper-arrows-wrapper').classList.add("overlay-left"); }, 100);
      
      
    }
  
 });