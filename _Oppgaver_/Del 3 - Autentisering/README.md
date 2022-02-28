# Oppgaver Del 3 - Autentisering

I denne delen av oppgavesettet skal vi sette opp autentisering via Firestore Authentication slik at vi kan registrere nye brukere, logge inn og ut samt beholde informasjon om brukerne. 
Dokumentasjonen om Firebase Authentication finner du [her](https://firebase.google.com/docs/auth).

## Registrere din første bruker med Firebase Authentication

<img alt="Registrer med firebase" src="/resources/registerWithFirebase.png" width="500"/>

Opprett en bruker i Firebase via grensesnittet. Gå inn i Firbare Console og registrer en bruker med e-post og passord.

## Logge inn med e-post og passord

<img alt="Logg inn med epost" src="/resources/loginWithEmail.png" width="500"/>

Implementer støtte for å logge inn i appen med e-post og passord. Du må gjerne utvide eksisterende skjema fra ``Login.js``. Skjemaet finner du på http://localhost:3000/login 

## Registrere bruker med e-post og passord fra appen

<img alt="Registrer bruker med e-post" src="/resources/registerWithEmail.png" width="500"/>

Skriv kode for å registrere en bruker med e-post og passord i Firebase. Bruk registreringsskjemaet fra ``Register.js`` - http://localhost:3000/register


## Registrere en bruker med Google Provider

Skriv kode for å registrere en bruker med Google Provider. Utvid funksjonaliteten i ``Register.js`` til å åpne et vindu med Google-autentisering når man klikker på "Registrer med Google".


## Logge inn med Google Provider
Implementer logg inn med Google. Når man klikker på "Logg inn med Google" skal man kunne loggge inn med sin egen Google konto. Utvid funksjonaliteten i ``Login.js`` til å støtte dette. 


## Logg ut funksjonalitet
Legge inn Logg ut funksjonalitet

## Nullstill passord
Legge inn Passord reset funksjonalitet. Bonus: finner du også ut hvordan du kan pynte på mailen som sendes ut fra Firebase?

## Beholde info om bruker
Legge til en bruker i en Users-collection ved registrering for å holde på informasjon om brukeren.


### Ekstraoppgaver

- Bytt ut den hjemmesnekra log in med [Firebase UI](https://github.com/firebase/firebaseui-web)
- Legg til flere autentiseringsproviders. Github, Twitter, osv.
- Se om du kan oppdatere mailen som sendes ut fra Firebase ved opprettelse av bruker, glemt passord og slikt.
