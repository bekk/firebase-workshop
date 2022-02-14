# Grunnleggende Firebase workshop
I denne workshopen skal vi ta for oss noen av de mest grunnleggende elementene innenfor Firebase-plattformen. Vi kommer til å fokusere på bruke av Hosting, Firestore og Autentisering, men for de som ønsker så kan applikasjonen også utvides med både Functions og Storage. 

## Antatte forkunnskaper
Vi kommer til å anta at deltakerne i denne workshopen har en grunnleggende forståelse for webutvikling generelt, og moderne JavaScript spesielt. Vi kommer til å benytte oss av React og TypeScript, så det er en fordel om du har noe kjennskap til dette. 


## Om applikasjonen
Vi skal lage en Quiz-generator applikasjon. I applikasjonen skal brukerne kunne legge til spørsmål og svar, se en oversikt over sine spørsmål, samt generere en quiz basert på alle de spørsmålene og svarene som er lagt inn i databasen. Vi kommer til å starte uten noe brukerstyring, men vi vil etterhvert utvide slik at det er kun registrerte brukere som kan lage spørsmål og quiz, og at det er brukerne som er admin som kan se en oversikt over det til en hver tid alle spørsmålene som ligger inne. På en slik måte kan man be folk legge inn ulike quiz-spørsmål, og få generert en quiz med et utvalg av spørsmålene i databasen.


# Del 1 - Hosting, deploy og oppsett
Her går vi gjennom hvordan flyten, oppsett, hosting, firebase config, deployment, firebase init etc. fungerer
Alle skal få applikasjonen opp å kjøre på sin Firebase konto før vi går videre

# Del 2 - Firestore
Her går vi gjennom Firestore database Collections, Documents, Data. Snapshot, stream data, Datastruktur etc.

# Del 3 - Autentisering
Vi kobler på Autentisering til applikasjonen. Knytter dette opp mot Users-collection. Går gjennom Authentication-fanen i Firebase. Ser på hva Auth-objektet er. Osv.


# Ekstraoppgaver
- Gjør "Lag Quiz"-funksjonaliteten om til en **Firebase Function** som kalles på. Obs. Dette vil kreve at du oppgraderer Firebase-kontoen din fra Spark til Blaze. https://firebase.google.com/pricing. Det vil i stor grad fortsatt være gratis å bruke, men du må legge til betalingsopplysninger. I tillegg vil vi sterkt anbefale å sette opp varsling dersom det viser seg at månedsregningen går over et visst beløp. Da dette da trolig er noe du bør sjekke opp. 
- Sette opp **Security Rules** for database tilgangen. Det er med Security Rules man sikrer database-tilganger på den riktige måten.
- **Firebase Emulator Suite**. Sett opp Emulator for å ikke lese / skrive direkte fra prod-databasen. https://firebase.google.com/docs/emulator-suite
- Test ut **Firebase Storage**. Hva med å legge til muligheten for at et quiz-spørsmål kan være et bilde? Med Firebase Storage får du tilgjengelig lagringsplass til ditt Firebase prosjekt der brukerne kan laste opp f.eks bilder. 
- Legg til flere kategorier til et Quiz-spørmål. Et spørmsål kan f.eks være av typen Sport, Musikk, Politikk. Deretter kan du utvide funksjonaliteten ved "Lag Quiz" til å også kun gjelde visse kategorier.
- Sett opp mulighet for flere autentiseringsproviders. Firebase, Github, Twitter, Microsoft.
