document.addEventListener('DOMContentLoaded',()=>{
  const logo=document.querySelector('.word');
  if(logo){
    logo.setAttribute('role','button');
    logo.setAttribute('aria-label','Terug naar cockpit');
    logo.setAttribute('title','Terug naar cockpit');
    logo.tabIndex=0;
    const goHome=()=>{ if(typeof home==='function') home(); else if(typeof page==='function') page('home'); };
    logo.addEventListener('click',goHome);
    logo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goHome();}});
  }

  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js',{scope:'./'}).catch(err=>console.error('Service worker registration failed:',err));
  }

  if(!document.querySelector('link[data-v331-install]')){
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href='./v331-install.css';
    css.dataset.v331Install='1';
    document.head.appendChild(css);
  }

  if(!document.querySelector('script[data-v331-install]')){
    const js=document.createElement('script');
    js.src='./v331-install.js';
    js.dataset.v331Install='1';
    document.body.appendChild(js);
  }
});