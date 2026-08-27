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

  const loadCss=(href,key)=>{
    if(document.querySelector(`link[data-${key}]`))return;
    const css=document.createElement('link');css.rel='stylesheet';css.href=href;css.setAttribute(`data-${key}`,'1');document.head.appendChild(css);
  };
  const loadJs=(src,key)=>{
    if(document.querySelector(`script[data-${key}]`))return;
    const js=document.createElement('script');js.src=src;js.setAttribute(`data-${key}`,'1');document.body.appendChild(js);
  };

  loadCss('./v331-install.css','v331-install');
  loadJs('./v331-install.js','v331-install');
  loadCss('./v34-hub.css','v34-hub');
  loadJs('./v34-hub.js','v34-hub');
});