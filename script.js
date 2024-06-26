function skillMenu(a) {
  let menus = document.querySelectorAll('.skillsMenu li');
  for (i = 0; i < menus.length; i++) {
    menus[i].classList.remove('active');
  }
  menus[a].classList.add('active');

  let list = document.querySelectorAll('.skillsList');
  for (i = 0; i < list.length; i++) {
    list[i].classList.remove('target');
  }
  list[a].classList.add('target');
}

function goToScroll(name) {
  var location = document.querySelector('.' + name).offsetTop;
  window.scrollTo({ top: location - 10, behavior: 'smooth' });
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', function () {
  if (window.scrollY >= 500) {
    document.querySelector('.toTop').style.display = 'block';
  } else {
    document.querySelector('.toTop').style.display = 'none';
  }
});

window.addEventListener('scroll', function () {
  let navi = document.querySelector('.navi');
  if (window.scrollY > 0) {
    navi.classList.add('scroll');
  } else {
    navi.classList.remove('scroll');
  }
});
