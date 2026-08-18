document.addEventListener('DOMContentLoaded',()=>{
  const logo=document.querySelector('.word');
  if(!logo)return;
  logo.setAttribute('role','button');
  logo.setAttribute('aria-label','Terug naar cockpit');
  logo.setAttribute('title','Terug naar cockpit');
  logo.tabIndex=0;
  const goHome=()=>{ if(typeof home==='function') home(); else if(typeof page==='function') page('home'); };
  logo.addEventListener('click',goHome);
  logo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goHome();}});
});