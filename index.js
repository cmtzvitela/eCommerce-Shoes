console.log('Hi, this is the script');
const bar = document.getElementById('bar');
console.log('🚀 ~ bar:', bar);
const close = document.getElementById('close');
console.log('🚀 ~ close:', close);
const nav = document.getElementById('navbar');
console.log('🚀 ~ nav:', nav);

if (bar) {
  bar.addEventListener('click', () => {
    console.log('I have been clicked!');
    console.log(nav.classList);
    nav.classList.add('active');
    console.log(nav.classList);
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
