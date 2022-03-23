"use strict"

document.addEventListener('DOMContentLoaded', function() {
  // изменение кнопки открывания меню и появление меню
  function menuOpen() {
    let menuBtn = document.querySelector('#menu-btn');
    let nav = document.querySelector('#nav');
    let body = document.querySelector('#body');
    menuBtn.onclick = function() {
      menuBtn.classList.toggle('menu-btn_active');
      nav.classList.toggle('nav_active');
      body.classList.toggle('body_hidden');
    }
    let menuLinks = document.querySelectorAll('#nav a');
    menuLinks.forEach(function (menulink){
      menulink.onclick = function () {
        nav.classList.remove('nav_active');
        menuBtn.classList.remove('menu-btn_active');
        body.classList.remove('body_hidden');
      }
    })
  }
  menuOpen();




  // Появление кнопки при скроле ввех и исчезновение при скроле вниз
  function menuBtnShow() {
    let screen = window.pageYOffset;
    document.getElementById("menu-btn").style.top = "10px";

    window.onscroll = function() {
      let screenScrool = window.pageYOffset;
        if (screen < screenScrool) {
          document.getElementById("menu-btn").style.top = "-100px";
        } else {
          document.getElementById("menu-btn").style.top = "10px";
        }
        screen = screenScrool;
      }
  }
  menuBtnShow();



  
  //Отправка формы
  // 1. Перехват отправки формы
  const form= document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let response = await fetch ('sendmail.php', {
      method: 'POST',
      body: formData
    });  
    if (response.ok){
      alert("Сообщение отправлено");
      form.reset();
    }
    else{
      alert("Ошибка");
    }
  }
});


// let error = formValidate(form);
  // Проверка правильности заполнения полей
  // function formValidate(form) {
  //   let error = 0;
  //   let formReq = document.querySelectorAll('._req');
  //   for (let index = 0; index < formReq.length; index++) {
  //     const input = formReq[index];
  //     fotmRemoveError(input);
  //     if (input.classList.contains('_email')) {
  //       // 34:12 https://youtu.be/PqTrhfjLQBI?t=2052
  //     }
  //   }
  // }
  // function formAddError(input) {
  //   input.parentElement.classList.add('_error');
  //   input.classList.add('_error')
  // }
  // function formRemoveError(input) {
  //   input.parentElement.classList.remove('_error');
  //   input.classList.remove('_error')
  // }







  function animationElement() {
    let maxHeight = (window.screen.height / 10) * 9;//Находим 90% от высоты экрана
    let elements = document.querySelectorAll('._animation-element');//Находим нужные элементы
    element = elements.reduce(function(previousValue){
      console.log(element);
      // return previousValue;
      console.log(element);
      let elementPosition = element.offsetTop;//Находим позицию элемента относительно начала сайта
      console.log(elementPosition);
      window.onscroll = function (){//Запускаем функцию в момент скролла
        let windowScroll =  window.scrollY;//Переменная показывет на какую высоту мы спустились
        if (elementPosition < windowScroll) {
          elements.classList.add('_active');
        }
        else{
          document.getElementsByClassName("_animation-element").style.left = "-500px";
        }
      } 
    });
   
    
  }
  animationElement();

