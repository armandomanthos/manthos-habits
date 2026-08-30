document.addEventListener('DOMContentLoaded',()=>{
  const splash=document.getElementById('splash');
  if(splash){
    splash.innerHTML='<div class="manthos-splash-mark">M</div><div class="manthos-splash-brand">MANTHOS</div><div class="manthos-splash-line"></div><div class="manthos-splash-title">30 DAGEN. ÉÉN FOCUS.</div><div class="manthos-splash-tag">Doe wat je met jezelf hebt afgesproken.</div>';
    splash.style.cssText+=';background:#090909;z-index:9999;';
    const style=document.createElement('style');
    style.textContent='.manthos-splash-mark{width:72px;height:72px;border:2px solid #f5c400;border-radius:50%;display:grid;place-items:center;color:#f5c400;font:900 34px Arial,sans-serif;letter-spacing:-.06em}.manthos-splash-brand{margin-top:18px;color:#f6f5f1;font:900 24px Arial,sans-serif;letter-spacing:.18em}.manthos-splash-line{width:34px;height:2px;background:#f5c400;margin:15px 0}.manthos-splash-title{color:#f6f5f1;font:900 13px Arial,sans-serif;letter-spacing:.12em}.manthos-splash-tag{margin-top:8px;color:#8d8d8d;font:500 11px Arial,sans-serif;letter-spacing:.02em}';
    document.head.appendChild(style);
    setTimeout(()=>{splash.classList.add('hide');setTimeout(()=>splash.remove(),400)},2500);
  }

  const logo=document.querySelector('.word');
  if(logo){
    logo.setAttribute('role','button');logo.setAttribute('aria-label','Terug naar cockpit');logo.setAttribute('title','Terug naar cockpit');logo.tabIndex=0;
    const goHome=()=>{if(typeof home==='function')home();else if(typeof page==='function')page('home')};
    logo.addEventListener('click',goHome);logo.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goHome()}});
  }

  // Production guard: test/reset controls must never be visible to members.
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
  setTimeout(()=>loadJs('./v34-fixes.js','v34-fixes'),80);
});