# UNDER ARBEID

# Grunnleggende Firebase workshop (Firebase v9)
I denne workshopen skal vi ta for oss noen av de mest grunnleggende elementene innenfor Firebase-plattformen. Vi kommer til å fokusere på bruke av Hosting, Firestore og Autentisering, men for de som ønsker så kan applikasjonen også utvides med både Functions og Storage. 

## Antatte forkunnskaper
Vi kommer til å anta at deltakerne i denne workshopen har en grunnleggende forståelse for webutvikling generelt, og moderne JavaScript spesielt. Vi kommer til å benytte oss av React og TypeScript, så det er en fordel om du har noe kjennskap til dette. 

## Forhåndskrav
- Node 14
- Google konto
- Github
- Terminal 
- IDE f.eks VS Code

## Om applikasjonen
Vi skal lage en Quiz-generator applikasjon. I applikasjonen skal brukerne kunne legge til spørsmål og svar, se en oversikt over sine spørsmål, samt generere en quiz basert på alle de spørsmålene og svarene som er lagt inn i databasen. Vi kommer til å starte uten noe brukerstyring, men vi vil etterhvert utvide slik at det er kun registrerte brukere som kan lage spørsmål og quiz, og at det er brukerne som er admin som kan se en oversikt over det til en hver tid alle spørsmålene som ligger inne. På en slik måte kan man be folk legge inn ulike quiz-spørsmål, og få generert en quiz med et utvalg av spørsmålene i databasen.


# Del 1 - Hosting, deploy og oppsett
Her går vi gjennom hvordan flyten, oppsett, hosting, firebase config, deployment, firebase init etc. fungerer
Alle skal få applikasjonen opp å kjøre på sin Firebase konto før vi går videre

# Oppgaver
- Sett opp nytt eget Firebase-prosjekt 

<details>
1. Gå til console.firebase.google.com
2. Logg inn eller opprett bruker
3. Lag et nytt prosjekt
4. Gi prosjektet et navn - eks. "bekk-workshop-quiz"
5. Du kan godt skru av Analytics for prosjektet
6. Firebase-prosjektet er opprettet! 🎉

7. Gå så til terminalen og innstallere Firebase tools <code>$ npm install -g firebase-tools</code> (https://github.com/firebase/firebase-tools)
8. Når Firebase tools er installert kan du skrive <code>firebase login</code> å logge inn
</details>

- Klon prosjektet
- Oppdater Firebase config
- Oppdater Github Secrets fra Google
- Deploy appen og se til at den kommer opp å kjøre


# Del 2 - Firestore
Her går vi gjennom Firestore database Collections, Documents, Data. Snapshot, stream data, Datastruktur etc.

# Oppgaver
- Legg til et dokument i databasen
- Hent et dokument fra databasen
- Endre et dokument fra databasen
- Slett et dokument fra databasen
- Hent alle dokumenter fra databasen. Forsøk å hent dokumentene både som vanlig get og stream.
- Lage en Quiz med et utvalg av spørsmålen fra databasen

# Del 3 - Autentisering
Vi kobler på Autentisering til applikasjonen. Knytter dette opp mot Users-collection. Går gjennom Authentication-fanen i Firebase. Ser på hva Auth-objektet er. Osv. 

# Oppgaver
- Registrere en bruker med epost
- Registrere en bruker med Google Provider
- Legg inn funksjonalitet for å logge inn med epost
- Legg inn funksjonalitet for å logge inn med Google
- Legge inn Logg ut funksjonalitet
- Legge inn Passord reset funksjonalitet. Finner du også ut hvordan du kan pynte på mailen som sendes ut fra Firebase?
- Legge til en bruker i en Users-collection ved registrering for å holde på informasjon om brukeren. 

# Del 4 - Koble tilgangsstyring til funksjonaliteten i applikasjonen
Fram til nå har vi ikke hatt noen kontroll på hvem som kan legge til spørsmål, legge til spørsmål og lage quiz. Samtidig har vi nå lagt til støtte for dette ved å koble på autentisering i applikasjonen. Nå er tiden inne for å knytte disse to sammen, slik at vi får litt kontroll på de som bruker applikasjonen.

# Oppgaver
- Se til at en innlogget bruker får en oversikt over sine spørsmål.
- En admin bruker skal kunne se alle spørsmål som er lagt inn.
- Brukeren som har laget et spørsmål, og en admin skal kunne slette spørsmål.
- Gjør slik at det kun er de som er logget som kan lage en quiz. 

# Ekstraoppgaver
- Gjør "Lag Quiz"-funksjonaliteten om til en **Firebase Function** som kalles på. Obs. Dette vil kreve at du oppgraderer Firebase-kontoen din fra Spark til Blaze. https://firebase.google.com/pricing. Det vil i stor grad fortsatt være gratis å bruke, men du må legge til betalingsopplysninger. I tillegg vil vi sterkt anbefale å sette opp varsling dersom det viser seg at månedsregningen går over et visst beløp. Da dette da trolig er noe du bør sjekke opp. 
- Sette opp **Security Rules** for database tilgangen. Det er med Security Rules man sikrer database-tilganger på den riktige måten. https://firebase.google.com/docs/rules
- **Firebase Emulator Suite**. Sett opp Emulator for å ikke lese / skrive direkte fra prod-databasen. https://firebase.google.com/docs/emulator-suite
- Test ut **Firebase Storage**. Hva med å legge til muligheten for at et quiz-spørsmål kan være et bilde? Med Firebase Storage får du tilgjengelig lagringsplass til ditt Firebase prosjekt der brukerne kan laste opp f.eks bilder. 
- Legg til flere kategorier til et Quiz-spørmål. Et spørmsål kan f.eks være av typen Sport, Musikk, Politikk. Deretter kan du utvide funksjonaliteten ved "Lag Quiz" til å også kun gjelde visse kategorier.
- Sett opp mulighet for flere autentiseringsproviders. Firebase, Github, Twitter, Microsoft.
- Sign-in **anonymously**. Test ut funksjonaliteten rundt anonyme brukere. For disse kan man ha Security Rules selv om de ikke har opprettet en bruker. De kan så bli knyttet opp til en reel bruker, og ha med seg sin data videre. https://firebase.google.com/docs/auth/web/anonymous-auth . 
