document.addEventListener('DOMContentLoaded',()=>{
  const splash=document.getElementById('splash');
  if(splash){
    splash.innerHTML='<img class="manthos-splash-art" src="assets/navigation/Splash%20screen.png?v=3414" alt="Manthos Habit Tracker">';
    splash.style.cssText+=';background:#090909;z-index:9999;';
    const style=document.createElement('style');
    style.textContent='.manthos-splash-art{width:min(82vw,430px);max-height:76vh;object-fit:contain;display:block}';
    document.head.appendChild(style);
    setTimeout(()=>{splash.classList.add('hide');setTimeout(()=>splash.remove(),400)},2500);
  }

  const logo=document.querySelector('.word');
  if(logo){
    logo.setAttribute('role','button');logo.setAttribute('aria-label','Terug naar cockpit');logo.setAttribute('title','Terug naar cockpit');logo.tabIndex=0;
    const goHome=()=>{if(typeof home==='function')home();else if(typeof page==='function')page('home')};
    logo.addEventListener('click',goHome);logo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goHome()}});
  }

  const removeTestControls=()=>{
    document.querySelectorAll('button,a,[role="button"]').forEach(el=>{
      const text=(el.textContent||'').trim().toUpperCase();
      if(text.includes('RESET TEST')||text==='TEST RESET') el.remove();
    });
  };
  removeTestControls();
  new MutationObserver(removeTestControls).observe(document.body,{childList:true,subtree:true});

  if('serviceWorker' in navigator)navigator.serviceWorker.register('./service-worker.js',{scope:'./'}).catch(err=>console.error('Service worker registration failed:',err));
  const loadCss=(href,key)=>{if(document.querySelector(`link[data-${key}]`))return;const x=document.createElement('link');x.rel='stylesheet';x.href=href;x.setAttribute(`data-${key}`,'1');document.head.appendChild(x)};
  const loadJs=(src,key)=>{if(document.querySelector(`script[data-${key}]`))return;const x=document.createElement('script');x.src=src;x.setAttribute(`data-${key}`,'1');document.body.appendChild(x)};
  loadCss('./v331-install.css','v331-install');loadJs('./v331-install.js','v331-install');
  loadCss('./v34-paths.css','v34-paths');loadJs('./v34-paths.js','v34-paths');
  loadCss('./v34-core.css','v34-core');loadJs('./v34-core.js','v34-core');
  setTimeout(()=>loadJs('./v34-fixes.js?v=3415','v34-fixes'),80);
});