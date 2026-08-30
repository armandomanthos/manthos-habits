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

    const size=window.matchMedia('(max-width:700px)').matches?'76px':'96px';
    logo.style.setProperty('width',size,'important');
    logo.style.setProperty('height',size,'important');
    logo.style.setProperty('padding','4px','important');

    if(logo.tagName==='IMG'){
      logo.src='./assets/navigation/Dashboard.png?v=3414';
      logo.alt='Dashboard';
      logo.style.objectFit='contain';
      logo.style.objectPosition='center';
    }else{
      logo.innerHTML='<img src="./assets/navigation/Dashboard.png?v=3414" alt="Dashboard" style="width:100%;height:100%;object-fit:contain;object-position:center;display:block">';
    }

    logo.classList.add('v34-dashboard-logo');
    logo.setAttribute('role','button');
    logo.setAttribute('aria-label','Dashboard');
    logo.setAttribute('title','Dashboard');
    logo.onclick=()=>{ if(typeof home==='function') home(); };
  }

  applyDashboardHeader();
  window.addEventListener('manthos:path-selected',()=>setTimeout(applyDashboardHeader,0));
})();