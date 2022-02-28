# Oppgaver Del 3 - Autentisering

I denne delen av oppgavesettet skal vi sette opp autentisering via Firestore Authentication slik at vi kan registrere nye brukere, logge inn og ut samt beholde informasjon om brukerne.
Dokumentasjonen om Firebase Authentication finner du [her](https://firebase.google.com/docs/auth).

## Registrere din første bruker med Firebase Authentication

<img alt="Registrer med firebase" src="/resources/registerWithFirebase.png" width="500"/>

Opprett en bruker i Firebase via grensesnittet. Gå inn i Firebase Console og registrer en bruker med e-post og passord. Husk passordet! Du skal logge inn med denne brukeren snart.

> 💡 Du må legge til appen din i Firestore for å få Firestore Authentication til å virke. Dette kan gjøres ved å følge veiledningen under "Project Settings" i [Firebase Console](https://console.firebase.google.com)

## Logge inn med e-post og passord

<img alt="Logg inn med epost" src="/resources/loginWithEmail.png" width="500"/>

Kult! Du har nå registrert en bruker i Firebase. Implementer støtte for å logge inn i appen med e-post og passord. 
Det er litt kode i `Login.js` du kan bruke som utgangspunkt for implementasjonen. 

## Registrere bruker med e-post og passord fra appen

<img alt="Registrer bruker med e-post" src="/resources/registerWithEmail.png" width="500"/>

Det er ikke veldig skalerbart hvis du må registrere alle brukere manuelt 🥵 La oss gjøre noe med det! 
Skriv kode for å registrere en bruker med e-post og passord i Firebase. Det burde gjøre susen. Bruk registreringsskjemaet fra `Register.js` som utgangspunkt.

## Registrere en bruker med Google Provider

Mange syntes det er masete å huske på brukernavn og passord til alle de ulike nettsidene de besøker. Heldigvis har Firebase støtte for Google-registrering! 
Implementer støtte for å registrere seg med sin Google-bruker. Utvid funksjonaliteten i `Register.js` til å åpne et vindu med Google-autentisering når man klikker på "Registrer med Google".

## Logge inn med Google Provider

Implementer logg inn med Google. Når man klikker på "Logg inn med Google" skal man kunne loggge inn med sin egen Google konto. Utvid funksjonaliteten i `Login.js` til å støtte dette.

## Logg ut funksjonalitet

Legge inn Logg ut funksjonalitet

## Nullstill passord

Legge inn Passord reset funksjonalitet. Bonus: finner du også ut hvordan du kan pynte på mailen som sendes ut fra Firebase?

## Beholde info om bruker

Legge til en bruker i en Users-collection ved registrering for å holde på informasjon om brukeren.

### Ekstraoppgaver

- Bytt ut autentiseringskomponentene med med [Firebase UI](https://github.com/firebase/firebaseui-web)
- Legg til flere autentiseringsproviders. Github, Twitter, osv.
- Se om du kan oppdatere mailen som sendes ut fra Firebase ved opprettelse av bruker, glemt passord og slikt.
