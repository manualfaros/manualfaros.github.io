document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});
document.querySelectorAll('img[data-fallback]').forEach(img=>{
  img.addEventListener('error', ()=>{
    img.src = img.dataset.fallback;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();