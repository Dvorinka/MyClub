---
title: Administrace klubu – dokumentace
order: 2
summary: Kompletní průvodce administrací klubového webu – pro rychlý start i detailní postupy bez potřeby technických znalostí.
---

# Administrace klubu – dokumentace

Tento průvodce vás krok za krokem provede administrací klubového webu – od nastavení, přes články a zápasy, až po newslettery a galerii. Vše je navrženo tak, aby to zvládl každý člen klubu bez technických znalostí.

> Podpora: Máte dotazy nebo chcete vlastní úpravy? Napište na help@tdvorak.dev – obvykle odpovíme do 24 hodin.

## Úvod a přehled

Administrační systém umožňuje spravovat kompletní klubový web. Přidáváte články, zápasy a výsledky, galerie fotek, e-maily pro fanoušky, upravujete vzhled a další. Není potřeba žádné programování.

### Rychlé odkazy na nejpoužívanější sekce

- [Články](/admin/clanky) – publikujte novinky a reportáže
- [Zápasy](/admin/zapasy) – automatické načítání z FAČR
- [Hráči a týmy](/admin/hraci) – správa soupisek
- [Galerie](/admin/galerie) – fotogalerie a alba
- [Média](/admin/soubory) – nahrávání obrázků a souborů
- [Newsletter](/admin/newsletter) – e-mailové kampaně
- [Nastavení klubu](/admin/nastaveni) – logo, barvy, kontakty
- [Sponzoři](/admin/sponzori) – správa partnerů klubu
- [Videa](/admin/videa) – YouTube a další videa
- [Aktivity](/admin/aktivity) – kalendář akcí
- [Analytics](/admin/analytika) – statistiky návštěvnosti
- [Prefetch](/admin/prefetch) – aktualizace dat z FAČR

> Tip pro začátečníky: Začněte v pořadí: 1) Nastavení, 2) Média (nahrajte logo a pár obrázků), 3) Články (první příspěvek). Zbytek prozkoumejte postupně.

## Nastavení klubu

Začněte zde – nastavení ovlivňuje vzhled webu, e-maily, načítání zápasů a další funkce.

- Otevřít: [Nastavení klubu](/admin/nastaveni)

### Co nastavit (krok za krokem)

1. Název klubu – zobrazuje se v záhlaví i v e-mailech.
2. Logo klubu – nahrajte logo v sekci [Média](/admin/soubory), zkopírujte URL a vložte.
3. Barvy – primární a sekundární barva (např. #FF0000).
4. SMTP (pro e-maily) – host, port (465/587), uživatelské jméno a heslo.
5. FAČR údaje – Club ID a Club Type z [is.fotbal.cz](https://is.fotbal.cz).
6. Sociální sítě – odkazy na klubové profily.
7. Kontakty – e-mail, telefon, adresa.

> Tip pro SMTP: Port 465 používá SSL, port 587 STARTTLS. Pro Gmail použijte App Password (heslo aplikace).

## Dashboard a přehledy

Po přihlášení najdete na Dashboardu souhrn: poslední články, plán zápasů, e-mailové statistiky, notifikace a „akční dlaždice“ (vytvořit článek, spustit prefetch, import aliasů). Data jsou real-time – při neaktuálních datech spusťte [Prefetch](/admin/prefetch).

## Články a kategorie

Sekce pro publikaci novinek, reportáží a rozhovorů. Jednoduché jako psaní příspěvku na sociálních sítích.

- Otevřít: [Články](/admin/clanky)

### Jak vytvořit článek

1. Otevřete sekci [Články](/admin/clanky).
2. Klikněte na „Vytvořit článek“.
3. Vyplňte název článku.
4. Napište obsah (podporován i HTML/Markdown).
5. Vyberte kategorii – např. „Zápasy“, „Aktuality“ (lze založit novou).
6. Přidejte hlavní obrázek – URL získáte ze sekce [Média](/admin/soubory).
7. Vyplňte SEO titulek a popis.
8. Zaškrtněte „Publikovat“, nebo uložte jako koncept.
9. Uložte.

### Obrázky a videa v článku

- Obrázky: Nahrajte v [Média](/admin/soubory), zkopírujte URL (např. `/uploads/2025/01/foto.jpg`) a vložte do obsahu.
- YouTube: Vložte odkaz nebo použijte embed kód z YouTube.

### SEO doporučení

- Titulek: 50–60 znaků s klíčovými slovy.
- Popis: 150–160 znaků – krátké shrnutí.
- URL Slug: krátký text bez diakritiky s pomlčkami.
- Obrázek: optimalizujte velikost (ideálně 1200×630 px, do 1 MB).

## Zápasy a tabulky

Veškerá data se automaticky načítají z FAČR – stačí správné nastavení.

- Zobrazit zápasy: [Zápasy](/admin/zapasy)
- Aktualizovat data: [Prefetch](/admin/prefetch)

### Nastavení automatického načítání zápasů

1. Otevřete [Nastavení](/admin/nastaveni).
2. Najděte sekci „FAČR údaje“.
3. Vyplňte Club ID a Club Type (z [is.fotbal.cz](https://is.fotbal.cz)).
4. Uložte a spusťte [Prefetch](/admin/prefetch).

> Poznámka – Aliasy soutěží: Dlouhé názvy si zkraťte v [Alias soutěží](/admin/aliasy-soutezi).

## Hráči a týmy

Aktualizujte seznam týmů a hráčů, včetně čísel dresů, pozic a profilových fotek. Při chybně načtených datech využijte [Alias soutěží](/admin/aliasy-soutezi) nebo manuální úpravy.

## Média a soubory

Centrální úložiště obrázků, log a souborů pro použití napříč webem.

- Otevřít: [Média](/admin/soubory)

### Jak nahrát soubor

1. Otevřete [Média](/admin/soubory).
2. Klikněte na „Nahrát soubor“.
3. Vyberte soubor (doporučeno: JPG/PNG, max 5 MB).
4. Po nahrání zkopírujte URL (např. `/uploads/2025/01/foto.jpg`).
5. Vložte URL tam, kde je potřeba (články, logo v nastavení).

> Tipy k obrázkům: Optimalizujte velikost (šířka 1200–2000 px, do 1 MB), používejte popisné názvy, JPG pro fotky, PNG pro loga.

## Galerie

Spravujte fotografie z akcí a zápasů. Možné propojení se službou Zonerama.

- Otevřít: [Galerie](/admin/galerie)

### Jak přidat galerii

1. Otevřete [Galerie](/admin/galerie).
2. Klikněte na „Přidat album“.
3. Vyplňte název a popis.
4. Nahrajte náhledový obrázek.
5. Volitelně vložte odkaz na album v Zonerama.
6. Uložte.

## Správa souborů

Sekce [Soubory](/admin/files) nabízí přehled všech nahraných položek, filtrování, stahování pro zálohu a další.

## Sponzoři a bannery

Spravujte loga partnerů a reklamní plochy na webu i v newsletterech.

- Sponzoři: [Sponzoři](/admin/sponzori)
- Bannery: [Bannery](/admin/bannery)
- Statistiky prokliků: [Analytics](/admin/analytics)

## Newsletter a e-maily

Hromadné e-maily pro fanoušky – ideální pro pozvánky, oznámení a shrnutí.

- Otevřít: [Newsletter](/admin/newsletter)

### Jak odeslat newsletter

1. Zkontrolujte SMTP v [Nastavení](/admin/nastaveni).
2. Otevřete [Newsletter](/admin/newsletter).
3. Vyplňte předmět a obsah (možné i HTML formátování).
4. Odešlete test na vlastní e‑mail a zkontrolujte zobrazení.
5. Odešlete všem přihlášeným.

> Tipy: Pište stručně a jasně, používejte poutavý předmět, přidávejte odkazy na web, neposílejte příliš často (1–2× týdně max).

## Alias soutěží

Přejmenování názvů soutěží importovaných z FAČR pro srozumitelný a jednotný výpis.

- Otevřít: [Alias soutěží](/admin/aliasy-soutezi)

## Prefetch a cache

Prefetch vytváří lokální cache (zápasy, videa, články) a zrychluje načítání webu. Spusťte po větších změnách nebo při neaktuálních datech: [Prefetch](/admin/prefetch).

## Videa

Integrace s YouTube a dalšími platformami – přidání podle URL/ID videa, import playlistu přes [Prefetch](/admin/prefetch).

## Aktivity

Kalendář klubových akcí, tréninků a mimo-soutěžních událostí: [Aktivity](/admin/aktivity).

---

## Oblečení (merch)

Spravujte položky klubového merche a informujte fanoušky o dostupnosti zboží.

- Přidejte položky v [Oblečení](/admin/merch) s popisem, cenou a fotkou.
- Využijte štítky pro kategorizaci (např. "dresy", "fan shop").
- Sledujte zájem fanoušků přes kontaktní formulář nebo externí objednávkový formulář/odkaz.

## Zprávy

Zprávy zahrnují kontaktní formuláře, přihlášky a další komunikaci směrem ke klubu.

- V [Zprávách](/admin/zpravy) vidíte přijaté zprávy a jejich stav.
- Odpovídejte z vlastní e‑mailové schránky; systém uchovává historii pouze informativně.
- Označte vyřízené zprávy pro přehlednost týmu.

## Kontakty a formuláře

V sekci [Kontakty](/admin/kontakty) spravujete kontaktní údaje klubu a odpovědné osoby pro jednotlivé typy dotazů.

1. Zadejte telefon, e‑mail a roli pro každého kontaktního pracovníka.
2. U formulářů lze nastavit cílovou e‑mailovou adresu a potvrzovací zprávu.
3. Zkontrolujte oddíl [Zprávy](/admin/zpravy), zda se odesílané formuláře ukládají správně.

> Poznámka: Kontaktní údaje se propisují do patičky webu i do automatických e‑mailů.

## Analytics a reporty

Sekce [Analytics](/admin/analytika) kombinuje statistiky z Umami a interních metrik systému. Sledujte návštěvnost, interakce a výkon jednotlivých stránek.

- Přehled návštěv podle časového období a zdrojů.
- Top články, nejčtenější kategorie a popularita videí.
- Informace o přihláškách k newsletteru a konverzích formulářů.

Podrobný postup integrace najdete v `UMAMI_SETUP_WITH_CLUB_NAME.md`. Doporučujeme nastavit i `UMAMI_ADMIN_EXCLUSION.md`, aby se nezapočítávaly administrátorské návštěvy.

## Tabule (Scoreboard)

Scoreboard v [Tabuli](/admin/scoreboard) používá data ze zápasů a umožňuje připravit grafiku na klubové obrazovky.

1. Vyberte soutěž a konkrétní zápas pro zobrazení.
2. Nastavte barevné téma v souladu s brandingem klubu.
3. Exportujte URL pro sdílení na velkoplošných displejích.

> Poznámka: Scoreboard vyžaduje aktuální data z FAČR. Pokud se zápas nezobrazuje, ověřte nastavení v [Alias soutěží](/admin/aliasy-soutezi) a spusťte [Prefetch](/admin/prefetch).

## Mobilní scoreboard

Pro ovládání tabule na dálku použijte [Mobilní scoreboard](/admin/scoreboard/remote). Umožňuje aktualizovat skóre v průběhu utkání přímo z telefonu.

- Přihlaste se stejným účtem jako v administraci.
- Vyberte zápas, který sledujete, a nastavte skóre i čas.
- Ověřte internetové připojení – změny se synchronizují okamžitě na veřejné tabuli.

Funkce je optimalizovaná pro PWA. Přidejte si ji na domovskou obrazovku pro rychlý přístup.

## Uživatelé a přístupy

Spravujte přístupy administrátorů i redaktorů, nastavujte role a resetujte hesla.

1. V [Uživatelích](/admin/uzivatele) přidejte nové účty a přidělte roli `admin` nebo `user`.
2. Pro reset hesla využijte nástroj [Odeslat reset](/admin/users/send-reset).
3. Doporučujeme zapnout dvoufaktorové ověření na e‑mailových účtech administrátorů.

## Interní dokumentace

V repozitáři najdete rozsáhlé manuály k jednotlivým oblastem. Doporučujeme projít alespoň tyto:

- `FRONTEND_FUNCTIONALITY_REPORT.md` – podrobný popis veřejného webu.
- `BACKEND_FUNCTIONALITY_REPORT.md` – vysvětlení API a datových toků.
- `NEWSLETTER_SYSTEM.md` a `FILES_MANAGEMENT_SYSTEM.md` – detailní pracovní postupy.

> Kompletní seznam manuálů najdete v adresáři `docs/` (kořen projektu). Dokumenty jsou průběžně aktualizované – sledujte datum poslední revize.

## Checklisty a postupy

Pro rychlé spuštění nových funkcí využijte připravené checklisty. Slouží jako doplněk k této dokumentaci.

1. `NEWSLETTER_FEATURE_CHECKLIST.md` – krok za krokem konfigurace newsletteru.
2. `FILES_MANAGEMENT_TESTING.md` – co ověřit, než nasadíte novou sadu souborů.
3. `MAP_IMPORT_COMPLETE_IMPLEMENTATION.md` a související checklisty pro import mapových dat.

Checklisty si můžete stáhnout jako PDF a sdílet v rámci klubu – usnadníte tak zaškolení nových členů týmu.

## SEO a metadata

Správné SEO nastavení zlepší dohledatelnost webu a výkon obsahu.

- U každého článku vyplňte SEO titulek, SEO popis a slug bez diakritiky.
- Pro sociální sítě doplňte Open Graph a Twitter metatagy v nastavení.
- Pro nastavení analytiky viz sekci [Analytics a reporty](#analytics-a-reporty).

## Řešení problémů

### E‑maily se neodesílají

1. Zkontrolujte SMTP nastavení v [Nastavení](/admin/nastaveni).
2. Ověřte port: 465 = SSL, 587 = STARTTLS.
3. Gmail vyžaduje „App Password", ne běžné heslo.
4. Zkuste odeslat testovací e‑mail z [Newsletteru](/admin/newsletter).
5. Zkontrolujte serverové logy pro chybové hlášky.

### Obrázky se nezobrazují

- Nahrajte obrázek do [Média](/admin/soubory).
- Použijte relativní cestu: `/uploads/2025/01/obrazek.jpg`.
- Pro externí zdroje použijte proxy: `/api/v1/proxy/image?url=...`.
- Ověřte, že soubor existuje a je veřejně přístupný.

### FAČR data nejsou aktuální

1. Spusťte [Prefetch](/admin/prefetch) ručně.
2. Zkontrolujte Club ID a Club Type v [Nastavení](/admin/nastaveni).
3. Ověřte čas posledního běhu v Prefetch statusu.
4. Zkontrolujte internetové připojení serveru.

### Nelze se přihlásit

- Ověřte e‑mail a heslo (hesla jsou case‑sensitive).
- Použijte „Zapomenuté heslo" pro reset.
- Zkontrolujte, že účet má roli `admin`.
- Po několika neúspěšných pokusech vyčkejte 5 minut (ochrana proti brute‑force).

### Potřebujete pomoc?

- Vymažte cache (mezipaměť) prohlížeče a obnovte stránku (Ctrl+F5).
- Zkuste jiný prohlížeč (Chrome, Firefox, Edge).
- Odhlaste se a přihlaste znovu.
- Zkontrolujte internetové připojení.

Napište nám na help@tdvorak.dev – obvykle odpovíme do 24 hodin. Tip: Přiložte screenshot problému, urychlíte tím řešení.
