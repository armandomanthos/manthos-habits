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
    logo.replaceChildren();
    const img=document.createElement('img');
    img.src='./assets/navigation/Dashboard.png?v=20260830-2';
    img.alt='Dashboard';
    img.style.cssText='width:100%;height:100%;object-fit:cover;display:block;border-radius:10px;';
    logo.appendChild(img);
    logo.classList.add('v34-dashboard-logo');
    logo.style.padding='0';
    logo.setAttribute('role','button');
    logo.setAttribute('aria-label','Dashboard');
    logo.setAttribute('title','Dashboard');
    logo.onclick=()=>{ if(typeof home==='function') home(); };
  }

  applyDashboardHeader();
  window.addEventListener('manthos:path-selected',()=>setTimeout(applyDashboardHeader,0));
})();