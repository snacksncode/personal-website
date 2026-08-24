---
target: homepage offer
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-24T16-56-24Z
slug: src-app-offer-page-tsx
---
# Impeccable Critique — oferta Ilya Dolotov

## Design Health Score

| # | Heurystyka | Wynik | Główna kwestia |
|---|---|---:|---|
| 1 | Widoczność stanu systemu | 2/4 | `mailto:` nie daje potwierdzenia ani fallbacku, gdy klient poczty się nie otworzy. |
| 2 | Zgodność z realnym światem | 4/4 | Język bólu jest konkretny: e-mail, Excel, oczekiwanie klienta, marża i ręczna praca. |
| 3 | Kontrola i swoboda użytkownika | 4/4 | Proste anchory, brak pułapek, realizacje otwierają się osobno. |
| 4 | Spójność i standardy | 3/4 | System jest spójny, ale nazwa tej samej akcji lekko dryfuje między CTA. |
| 5 | Zapobieganie błędom | 3/4 | Prefill pomaga, lecz nie zawiera pełnej instrukcji „trzech zdań”; brak zabezpieczenia przed niedziałającym `mailto:`. |
| 6 | Rozpoznawanie zamiast pamiętania | 4/4 | Główna akcja jest podpisana tekstem, powtarzana i dominująca wizualnie. |
| 7 | Elastyczność i efektywność | n/a | Nie jest istotna dla powierzchni Persuade. |
| 8 | Estetyka i minimalizm | 3/4 | Hierarchia jest mocna, ale mobilny diagram i długość ponad 10 tys. px przeciągają argument. |
| 9 | Rozpoznawanie i naprawa błędów | 2/4 | Surowy adres e-mail pojawia się dopiero przy końcu; brak szybkiego recovery obok pierwszych CTA. |
| 10 | Pomoc i dokumentacja | n/a | Nie jest istotna dla skupionego landing page’a. |
| **Łącznie** |  | **25/32 — Good** | **Mocny fundament, ale są luki konwersyjne i dostępnościowe.** |

## Design Specificity Verdict

**Strona jest autorska, nie zamienna z typowym portfolio freelancera.** Diagram „e-mail + Excel → diagnoza → nie budujemy / plan + budżet”, brutalistyczne ramki i paleta dark green/lime/coral/cobalt są mocno związane z tą ofertą. Najbardziej wyróżnia ją materialne pokazanie, że uczciwym wynikiem może być rekomendacja, aby niczego nie budować.

Słabszy punkt pojawia się niżej: generyczne karty wdrożeń i portfolio przesuwają stronę w stronę klasycznego „developer for hire”. Brakuje dowodu bezpośrednio związanego z kosztownym procesem operacyjnym MŚP.

**Deterministic scan:** 0 findings w `src/app/offer-page.tsx`; exit code 0. To potwierdza brak typowych mechanicznych slop patterns, ale nie unieważnia problemów, których detektor nie mierzy: długości perswazji, momentu CTA, komercyjnego dopasowania proof oraz kontrastu wynikającego z półprzezroczystych kolorów w CSS.

**Visual overlays:** nie zostały uruchomione. Dostępna ścieżka Playwright była read-only i nie mogła wiarygodnie potwierdzić mutowalnego wstrzyknięcia skryptu. Dowodem zastępczym są osobne screenshoty, pomiary DOM i overflow dla desktopu i mobile.

## Overall Impression

Pierwszy viewport sprzedaje bardzo dobrze: w pięć sekund wiadomo, co Ilya robi, dla kogo, ile kosztuje pierwszy krok i gdzie kliknąć. Największa niewykorzystana szansa to **moment ceny** — zamiast być kulminacją argumentu i miejscem decyzji, jest środkiem długiej strony bez natychmiastowego CTA i bez dowodu obok.

## Cognitive Load

**2 z 8 checklist failures — moderate cognitive load.**

- Single focus: pass
- Chunking: fail — pięć deliverables ma równy ciężar i tworzy listę do przetworzenia
- Grouping: pass
- Visual hierarchy: pass
- One thing at a time: pass
- Minimal choices: pass
- Working memory: fail — dopiero finał mówi, jakie trzy informacje wysłać, a wczesny prefill zawiera jedynie początek zdania
- Progressive disclosure: pass

Problemem nie jest chaos wyborów, tylko koszt uwagi: na 390×844 strona ma około 10 349 px wysokości, a pierwsza sekcja problemowa zaczyna się dopiero około y=1814 px.

## Emotional Journey

Otwarcie tworzy dobre przejście „rozpoznanie bólu → ulga”: ręczna robota zostaje nazwana, a diagram pokazuje bezpieczną ścieżkę, która nie musi kończyć się software’em. To pierwszy peak.

Największa valley wypada przy 9 000 zł. Użytkownik widzi cenę i deliverables, ale nie dostaje obok wyniku klienta, rekomendacji, oczekiwanego czasu odpowiedzi ani CTA. Musi przejść przez wdrożenia i portfolio, zanim znów może działać.

Finał odzyskuje siłę: „wystarczą trzy zdania” obniża lęk, a coral block tworzy dobry końcowy peak. Po kliknięciu kontrola znika, bo cała konwersja zależy od lokalnego klienta poczty.

## What’s Working

- **Świetna klarowność pierwszych pięciu sekund.** Headline mówi o aplikacjach i ręcznej robocie, a lime CTA jest konkretne i dominujące.
- **Diagram materializuje wyróżnik.** „Prostszy proces” kontra „plan + budżet” pokazuje brak presji na wdrożenie zamiast tylko o nim mówić.
- **V1 jest spójne i pamiętliwe.** Ostre ramki, geometria, kontrolowany kolor, mono labels, focus styles, `lang="pl"`, reduced motion i opisowe ARIA tworzą świadomy system.

## Priority Issues

### [P1] Główny flow `mailto:` może umrzeć bez sygnału

**Dlaczego:** bez skonfigurowanego desktopowego klienta poczty kliknięcie może wyglądać jak brak reakcji. Alternatywny adres jest dopiero przy końcu.

**Naprawa:** przy każdym głównym CTA pokazać `hello@snacksncode.dev` i akcję kopiowania albo dodać bardzo krótki inline form. Prefill powinien zawierać trzy pytania z finału.

**Suggested command:** `$impeccable harden`

### [P1] Cena nie jest conversion peak

**Dlaczego:** przy 9 000 zł brakuje sąsiedniego proof, reassurance i CTA. Na mobile kolejne główne CTA jest tysiące pikseli dalej.

**Naprawa:** bezpośrednio pod ceną i deliverables dodać kompaktowy proof strip oraz CTA „Napisz trzy zdania”. Najbliższy operacyjnemu MŚP dowód przenieść przed opcjonalne wdrożenie.

**Suggested command:** `$impeccable layout`

### [P1] Kontrast tekstu w sekcji Sprintu jest kruchy

**Dlaczego:** bazowa biel na cobalt jest blisko progu 4.5:1, a kluczowy body copy schodzi do 72% opacity. Mały lime eyebrow również jest zbyt delikatny.

**Naprawa:** dać body copy pełną jasną barwę, w razie potrzeby minimalnie przyciemnić cobalt i ustawić mały eyebrow w wariancie AA. Zachować paletę V1, zmienić tylko proporcje.

**Suggested command:** `$impeccable audit`

### [P2] Mobilny diagram zużywa za dużo uwagi zbyt wcześnie

**Dlaczego:** diagram ma 43rem wysokości, ma mały tekst i opóźnia „Brzmi znajomo?” do około 1814 px.

**Naprawa:** na mobile użyć zwartego diagramu: trzy pionowe kroki i mała gałąź dwóch wyników. Pełny React Flow zostawić na desktopie.

**Suggested command:** `$impeccable adapt`

### [P2] Proof jest efektowny, ale słabo dopasowany komercyjnie

**Dlaczego:** tylko Better Off ma liczby, a social platform, meal planner i strona księgowa nie dowodzą wprost naprawy procesu w usługowym, handlowym lub produkcyjnym MŚP.

**Naprawa:** każdy case opisać jako „wąskie gardło → interwencja → wynik”. Jeśli nie ma metryk, pokazać konkretną zmianę procesu before/after. Najbliższy case operacyjny dać pierwszy.

**Suggested command:** `$impeccable clarify`

## Persona Red Flags

**Jordan — first-timer:** headline i CTA rozumie natychmiast, ale angielski „Product Clarity Sprint” nie ma prostego polskiego objaśnienia. Wczesny mail prefill nie przekazuje późniejszej instrukcji trzech zdań, więc Jordan może nie wiedzieć, co jest „wystarczająco dobrym” pierwszym kontaktem.

**Riley — stress tester:** w przeglądarce bez klienta poczty nie ma fallbacku. Brakuje informacji o czasie odpowiedzi, uczestnikach sprintu, płatności, dostępności oraz dowodu z branż docelowych. Metryki Better Off nie mają widocznego kontekstu ani atrybucji.

**Casey — distracted mobile:** CTA jest duże i widoczne, ale później trafia na około 10 tys. px strony. Diagram opóźnia problem recognition, przy cenie nie ma CTA, a kliknięcie przenosi do innej aplikacji. Przerwanie tego handoffu oznacza utratę ścieżki.

## Minor Observations

- Desktopowe node labels są małe po `fitView`; diagram szybciej komunikuje koncept niż szczegóły.
- Mobilne CTA w headerze ma tylko `0.72rem`.
- „Web” i „Mobile” w hero rail są capabilities, nie proof.
- Linki w footerze nie mają dotykowych targetów 44 px.
- Szybki mobile scroll może chwilowo zostawić revealowane sekcje blade.
- React Flow attribution wygląda jak interface debris w premium hero.

## Questions to Consider

- Jeśli odwiedzający jest gotowy przy cenie 9 000 zł, dlaczego każemy mu przejść kilka kolejnych sekcji przed działaniem?
- Jaki dowód sprawiłby, że właściciel firmy produkcyjnej lub handlowej powie „on rozwiązał mój rodzaj bałaganu”, a nie tylko „umie budować software”?
- Czy diagram ma być przede wszystkim czytany, czy sygnalizować rygor? Jeśli czytany, dlaczego zawiera najmniejszy ważny tekst na stronie?
- Jeśli `mailto:` nie zadziała, czy obecnie tracimy lead bez żadnego śladu?
