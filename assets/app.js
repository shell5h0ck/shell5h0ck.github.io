const toast = (msg) => {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 1800);
};

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-copy]');
  if(btn){
    const target = document.querySelector(btn.getAttribute('data-copy'));
    navigator.clipboard.writeText(target.innerText.trim()).then(()=>toast('복사했습니다'));
  }
  const img = e.target.closest('[data-zoom]');
  if(img){
    const modal = document.getElementById('imgModal');
    const mimg = document.getElementById('imgModalImg');
    mimg.src = img.getAttribute('data-zoom');
    modal.classList.add('open');
  }
  if(e.target.id === 'imgModal' || e.target.id === 'imgModalImg'){
    document.getElementById('imgModal').classList.remove('open');
  }
});

const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
  })
},{threshold:.12});
document.querySelectorAll('.fade').forEach(el=>io.observe(el));