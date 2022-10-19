window.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    };
  };

  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active');
  });

  const burger = document.querySelector('.header-burger');
  header-burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('header-burger__active');
  });

  const searchOpen = document.querySelector('.header__btn');
  const headerSearchSearch =  document.querySelector('.header-search__search');
  const headerSearchClose = document.querySelector('.header-search__close');
  searchOpen.addEventListener('click', () => {
    headerSearchSearch.classList.add('search--open');
  });
  headerSearchClose.addEventListener('click', () => {
    headerSearchSearch.classList.remove('search--open');
  });

  const container = document.querySelector(".hero-container");
  const swiper = new Swiper('.hero__swiper', {
    speed: 300,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
    }
  });

  $('.how__item-button').click(function() {
    $('.how__item-button').removeClass('hb-active');
    $(this).addClass('hb-active')
  });

  document.querySelectorAll('.how-tabs-nav__btn').forEach(function(howTabsNavBtn) {
    howTabsNavBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-tab-content').forEach(function(howTabContent) {
        howTabContent.classList.remove('how-tab-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how-tab-content-active')
    });
  });

  $ (".accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });

});

