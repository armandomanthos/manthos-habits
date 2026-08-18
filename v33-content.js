const V33={
  weekNumber(){const d=new Date(Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));const day=d.getUTCDay()||7;d.setUTCDate(d.getUTCDate()+4-day);const y=new Date(Date.UTC(d.getUTCFullYear(),0,1));return Math.ceil((((d-y)/86400000)+1)/7)},
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
      ['Maak een minimum','Bepaal vooraf wat een slechte maar acceptabele week is. Bijvoorbeeld twee korte trainingen.']
    ],
    'Relaties':[
      ['Luister zonder repareren','Stel vandaag één extra vraag voordat je advies geeft. Begrijpen komt vóór oplossen.'],
      ['Maak aandacht zichtbaar','Leg je telefoon weg wanneer iemand die belangrijk voor je is iets vertelt.'],
      ['Plan verbinding','Een relatie onderhouden op alleen spontaniteit is riskant. Zet tijd samen bewust in je agenda.'],
      ['Spreek waardering uit','Denk waardering niet alleen. Zeg concreet wat je in je partner, kind of vriend waardeert.'],
      ['Los kleine irritaties vroeg op','Wacht niet tot iets wekenlang opstapelt. Bespreek het rustig wanneer het nog klein is.']
    ],
    'Ontwikkeling':[
      ['Leer gericht','Kies één vaardigheid waar je deze maand aantoonbaar beter in wilt worden.'],
      ['Lees met toepassing','Schrijf na iets lezen één ding op dat je binnen 48 uur gaat toepassen.'],
      ['Doe eerst het moeilijke werk','Plan je belangrijkste taak op een moment waarop je energie nog hoog is.'],
      ['Review je week','Vraag: wat werkte, wat werkte niet en wat verander ik komende week?'],
      ['Bescherm je aandacht','Zet meldingen uit tijdens werk dat concentratie vraagt.']
    ],
    'Financieel':[
      ['Ken je cijfers','Kijk één keer per week bewust naar inkomsten, uitgaven en aankomende kosten.'],
      ['Automatiseer goed gedrag','Laat sparen of beleggen automatisch gebeuren zodra inkomen binnenkomt.'],
      ['Koop met vertraging','Geef niet-noodzakelijke aankopen een wachttijd. Impuls verliest kracht zodra tijd ertussen zit.'],
      ['Bouw marge','Een buffer geeft niet alleen geld, maar ook beslisruimte wanneer iets tegenzit.'],
      ['Koppel geld aan richting','Vraag bij grotere uitgaven: helpt dit mijn gezin, vrijheid of lange termijn werkelijk vooruit?']
    ]
  },
  renderWeeklyTip(pillar){const arr=this.tips[pillar]||[];if(!arr.length)return'';const w=this.weekNumber();const tip=arr[(w-1)%arr.length];return `<div class="v33-tip"><div class="v33-tip-top"><span class="v33-tip-badge">TIP VAN DE WEEK</span><span class="v33-tip-week">week ${w}</span></div><strong>${tip[0]}</strong><p>${tip[1]}</p><small>Volgende week verschijnt automatisch een andere tip.</small></div>`},
  renderInfoHub(){return `<div class="v33-section"><div class="v33-kicker">VERDIEPING</div><h2>Waarom werkt dit?</h2><p class="muted">Tik op een onderwerp voor de uitleg, toepassing en bron.</p><div class="v33-grid">${this.infoCards.map(c=>`<div class="v33-card" onclick="V33.openInfo('${c.id}')"><div><div class="v33-icon">${c.icon}</div><h3>${c.title}</h3><p>${c.short}</p></div><div class="v33-open">OPEN →</div></div>`).join('')}</div><div id="v33-detail"></div><div class="v33-mini-flow"><div><b>1</b>DOEL</div><div><b>2</b>GEWOONTE</div><div><b>3</b>DOEN</div><div><b>4</b>REVIEW</div></div></div>`},
  openInfo(id){const c=this.infoCards.find(x=>x.id===id);if(!c)return;const host=document.getElementById('v33-detail');if(!host)return;host.innerHTML=`<div class="v33-panel show"><div class="v33-kicker">${c.title.toUpperCase()}</div><h2>${c.headline}</h2><p>${c.why}</p><div class="v33-fact">${c.fact}</div><h3>PRAKTISCH</h3><ul>${c.tips.map(t=>`<li>${t}</li>`).join('')}</ul><div class="v33-source"><strong>Bron</strong><br>${c.source}</div><button class="btn secondary v33-close" onclick="V33.closeInfo()">Sluiten</button></div>`;host.scrollIntoView({behavior:'smooth',block:'nearest'})},
  closeInfo(){const host=document.getElementById('v33-detail');if(host)host.innerHTML=''}
};
window.V33=V33;