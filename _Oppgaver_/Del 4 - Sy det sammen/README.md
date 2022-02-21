# Oppgaver Del 4 - Sy det sammen

Vi har nå kommet til del 4 av denne workshopen, der vi skal sy sammen det vi har laget. Nå har vi funksjonalitet for å legge til og fjerne spørsmål, samt se en oversikt over disse. I tillegg har vi en autentiseringsløsning på plass. Og da passer det å begynne å se på hvordan vi kan koble dette sammen.

_Som en hovedregel skal tilgangsstyring til Firestore-dokumenter gjøres via `rules.json` (https://firebase.google.com/docs/firestore/security/get-started#writing_rules), men da vi ikke rekker å gå gjennom alt i denne workshopen kommer vi til å forenkle tilgangskontrollen. Det er derimot sterkt anbefalt å se nærmere på security rules om man ønsker en mer fullskala applikasjon i produksjon._

## En innlogget bruker skal kun se sine spørsmål

En innlogget bruker må kunne se de spørsmålene som brukeren har lagt inn, og ikke de andre sine spørsmål.

## En admin-bruker skal kunne se alle spørsmål som er lagt inn

En bruker av typen admin skal kunne ha full kontroll i applikasjonen og kunne administrere alle spørsmål som er lagt inn i databasen.

## Både brukeren som har lagt inn spørsmålet og admin-brukere, skal kunne slette et spørsmål

Både de som har lagt inn spørsmål og admin brukere skal kunne slette spørsmål som er lagt inn.

## Kun innloggede brukere skal kunne lage en quiz

Vi ønsker ikke at hvem som helst skal kunne lage en quiz. Derfor kan vi sette en begrensning om at kun de som er innlogget er de som kan lage en quiz.

## Ekstraoppgave

- Sette opp **Security Rules** for database tilgangen. Det er med Security Rules man sikrer database-tilganger på den riktige måten. https://firebase.google.com/docs/rules
