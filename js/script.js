new Swiper  ('.swiper', {
pagination:{
el:'.swiper-pagination-logo',
clickable:true
},
slidesPerView: "auto",
spaceBetween: 20,
});
new Swiper  ('.swiper-service', {
pagination:{
el:'.swiper-pagination-service',
clickable:true
},
slidesPerView: "auto",
spaceBetween: 20,
});
new Swiper  ('.swiper-price', {
pagination:{
el:'.swiper-pagination-price',
clickable:true
},
slidesPerView: "auto",
spaceBetween: 20,
    });


var button = document.querySelector('.brands__button');
var height = document.querySelector('.brands')
button.addEventListener('click', function () {
    if (document.querySelector(".brands__button").classList.contains("brands__button_close")){
        button.classList.remove('brands__button_close');
        button.classList.add('brands__button_open');
        height.classList.add('brands__height');
        document.getElementById("text").innerHTML = "Скрыть";
    } else {
        button.classList.remove('brands__button_open');
        height.classList.remove('brands__height');
        button.classList.add('brands__button_close');
        document.getElementById("text").innerHTML = "Показать всё";
    }

  });

var button_repair = document.querySelector('.repair__button');
var height_repair = document.querySelector('.repair')
button_repair.addEventListener('click', function () {
     if (document.querySelector(".repair__button").classList.contains("repair__cards-close")){
         button_repair.classList.remove('repair__cards-close');
         button_repair.classList.add('.repair__cards-open');
         height_repair.classList.add('repair__height');
         document.getElementById("repair__text").innerHTML = "Скрыть";
     } else {
         button_repair.classList.remove('.repair__cards-open');
         height_repair.classList.remove('repair__height');
         button_repair.classList.add('repair__cards-close');
         document.getElementById("repair__text").innerHTML = "Показать всё";
     }
 
   });
//меню
    var button_menu_open = document.querySelector('.navigation-panel__button_open');
    var button_menu_close = document.querySelector('.sidebar__button_close');
    var menu = document.querySelector('.body');
    var blur = document.querySelector('.sidebar__blur');
    var animation = document.querySelector('.sidebar');

    
    function meny_open_slow() {
        function meny() {
             animation.classList.add('sidebar_position_right');
             blur.classList.add('sidebar__blur_white')
        };

        menu.classList.remove('sidebar__close');
        animation.classList.add('sidebar_position');
        blur.classList.add('sidebar__blur_transparent');
        setTimeout(meny, 50);
        };
    button_menu_open.addEventListener('click', meny_open_slow );
        

    button_menu_close.addEventListener('click', function () {
        menu.classList.add('sidebar__close');
        animation.classList.remove('sidebar_position');
        animation.classList.remove('sidebar_position_right');
        blur.classList.remove('sidebar__blur_white')
        blur.classList.remove('sidebar__blur_transparent')
        
        });
    blur.addEventListener('click', function () {
         menu.classList.add('sidebar__close');
         animation.classList.remove('sidebar_position');
         animation.classList.remove('sidebar_position_right');
         blur.classList.remove('sidebar__blur_white')
         blur.classList.remove('sidebar__blur_transparent')
        });


//модальное окно обратной связи
    var modal_feedback_button_open1 = document.querySelector('.modal-feedback__button-open1');
    var modal_feedback_button_open2 = document.querySelector('.modal-feedback__button-open2');
    var modal_feedback_button_open3 = document.querySelector('.modal-feedback__button-open3');
    var modal_feedback_button_close = document.querySelector('.modal-feedback__button-close');
    var modal_feedback_blur_close = document.querySelector('.modal-feedback__blur');
    var modal_feedback = document.querySelector('.modal-feedback');

    modal_feedback_button_open1.addEventListener('click', function () {
        modal_feedback.classList.remove('modal-feedback__close')
    });
    modal_feedback_button_open2.addEventListener('click', function () {
        modal_feedback.classList.remove('modal-feedback__close')
    });
    modal_feedback_button_open3.addEventListener('click', function () {
        modal_feedback.classList.remove('modal-feedback__close')
    });
    modal_feedback_button_close.addEventListener('click', function() {
        modal_feedback.classList.add('modal-feedback__close')
    });
    modal_feedback_blur_close.addEventListener('click', function() {
        modal_feedback.classList.add('modal-feedback__close')
    });

//обратный звонок

var modal_callback_button_open1 = document.querySelector('.modal-callback__button-open1');
var modal_callback_button_open2 = document.querySelector('.modal-callback__button-open2');
var modal_callback_button_close = document.querySelector('.modal-callback__button-close');
var modal_callback_blur_close = document.querySelector('.modal-callback__blur');
var modal_callback = document.querySelector('.modal-callback');

modal_callback_button_open1.addEventListener('click', function () {
    modal_callback.classList.remove('modal-callback__close')
});
modal_callback_button_open2.addEventListener('click', function () {
    modal_callback.classList.remove('modal-callback__close')
});
modal_callback_button_close.addEventListener('click', function() {
    modal_callback.classList.add('modal-callback__close')
});
modal_callback_blur_close.addEventListener('click', function() {
    modal_callback.classList.add('modal-callback__close')
});











