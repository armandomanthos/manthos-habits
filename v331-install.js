(()=>{
  let deferredPrompt=null;
  const isStandalone=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
  const isIOS=()=>/iphone|ipad|ipod/i.test(navigator.userAgent);
  const el=(t,c,h)=>{const x=document.createElement(t);if(c)x.className=c;if(h!==undefined)x.innerHTML=h;return x};

  function removeTrigger(){document.getElementById('installTrigger')?.remove()}
  function ensureTrigger(){
    if(isStandalone()){removeTrigger();return}
    if(document.getElementById('installTrigger'))return;
    const b=el('button','install-trigger','↓ Installeer app');
    b.id='installTrigger';
    b.type='button';
    b.onclick=show;
    document.body.appendChild(b);
  }
  function close(){document.getElementById('installGuide')?.remove()}
  function show(){
    if(isStandalone()||document.getElementById('installGuide'))return;
    const o=el('div','install-overlay');o.id='installGuide';
    const card=el('div','install-card');
    card.innerHTML=`<button class="install-x" aria-label="Sluiten">×</button><div class="install-kicker">MANTHOS HABITS</div><h2>Installeer de app</h2><p class="install-copy">Zet Manthos Habits op je telefoon. Daarna opent hij als zelfstandige app vanaf je beginscherm.</p><div class="install-steps"></div><button class="btn primary install-main">INSTALLEER APP</button><button class="install-later">Later</button>`;
    o.appendChild(card);document.body.appendChild(o);
    card.querySelector('.install-x').onclick=close;
    card.querySelector('.install-later').onclick=close;
    const steps=card.querySelector('.install-steps'),main=card.querySelector('.install-main');
    if(deferredPrompt){
      steps.innerHTML='<b>Android</b><span>Tik hieronder op installeren en bevestig de installatie in je browser.</span>';
      main.onclick=async()=>{deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;close()};
    }else if(isIOS()){
      steps.innerHTML='<b>iPhone / iPad</b><span>1. Open deze pagina in Safari.<br>2. Tik op <strong>Delen</strong>.<br>3. Kies <strong>Zet op beginscherm</strong>.<br>4. Tik op <strong>Voeg toe</strong>.</span>';
      main.textContent='BEGREPEN';main.onclick=close;
    }else{
      steps.innerHTML='<b>Installeren</b><span>Open het browsermenu en kies <strong>App installeren</strong> of <strong>Toevoegen aan startscherm</strong>.</span>';
      main.textContent='BEGREPEN';main.onclick=close;
    }
  }

  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;ensureTrigger()});
  window.addEventListener('appinstalled',()=>{deferredPrompt=null;close();removeTrigger()});
  window.MANTHOS_INSTALL={show,isStandalone};

  ensureTrigger();
  setTimeout(()=>{
    if(!isStandalone()&&!localStorage.getItem('manthos_install_seen')){
      show();
      localStorage.setItem('manthos_install_seen','1');
    }
  },1800);
})();