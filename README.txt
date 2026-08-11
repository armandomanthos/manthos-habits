MANTHOS HABITS V3.2 PWA

Verschil t.o.v. V3.1:
- Service worker toegevoegd met fetch-handler en offline cache
- PWA manifest aangescherpt voor GitHub Pages project hosting
- start_url en scope staan relatief op ./
- maskable app-icoon toegevoegd
- Android/Apple app-meta toegevoegd
- display = standalone

Upload/vervang in GitHub:
1. index.html
2. manifest.json
3. icon-192.png
4. icon-512.png
5. icon-maskable-512.png
6. service-worker.js

Na deployment:
- Open de site opnieuw in Chrome
- Vernieuw de pagina
- Wacht enkele seconden zodat de service worker activeert
- Chrome > menu > Installeren en snelkoppelingen
- Kies 'Installeren' als die optie verschijnt

Als Chrome oude data vasthoudt: sluit alle tabs van de site volledig en open de site opnieuw.


VISUELE CORRECTIE
- Transparante Manthos-branding heeft geen rechthoekige CSS-achtergrond meer.
- Branding krijgt geen border of shadow.
- Profielafbeelding behoudt transparantie.
- Overige vormgeving en functionaliteit van V3.2 is ongemoeid gelaten.
