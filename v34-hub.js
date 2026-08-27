(()=>{
  const COMMUNITY_URL='https://manthos.mn.co';
  const CHAT_URL='https://manthos.nl'; // tijdelijk; vervangen zodra directe chatlink bekend is

  const weeklyMissions=[
    ['Wees volledig aanwezig','Kies deze week één avond waarop je telefoon tijdens eten en gezinstijd volledig wegblijft.'],
    ['Pak het gesprek','Bel iemand die belangrijk voor je is en die je te lang niet echt hebt gesproken.'],
    ['Doe wat je uitstelt','Kies één taak die al weken blijft liggen en rond hem deze week volledig af.'],
    ['Train zonder discussie','Plan drie fysieke momenten. Kort mag. Overslaan omdat je geen zin hebt niet.'],
    ['Maak ruimte','Schrap deze week één verplichting of gewoonte die vooral ruis oplevert.'],
    ['Vraag om tegenspraak','Vraag iemand die je respecteert waar jij jezelf momenteel voor de gek houdt.']
  ];

  function week(){
    if(window.V33&&typeof V33.weekNumber==='function') return V33.weekNumber();
    const onejan=new Date(new Date().getFullYear(),0,1);
    return Math.ceil((((new Date()-onejan)/86400000)+onejan.getDay()+1)/7);
  }
  function mission(){return weeklyMissions[(week()-1)%weeklyMissions.length]}
  function openExternal(url){window.open(url,'_blank','noopener,noreferrer')}

  function showHub(){
    document.getElementById('v34Hub')?.remove();
    const m=mission();
    const overlay=document.createElement('div');
    overlay.id='v34Hub';overlay.className='v34-overlay';
    overlay.innerHTML=`<section class="v34-sheet" role="dialog" aria-modal="true" aria-label="Manthos">
      <button class="v34-x" aria-label="Sluiten">×</button>
      <div class="v34-kicker">MANTHOS</div>
      <h2>Meer dan een tracker.</h2>
      <p class="v34-lead">Habits helpt je uitvoeren. Manthos geeft je omgeving, verdieping en mensen om mee op te trekken.</p>
      <div class="v34-mission"><span>OPDRACHT VAN DE WEEK</span><strong>${m[0]}</strong><p>${m[1]}</p></div>
      <button class="v34-action" data-action="community"><b>⚔ Manthos Community</b><span>Ga naar de Member Area →</span></button>
      <button class="v34-action" data-action="chat"><b>💬 Praat met Manthos</b><span>Stel een vraag of geef feedback →</span></button>
      <button class="v34-action" data-action="help"><b>? Hoe werkt Habits?</b><span>Uitleg over doelen, gewoontes en reviews →</span></button>
      <small class="v34-note">Manthos Habits blijft bewust simpel. Richting bepalen. Uitvoeren. Terugkijken. Bijsturen.</small>
    </section>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.v34-x').onclick=()=>overlay.remove();
    overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove()});
    overlay.querySelector('[data-action="community"]').onclick=()=>openExternal(COMMUNITY_URL);
    overlay.querySelector('[data-action="chat"]').onclick=()=>openExternal(CHAT_URL);
    overlay.querySelector('[data-action="help"]').onclick=showHelp;
  }

  function showHelp(){
    const sheet=document.querySelector('#v34Hub .v34-sheet');if(!sheet)return;
    sheet.innerHTML=`<button class="v34-x" aria-label="Terug">←</button><div class="v34-kicker">HOE WERKT HET?</div><h2>Van richting naar gedrag.</h2>
      <div class="v34-how"><b>1 · Bepaal richting</b><p>Gebruik je 30-, 90- en 365-dagendoelen om vast te leggen waar je naartoe wilt.</p></div>
      <div class="v34-how"><b>2 · Kies gedrag</b><p>Maak van die richting concrete gewoontes. Niet wat je van plan bent, maar wat je daadwerkelijk gaat doen.</p></div>
      <div class="v34-how"><b>3 · Voer uit</b><p>Registreer je gedrag in de tracker. De weekscore laat zien wat je werkelijk hebt uitgevoerd.</p></div>
      <div class="v34-how"><b>4 · Review</b><p>Kijk terug zonder smoesjes: wat werkte, wat niet en wat pas je komende week aan?</p></div>
      <div class="v34-data"><b>Jouw gegevens</b><p>Je persoonlijke trackerdata wordt lokaal op dit apparaat opgeslagen. Wis je browser/appgegevens, dan kan lokale data verloren gaan.</p></div>
      <button class="btn primary v34-back">Terug naar Manthos</button>`;
    sheet.querySelector('.v34-x').onclick=showHub;sheet.querySelector('.v34-back').onclick=showHub;
  }

  function addTrigger(){
    if(document.getElementById('v34Trigger'))return;
    const b=document.createElement('button');b.id='v34Trigger';b.className='v34-trigger';b.innerHTML='<span>⚔</span> MANTHOS';b.onclick=showHub;document.body.appendChild(b);
  }
  window.MANTHOS_HUB={show:showHub,setChatUrl:url=>{if(url)openExternal(url)}};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addTrigger);else addTrigger();
})();