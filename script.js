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
