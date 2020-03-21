var navigation = document.querySelectorAll('body > header > nav > a');
var verTel = document.getElementsByClassName('vertel');
var horTel = document.getElementsByClassName('hortel');
var buttons = document.querySelectorAll('#Portfolio > div > div > button');
var imgs =  Array.prototype.slice.call(document.getElementsByClassName('colum'));
var colums = document.getElementsByClassName('colum');
var send = document.getElementById('submit');
var close = document.getElementById('close');
var msgbox = document.getElementsByClassName('message-block')[0];
var Y = window.scrollY;
var sect = document.querySelectorAll('main > section');

// navigation

document.addEventListener('scroll', () => {
  var Y = window.scrollY;
  for(var i = 0; i < sect.length; i++) {
    if((sect[i].offsetTop - 95) <= Y && ((sect[i].offsetTop - 95) + sect[i].offsetHeight) > Y) {
      for(var j = 0; j < navigation.length; j++) {
        navigation[j].classList.remove('active_nav');
        if(sect[i].getAttribute('id') === navigation[j].getAttribute('href').substring(1)) {
          navigation[j].classList.add('active_nav');
        }
      }
    }
  }
})

// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    if(slideIndex === 1) {
      document.getElementsByClassName('slider')[0].style.background = '#f06c64'
      document.getElementsByClassName('slider')[0].style.borderBottom = '#ea676b 6px solid'
    }
    else {
      document.getElementsByClassName('slider')[0].style.background = '#648BF0'
      document.getElementsByClassName('slider')[0].style.borderBottom = '#8BAAF8 6px solid'
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.getElementsByClassName('right')[0].addEventListener('click', () => {
  plusSlide();
});
document.getElementsByClassName('left')[0].addEventListener('click', () => {
  minusSlide();
});

// phones

var vt = 0;
var ht = 0;

verTel[0].addEventListener('click', function() {
  if(vt === 0) {
    document.getElementsByClassName('black1')[0].style.display = 'block';
    vt++;
  }
  else {
    document.getElementsByClassName('black1')[0].style.display = 'none';
    vt--;
  }
});

horTel[0].addEventListener('click', function() {
  if(ht === 0) {
    document.getElementsByClassName('black2')[0].style.display = 'block';
    ht++;
  }
  else {
    document.getElementsByClassName('black2')[0].style.display = 'none';
    ht--;
  }
});

// mix in Portfolio

var elem = document.createElement('div');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active2');
    }
    this.classList.add('active2');
    for(let i = 0; i < imgs.length; i++) {
      let rand = Math.floor(Math.random() * imgs.length);
      imgs[i].parentNode.replaceChild(elem , imgs[i]);
      i != rand && imgs[rand].parentNode.replaceChild(imgs[i], imgs[rand]);
      elem.parentNode.replaceChild(imgs[rand], elem);
    }
  })
}

// block in Portfolio

for (let i = 0; i < colums.length; i++) {
  colums[i].addEventListener('click', function() {
    for (let i = 0; i < colums.length; i++) {
      colums[i].style.outline = 'none';
    }
    this.style.outline = '5px #F06C64 solid';
  })
}

// form

send.addEventListener('click', function() {
  let subject = document.getElementById('subject').value.toString();
  let describe = document.getElementById('describe').value.toString();
  if(subject === '' || subject === ' ')
    subject = 'Без темы';
  if(describe === '' || describe === ' ')
    describe = 'Без описания';
  document.getElementById('subject2').innerText = subject;
  document.getElementById('describe2').innerText = describe;
  if(document.getElementById('form').checkValidity()) {
    msgbox.style.display = 'block';
  }
})

close.addEventListener('click', function() {
  msgbox.style.display = 'none';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('describe').value = '';
})