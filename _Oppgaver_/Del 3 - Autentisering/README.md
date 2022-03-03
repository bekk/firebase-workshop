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

Nice! Bra jobba! Nå er det på tide å logge inn med Google kontoen. Implementer logg inn med Google når man klikker på "Logg inn med Google"-knappen. 
Utvid funksjonaliteten i `Login.js`. 

## Logg ut funksjonalitet

Når man kan logge inn, må man kunne logge ut også.. Er du ikke enig? 😏 Legg inn funksjonalitet for å kunne logge ut av kontoen igjen.

## Nullstill passord

Det er helt vanlig å glemme passord! Legg til kode som lar deg nullstille passordet. 

## Beholde info om bruker

Nå begynner det å bli spennende. Lag en ny Firestore-collection for brukerinformasjon. Når en bruker registrerer seg i appen skal de bli lagret her. 
Det fikser du! 

### Ekstraoppgaver 💅

- Se om du kan oppdatere mailen som sendes ut fra Firebase ved opprettelse av bruker, glemt passord og slikt.
- Legg til flere autentiseringsproviders. Github, Twitter, osv.
- Bytt ut autentiseringskomponentene med med [Firebase UI](https://github.com/firebase/firebaseui-web)
