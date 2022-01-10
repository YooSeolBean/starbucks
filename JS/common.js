const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('.search input');
console.log(searchInputEl);
console.log(searchEl);

searchEl.addEventListener('click',function(){
  //logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
  /* setAttribute('속성의 이름','속성에 들어갈 실제 값')
  =<input placeholder="통합검색>*/
});

searchInputEl.addEventListener('blur', function(){
  searchEl.lassList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
 
});

/* FOOTER 올해의 연도를 자동출력할 수 있도록*/
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();  // 현재 년도의 정보(2022)가 반환