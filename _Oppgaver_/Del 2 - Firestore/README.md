# Oppgaver Del 2 - Firestore

Vi skal nå begynne å få vår web-applikasjon til å snakke med vår ferske Firestore database.

## Legg til et dokument

Første oppgave blir å legge til et nytt spørsmål i din Firestore database fra koden.

En bruker skal altså kunne skrive inn et spørsmål og svar på nettsiden, og så skal dette bli lagt inn i databasen.

Se til spørsmålet du legger inn dukker opp i din Firestore collection

## Hent et dokument fra databasen

Når du går inn på url'en ( http://localhost:3000/question/{id} ) med id tilsvarende det spørsmålet du nettopp la til i Firestore-databasen, så skal dette spørsmål bli fylt ut i input-feltene.

## Endre et dokument fra databasen

Legg til mulighet for å kunne endre på et eksisterende spørsmål i databasen. Dersom du går inn på et spørsmål som allerede finnes og gjør en endring og lagrer dette. Så skal feltene i databasen tilhørende dette dokumentet oppdatere seg.

## Slett et dokument fra databasen

Lag funksjonalitet for å slette et spørsmål fra databasen.

## Hent mange dokumenter fra databasen.

Fram til nå har vi forholdt oss til et og et spørsmål, men nå ønsker vi å gjøre slik at du kan liste opp alle de spørsmålene som du har lagt inn.

## Lage en Quiz

Lag en quiz med et utvalg av spørsmålene fra databasen. Foreløpig vil jo denne quiz'en kun bestå av dine spørsmål, men etterhvert i workshopen så skal vi få koble på autentisering, og da vil vi få mulighet til å generere en Quiz med spørsmål som også er lagt inn av andre brukere.

Du kan jo f.eks la brukeren som skal generere en quiz få mulighet til å velge hvor mange spørsmål hen vil ha listet opp.

## Ekstraoppgaver

- Sett opp henting av dokumenter med real-time oppdatering.
- Legg til tidspunkt for når dokumentet ble laget og når det ble oppdatert
- Legg til flere felt per spørsmåls-dokument. F.eks kategori.
- Sett en custom id til et spørsmåls-dokument
- Hent ut kun de spørsmål som er laget etter et gitt tidspunkt
