# Projektmunka1 - Kvízalkalmazás

Ez a projekt egy egyszerű webes kvízalkalmazás, amely 10 kérdést tartalmaz a matematika, történelem és magyar irodalom témaköreiből.

Fájlok:
- `index.html` - fő oldalfájl (UI)
- `assets/css/style.css` - egyedi stílusok (tantárgy-színezés)
- `assets/js/script.js` - kvíz logika, kérdések tömbje és DOM-manipuláció
- `project_log_template.md` - projektnapló sablon minden csapattagnak
- `ai_code_review.md` - AI-kódreview dokumentáció sablon

Futtatás:
1. Nyissátok meg a `index.html` fájlt egy böngészőben (pl. dupla kattintás vagy "Open with Live Server").
2. Az oldal betöltődésekor az első kérdés automatikusan megjelenik.

Követelmények teljesítése:
- Radio gombok JS-ből generálva
- Táblázat folyamatos bővítése a felhasználó válaszaival
- Tantárgyanként külön színezett sorok
- Bootstrap használata a reszponzív és mobilbarát elrendezéshez

Fejlesztési javaslatok:
- Accessibility (aria-attributes) hozzáadása
- Kérdések betöltése külső JSON-ből
