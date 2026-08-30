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

  // The V3.4 tracker uses the legacy inline chg() handler. Override it so
  // a +/- tap redraws the V3.4 Today screen instead of the legacy pillar page.
  window.chg=changeHabit;

  function applyDashboardHeader(){
    const logo=document.querySelector('.word');
    if(!logo)return;
    logo.innerHTML='<img src="assets/navigation/Dashboard.png" alt="Dashboard" style="width:100%;height:100%;object-fit:contain;display:block"><b style="display:none">DASHBOARD</b>';
    logo.classList.add('v34-dashboard-logo');
    logo.setAttribute('role','button');
    logo.setAttribute('aria-label','Dashboard');
    logo.setAttribute('title','Dashboard');
    logo.onclick=()=>{ if(typeof home==='function') home(); };
  }

  applyDashboardHeader();
  window.addEventListener('manthos:path-selected',()=>setTimeout(applyDashboardHeader,0));
  new MutationObserver(()=>{
    const logo=document.querySelector('.word');
    if(logo && !logo.textContent.includes('DASHBOARD')) applyDashboardHeader();
  }).observe(document.body,{childList:true,subtree:true});
})();