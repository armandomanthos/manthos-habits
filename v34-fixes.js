(()=>{
  function changeHabit(id,delta){
    try{
      const k=key();
      S.logs[k]=S.logs[k]||{};
      S.logs[k][id]=Math.max(0,(S.logs[k][id]||0)+delta);
      save();
      if(typeof trackerV34==='function') trackerV34();
      else if(typeof tracker==='function') tracker();
    }catch(err){
      console.error('Habit update failed',err);
    }
  }
  window.chg=changeHabit;

  function applyDashboardHeader(){
    const logo=document.querySelector('.word');
    if(!logo)return;
    const size=window.matchMedia('(max-width:700px)').matches?'96px':'112px';
    logo.style.setProperty('width',size,'important');
    logo.style.setProperty('height',size,'important');
    logo.style.setProperty('padding','2px','important');
    if(logo.tagName==='IMG'){
      logo.src='./assets/navigation/Dashboard.png?v=3417';
      logo.alt='Dashboard';
      logo.style.setProperty('object-fit','contain','important');
      logo.style.setProperty('object-position','center','important');
    }else{
      logo.innerHTML='<img src="./assets/navigation/Dashboard.png?v=3417" alt="Dashboard" style="width:100%;height:100%;object-fit:contain;object-position:center;display:block">';
    }
    logo.classList.add('v34-dashboard-logo');
    logo.setAttribute('role','button');
    logo.setAttribute('aria-label','Dashboard');
    logo.setAttribute('title','Dashboard');
    logo.onclick=()=>{ if(typeof homeV34==='function') homeV34(); else if(typeof home==='function') home(); };
  }

  function ensureHabitModal(){
    if(document.getElementById('v34HabitModal'))return;
    const style=document.createElement('style');
    style.textContent=`
      .v34-modalback{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.78);display:none;align-items:flex-end;justify-content:center;padding:16px;box-sizing:border-box}
      .v34-modalback.open{display:flex}
      .v34-modal{width:min(100%,440px);background:#111;border:1px solid #343434;border-top:3px solid #F5C400;border-radius:18px;padding:20px;box-sizing:border-box;box-shadow:0 18px 60px rgba(0,0,0,.55)}
      .v34-modal small{display:block;color:#F5C400;font:800 9px 'Montserrat',sans-serif;letter-spacing:.12em}.v34-modal h2{margin:6px 0 16px;color:#fff;font-size:26px}
      .v34-modal label{display:block;color:#aaa;font:700 10px 'Montserrat',sans-serif;margin:13px 0 7px}.v34-modal input{width:100%;box-sizing:border-box;background:#0b0b0b;border:1px solid #3b3b3b;border-radius:11px;color:#fff;padding:13px 14px;font:600 16px 'Montserrat',sans-serif;outline:none}.v34-modal input:focus{border-color:#F5C400}
      .v34-freq{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}.v34-freq button{height:40px;border-radius:9px;border:1px solid #363636;background:#171717;color:#aaa;font-weight:800}.v34-freq button.active{border-color:#F5C400;background:#211e0d;color:#F5C400}
      .v34-modalactions{display:grid;grid-template-columns:1fr 1.4fr;gap:8px;margin-top:18px}.v34-modalactions button{min-height:46px;border-radius:11px;font-weight:900}.v34-cancel{border:1px solid #343434;background:#171717;color:#aaa}.v34-save{border:1px solid #F5C400;background:#F5C400;color:#0b0b0b}
      @media(min-width:701px){.v34-modalback{align-items:center}}
    `;
    document.head.appendChild(style);
    const back=document.createElement('div');
    back.id='v34HabitModal';back.className='v34-modalback';
    back.innerHTML=`<div class="v34-modal" role="dialog" aria-modal="true" aria-labelledby="v34ModalTitle"><small>NIEUWE GEWOONTE</small><h2 id="v34ModalTitle">Wat ga je doen?</h2><label for="v34HabitName">GEWOONTE</label><input id="v34HabitName" type="text" maxlength="80" placeholder="Bijv. 30 minuten lezen" autocomplete="off"><label>HOE VAAK PER WEEK?</label><div class="v34-freq">${[1,2,3,4,5,6,7].map(n=>`<button type="button" data-freq="${n}" class="${n===3?'active':''}">${n}</button>`).join('')}</div><div class="v34-modalactions"><button type="button" class="v34-cancel">ANNULEREN</button><button type="button" class="v34-save">TOEVOEGEN</button></div></div>`;
    document.body.appendChild(back);
    back.querySelectorAll('[data-freq]').forEach(btn=>btn.onclick=()=>{back.querySelectorAll('[data-freq]').forEach(x=>x.classList.remove('active'));btn.classList.add('active')});
    const close=()=>back.classList.remove('open');
    back.querySelector('.v34-cancel').onclick=close;
    back.addEventListener('click',e=>{if(e.target===back)close()});
    back.querySelector('.v34-save').onclick=()=>{
      const p=window.MANTHOS_PATHS?.state?.();
      const meta=p?window.MANTHOS_PATHS?.paths?.[p.path]:null;
      const name=back.querySelector('#v34HabitName').value.trim();
      const freq=Number(back.querySelector('[data-freq].active')?.dataset.freq||3);
      if(!meta||!name||typeof S==='undefined')return;
      S.habits[meta.pillar]=S.habits[meta.pillar]||[];
      S.habits[meta.pillar].push({id:meta.pillar+Date.now(),name,target:freq,v34Extra:true});
      if(typeof save==='function')save();
      close();
      if(typeof trackerV34==='function')trackerV34();
    };
  }

  function openHabitModal(){
    ensureHabitModal();
    const back=document.getElementById('v34HabitModal');
    if(!back)return;
    const input=back.querySelector('#v34HabitName');
    input.value='';
    back.querySelectorAll('[data-freq]').forEach(x=>x.classList.toggle('active',x.dataset.freq==='3'));
    back.classList.add('open');
    setTimeout(()=>input.focus(),120);
  }

  function reapply(){
    window.addFocusHabit=openHabitModal;
    applyDashboardHeader();
  }

  reapply();
  [150,400,800,1400,2400].forEach(ms=>setTimeout(reapply,ms));
  window.addEventListener('load',()=>setTimeout(reapply,100));
  window.addEventListener('manthos:path-selected',()=>setTimeout(reapply,100));
})();