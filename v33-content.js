const V33={
  isoWeek(){const d=new Date(Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));const day=d.getUTCDay()||7;d.setUTCDate(d.getUTCDate()+4-day);const y=new Date(Date.UTC(d.getUTCFullYear(),0,1));return {week:Math.ceil((((d-y)/86400000)+1)/7),year:d.getUTCFullYear()}},
  weekNumber(){return this.isoWeek().week},
  weekKey(){const w=this.isoWeek();return `${w.year}-W${String(w.week).padStart(2,'0')}`},
  infoCards:[
    {id:'habit',icon:'↻',title:'Gewoonte',short:'Waarom herhaling sterker is dan motivatie.',headline:'Gedrag wordt makkelijker door herhaling.',why:'Een gewoonte ontstaat wanneer gedrag steeds opnieuw in een vergelijkbare context wordt uitgevoerd. Daardoor kost starten minder mentale energie en wordt het gedrag voorspelbaarder.',fact:'De kern: maak gewenst gedrag klein, concreet en gekoppeld aan een vast moment of vaste situatie.',tips:['Koppel één gewoonte aan een bestaand anker: na koffie, na tandenpoetsen of direct na werk.','Maak de eerste stap belachelijk klein. Vijf minuten uitvoeren is beter dan wachten op perfecte motivatie.','Meet uitvoering, niet intentie.'],source:'Lally, P. et al. (2010), European Journal of Social Psychology — How are habits formed: Modelling habit formation in the real world.'},
    {id:'physical',icon:'⚒',title:'Fysiek',short:'Capaciteit vraagt onderhoud.',headline:'Bewegen ondersteunt gezondheid en belastbaarheid.',why:'Regelmatige fysieke activiteit ondersteunt conditie, spierkracht, cardiovasculaire gezondheid en algemeen functioneren. Voor Manthos is dit geen esthetisch doel maar beschikbare capaciteit.',fact:'Een sterk lichaam is geen einddoel. Het is gereedschap voor werk, gezin, stress en ouder worden.',tips:['Plan vaste trainingsmomenten in plaats van te wachten tot er tijd overblijft.','Combineer kracht, conditie en herstel.','Kies een minimale weeknorm die ook in drukke weken haalbaar blijft.'],source:'World Health Organization (2020), WHO Guidelines on Physical Activity and Sedentary Behaviour.'},
    {id:'relations',icon:'◎',title:'Relaties',short:'Aandacht wordt zichtbaar in gedrag.',headline:'Relaties worden onderhouden door terugkerende aandacht.',why:'Goede intenties zijn niet hetzelfde als relationeel gedrag. Tijd maken, luisteren, waardering tonen en moeilijke gesprekken niet uitstellen zijn concrete gedragingen die verbinding ondersteunen.',fact:'Relatiekwaliteit zit zelden in één groot gebaar. Meestal zit ze in wat je herhaaldelijk wel of niet doet.',tips:['Plan elke week bewust één moment zonder telefoon of afleiding.','Vraag eerst door voordat je een oplossing geeft.','Benoem waardering concreet: wat deed de ander en waarom waardeer je dat?'],source:'Gottman, J.M. & Levenson, R.W. — longitudinaal onderzoek naar interactiepatronen en relatiekwaliteit. Praktische toepassing in Manthos is gedragsgericht, geen therapie.'},
    {id:'direction',icon:'⌖',title:'Richting',short:'Een doel zonder uitvoering blijft wensdenken.',headline:'Duidelijke doelen geven gedrag richting.',why:'Specifieke en uitdagende doelen kunnen prestaties verbeteren wanneer mensen feedback krijgen en zich aan het doel committeren. De tracker vertaalt richting daarom naar zichtbaar weekgedrag.',fact:'Doel → gewoonte → uitvoering → review. Zonder die keten blijft een doel vooral taal.',tips:['Formuleer je 30-dagendoel zo dat je kunt zien of je dichterbij komt.','Kies per doel maximaal enkele gedragingen die werkelijk verschil maken.','Gebruik de review om bij te sturen, niet om jezelf af te rekenen.'],source:'Locke, E.A. & Latham, G.P. (2002), American Psychologist — Building a practically useful theory of goal setting and task motivation.'}
  ],
  tips:{
    'Fysiek':[
      ['Train op afspraak','Zet je trainingen vooraf in je week. Wat alleen “ergens tussendoor” moet gebeuren, verliest vaak van de dag.'],
      ['Verlaag de drempel','Geen uur beschikbaar? Doe twintig minuten. Consistentie wint vaker van perfectie.'],
      ['Herstel is onderdeel van trainen','Slaap, rust en voeding bepalen hoeveel van je training je daadwerkelijk kunt benutten.'],
      ['Bouw capaciteit','Train niet alleen voor uiterlijk. Vraag jezelf af: wat wil ik fysiek over tien jaar nog kunnen?'],
      ['Maak een minimum','Bepaal vooraf wat een slechte maar acceptabele week is. Bijvoorbeeld twee korte trainingen.'],
      ['Begin voordat je zin hebt','Gebruik motivatie om te starten als die er is, maar bouw een systeem dat ook werkt wanneer die ontbreekt.'],
      ['Loop na het eten','Tien tot twintig minuten wandelen is klein genoeg om vol te houden en groot genoeg om je dag actiever te maken.'],
      ['Maak kracht praktisch','Kies oefeningen waarmee je duwt, trekt, draagt, hurkt en tilt. Capaciteit moet bruikbaar zijn.'],
      ['Bescherm je slaap','Een late avond is soms prima. Maak er alleen geen patroon van dat je herstel iedere week ondermijnt.'],
      ['Train ook conditie','Sterk zijn zonder uithoudingsvermogen is een halve gereedschapskist. Geef beide aandacht.'],
      ['Meet iets simpels','Houd één duidelijke maat bij: trainingen per week, stappen, kilometers of gewichten. Zichtbaar gedrag stuurt beter.'],
      ['Stop vóór de perfectie','Een degelijk programma dat je maanden uitvoert verslaat een perfect programma dat je na twee weken laat liggen.']
    ],
    'Relaties':[
      ['Luister zonder repareren','Stel vandaag één extra vraag voordat je advies geeft. Begrijpen komt vóór oplossen.'],
      ['Maak aandacht zichtbaar','Leg je telefoon weg wanneer iemand die belangrijk voor je is iets vertelt.'],
      ['Plan verbinding','Een relatie onderhouden op alleen spontaniteit is riskant. Zet tijd samen bewust in je agenda.'],
      ['Spreek waardering uit','Denk waardering niet alleen. Zeg concreet wat je in je partner, kind of vriend waardeert.'],
      ['Los kleine irritaties vroeg op','Wacht niet tot iets wekenlang opstapelt. Bespreek het rustig wanneer het nog klein is.'],
      ['Vraag hoe het echt gaat','Niet “alles goed?”, maar één vraag waarop een echt antwoord mogelijk is.'],
      ['Doe iets zonder score bij te houden','Investeer in je relatie zonder meteen te rekenen wat jij ervoor terugkrijgt.'],
      ['Bewaar humor','Niet ieder verschil hoeft een zwaar gesprek te worden. Samen kunnen lachen haalt spanning uit kleine dingen.'],
      ['Bescherm je thuiskomst','De eerste minuten thuis zetten vaak de toon. Kom binnen met aandacht in plaats van alleen met de druk van je dag.'],
      ['Spreek verwachtingen uit','Veel irritatie ontstaat uit verwachtingen die nooit hardop zijn besproken. Maak ze zichtbaar.'],
      ['Maak tijd één-op-één','Gezinstijd is waardevol, maar vervangt geen tijd met je partner of individueel met je kind.'],
      ['Herstel na frictie','Een botsing is niet automatisch het probleem. Niet terugkomen, erkennen en herstellen vaak wel.']
    ],
    'Ontwikkeling':[
      ['Leer gericht','Kies één vaardigheid waar je deze maand aantoonbaar beter in wilt worden.'],
      ['Lees met toepassing','Schrijf na iets lezen één ding op dat je binnen 48 uur gaat toepassen.'],
      ['Doe eerst het moeilijke werk','Plan je belangrijkste taak op een moment waarop je energie nog hoog is.'],
      ['Review je week','Vraag: wat werkte, wat werkte niet en wat verander ik komende week?'],
      ['Bescherm je aandacht','Zet meldingen uit tijdens werk dat concentratie vraagt.'],
      ['Kies minder','Drie prioriteiten die je uitvoert zijn meer waard dan tien ambities die alleen in je hoofd bestaan.'],
      ['Zoek tegenspraak','Vraag iemand die je respecteert waar jij jezelf voor de gek houdt. Groei vraagt soms wrijving.'],
      ['Maak vakmanschap zichtbaar','Kies één onderdeel van je werk dat je deze week aantoonbaar beter wilt uitvoeren.'],
      ['Schrijf je besluit op','Bij een belangrijke keuze: noteer waarom je hem maakt. Later kun je je oordeel toetsen zonder achteraf je verhaal te veranderen.'],
      ['Gebruik wachttijd','Tien minuten wachten kan scrolltijd zijn, maar ook lezen, plannen of een klein openstaand punt afronden.'],
      ['Werk aan je financiën','Ontwikkeling is ook verantwoordelijkheid voor geld. Bekijk deze week één cijfer dat je normaal ontwijkt.'],
      ['Bouw een omgeving','Wilskracht is beperkt. Zet mensen, plekken en afspraken om je heen die het goede gedrag makkelijker maken.']
    ],
    'Financieel':[
      ['Ken je cijfers','Kijk één keer per week bewust naar inkomsten, uitgaven en aankomende kosten.'],
      ['Automatiseer goed gedrag','Laat sparen of beleggen automatisch gebeuren zodra inkomen binnenkomt.'],
      ['Koop met vertraging','Geef niet-noodzakelijke aankopen een wachttijd. Impuls verliest kracht zodra tijd ertussen zit.'],
      ['Bouw marge','Een buffer geeft niet alleen geld, maar ook beslisruimte wanneer iets tegenzit.'],
      ['Koppel geld aan richting','Vraag bij grotere uitgaven: helpt dit mijn gezin, vrijheid of lange termijn werkelijk vooruit?'],
      ['Ken je vaste lasten','Weet welk bedrag iedere maand al weg is voordat je iets extra uitgeeft.'],
      ['Maak één geldmoment','Plan een vast kwartier per week voor je financiën in plaats van alleen te kijken wanneer er problemen zijn.'],
      ['Let op kleine lekken','Eén kleine uitgave maakt weinig uit. Tien terugkerende uitgaven kunnen samen wel degelijk je marge opeten.'],
      ['Vergroot eerst ruimte','Meer inkomen helpt, maar grip begint vaak met ruimte creëren in wat er al binnenkomt.'],
      ['Maak doelen concreet','“Meer sparen” is vaag. Een bedrag, datum en automatische overboeking zijn uitvoerbaar.'],
      ['Bespreek geld thuis','Gedeelde verwachtingen over geld voorkomen dat twee mensen onbewust verschillende plannen uitvoeren.'],
      ['Denk in jaren','Vraag bij financiële keuzes niet alleen wat het deze maand kost, maar wat het patroon over meerdere jaren doet.']
    ]
  },
  renderWeeklyTip(pillar){const arr=this.tips[pillar]||[];if(!arr.length)return'';const w=this.weekNumber();const tip=arr[(w-1)%arr.length];return `<div class="v33-tip"><div class="v33-tip-top"><span class="v33-tip-badge">TIP VAN DE WEEK</span><span class="v33-tip-week">week ${w}</span></div><strong>${tip[0]}</strong><p>${tip[1]}</p><small>Volgende week verschijnt automatisch een andere tip.</small></div>`},
  getFocus(){if(typeof S==='undefined')return'';const f=S.weekFocus||{};return f.week===this.weekKey()?(f.text||''):''},
  setFocus(){if(typeof S==='undefined')return;const current=this.getFocus();const v=prompt('Wat krijgt deze week jouw extra aandacht?',current);if(v===null)return;S.weekFocus={week:this.weekKey(),text:v.trim()};save();home()},
  todayActions(){if(typeof S==='undefined'||typeof key!=='function')return 0;const log=S.logs[key()]||{};return Object.values(log).reduce((a,n)=>a+(Number(n)||0),0)},
  statusLine(){if(typeof names==='undefined'||typeof ps!=='function')return'';const vals=names.map(p=>({p,v:ps(p)}));const active=vals.filter(x=>x.v>0);if(!active.length)return'Nog geen uitvoering geregistreerd deze week.';const weak=vals.reduce((a,b)=>b.v<a.v?b:a);return `${weak.p} vraagt deze week de meeste aandacht (${weak.v}%).`},
  renderHomeCockpit(){if(typeof total!=='function')return'';const t=total(),pr=total(dates(-1)),delta=t-pr,focus=this.getFocus(),today=this.todayActions(),date=new Date().toLocaleDateString('nl-NL',{weekday:'long',day:'numeric',month:'long'});return `<section class="v33-cockpit"><div class="v33-kicker">VANDAAG · ${date.toUpperCase()}</div><div class="v33-cockpit-head"><div><h1>Waar sta je nu?</h1><p>${this.statusLine()}</p></div><div class="v33-score"><b>${t}%</b><span>deze week</span></div></div><div class="v33-stats"><div><b>${today}</b><span>acties vandaag</span></div><div><b>${delta>0?'+'+delta:delta}%</b><span>t.o.v. vorige week</span></div></div><div class="v33-focus" onclick="V33.setFocus()"><div><span>FOCUS VAN DE WEEK</span><strong>${focus?focus:'Tik om één prioriteit te kiezen'}</strong></div><b>✎</b></div><button class="btn primary v33-track-btn" onclick="page('tracker')">Naar mijn tracker →</button></section>`},
  renderInfoHub(){return `<div class="v33-section"><div class="v33-kicker">VERDIEPING</div><h2>Waarom werkt dit?</h2><p class="muted">Tik op een onderwerp voor de uitleg, toepassing en bron.</p><div class="v33-grid">${this.infoCards.map(c=>`<div class="v33-card" onclick="V33.openInfo('${c.id}')"><div><div class="v33-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.short}</p></div><div class="v33-open">OPEN →</div></div>`).join('')}</div><div id="v33-detail"></div></div>`},
  openInfo(id){const c=this.infoCards.find(x=>x.id===id);if(!c)return;const host=document.getElementById('v33-detail');if(!host)return;host.innerHTML=`<div class="v33-panel show"><div class="v33-kicker">${c.title.toUpperCase()}</div><h2>${c.headline}</h2><p>${c.why}</p><div class="v33-fact">${c.fact}</div><h3>PRAKTISCH</h3><ul>${c.tips.map(t=>`<li>${t}</li>`).join('')}</ul><div class="v33-source"><strong>Bron</strong><br>${c.source}</div><button class="btn secondary v33-close" onclick="V33.closeInfo()">Sluiten</button></div>`;host.scrollIntoView({behavior:'smooth',block:'nearest'})},
  closeInfo(){const host=document.getElementById('v33-detail');if(host)host.innerHTML=''}
};
window.V33=V33;

window.addEventListener('DOMContentLoaded',()=>{
  if(typeof window.home==='function'){
    const originalHome=window.home;
    window.home=function(){originalHome();const main=document.getElementById('main');if(!main)return;const oldScore=main.querySelector('.miniScore');if(oldScore)oldScore.remove();main.insertAdjacentHTML('afterbegin',V33.renderHomeCockpit())};
    window.home();
  }
  if(typeof window.info==='function'){
    const originalInfo=window.info;
    window.info=function(){originalInfo();const main=document.getElementById('main');if(!main)return;const oldFlow=main.querySelector('.flow');if(oldFlow)oldFlow.remove()};
  }
});