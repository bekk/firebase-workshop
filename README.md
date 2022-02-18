# UNDER ARBEID

# Grunnleggende Firebase workshop (Firebase v9)

I denne workshopen skal vi ta for oss noen av de mest grunnleggende elementene innenfor Firebase-plattformen. Vi kommer til å fokusere på å bli kjent med Hosting, Firestore og Autentisering. Og for de aller ivrigste, så kan denne applikasjonen utvides videre med Firebase Functions og Firebase Storage.

## Om applikasjonen

Vi skal lage en Quiz generator applikasjon. I applikasjonen skal brukerne kunne legge til spørsmål og svar, se en oversikt over sine spørsmål, samt generere en Quiz basert på alle de spørsmålene og svarene som er lagt inn i databasen. Vi kommer til å starte uten noe brukerstyring, men vi vil etterhvert utvide slik at det er kun registrerte brukere som kan lage spørsmål og quiz, og at det er brukerne som er admin som kan se en oversikt over det til en hver tid alle spørsmålene som ligger inne. På en slik måte kan man be folk legge inn ulike quiz-spørsmål, og få generert en quiz med et utvalg av spørsmålene i databasen.

## Antatte forkunnskaper

Vi kommer til å anta at deltakerne i denne workshopen har en grunnleggende forståelse for webutvikling generelt, og moderne JavaScript spesielt. Vi kommer til å benytte oss av React og Javascript, så det er en fordel om du har noe kjennskap til dette.

## Forhåndskrav

- Node 16
- Google konto
- Github
- Terminal
- IDE f.eks VS Code

# Del 1 - Hosting, deploy og oppsett

Vi vil i først del fokusere på å sette opp en ny Firebase-applikasjon, klone denne applikasjonen, slik at vi kan jobbe videre på den som utgangspunkt. Knytte ditt Firebase-prosjekt til din versjon av Quiz generatoren og deploye applikasjonen slik at den dukker opp på din Firebase-konto.

[Oppgaver - Del 1](/_Oppgaver_/Del%201%20-%20Hosting,%20deploy%20og%20oppsett/README.md)

# Del 2 - Firestore

Her går vi gjennom Firestore database Collections, Documents, Data. Snapshot, stream data, Datastruktur etc.

[Oppgaver - Del 2](/_Oppgaver_/Del%202%20-%20Firestore/README.md)

[Løsningsforslag - Del 2](/_Løsningsforslag_/Del%202%20-%20Firestore/README.md)

# Del 3 - Autentisering

Vi kobler på Autentisering til applikasjonen. Knytter dette opp mot Users-collection. Går gjennom Authentication-fanen i Firebase. Ser på hva Auth-objektet er. Osv.

[Oppgaver - Del 3](/_Oppgaver_/Del%203%20-%20Autentisering/README.md)

[Løsningsforslag - Del 3](/_Løsningsforslag_/Del%302%20-%20Autentisering/README.md)

# Del 4 - Sy det sammen

Fram til nå har vi ikke hatt noen kontroll på hvem som kan legge til spørsmål, legge til spørsmål og lage quiz. Samtidig har vi nå lagt til støtte for dette ved å koble på autentisering i applikasjonen. Nå er tiden inne for å knytte disse to sammen, slik at vi får litt kontroll på de som bruker applikasjonen.

[Oppgaver - Del 4](/_Oppgaver_/Del%204%20-%20Sy%20det%20sammen/README.md)

[Løsningsforslag - Del 4](/_Løsningsforslag_/Del%204%20-%20Sy%20det%20sammen/README.md)

# Ekstraoppgaver

For de som har lyst til på flere oppgaver.

[Oppgaver - Del 4](/_Oppgaver_/Ekstraoppgaver/README.md)
