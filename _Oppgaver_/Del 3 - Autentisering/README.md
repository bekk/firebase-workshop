# Oppgaver Del 3 - Autentisering

I denne delen av oppgavesettet skal vi sette opp autentisering via Firestore Authentication slik at vi kan registrere nye brukere, logge inn og ut samt beholde informasjon om brukerne. 
Dokumentasjonen om Firebase Authentication finner du [her](https://firebase.google.com/docs/auth).

## Steg 1 Registrere en bruker med e-post

**Oppgave 1:** 

Opprett en bruker via Firebase-grensesnittet. Gå inn i Firebase Console og registrer en bruker med e-post og passord.

**Oppgave 2:**

Skriv kode for å registrere en bruker med e-post og passord i Firebase. Du finner skjemaet på http://localhost:3000/register (`Register.js`)

![Registrer bruker med e-post](/resources/registerWithEmail.png)

## Steg 2 Registrere en bruker med Google Provider

**Oppgave 1:**

Opprett en bruker med Google Provider via Firebase-grensesnittet. Gå inn i Firebase Console og registrer en konto med Google.

**Oppgave 2: **

Skriv kode for å registrere en bruker med Google Provider. 


## Steg 3 Logge inn med e-post

- Legg inn funksjonalitet for å logge inn med epost

## Steg 4 Logge inn med Google

- Legg inn funksjonalitet for å logge inn med Google

## Steg 5 Logg ut funksjonalitet

- Legge inn Logg ut funksjonalitet

## Steg 6 Nullstill passord

- Legge inn Passord reset funksjonalitet. Finner du også ut hvordan du kan pynte på mailen som sendes ut fra Firebase?

## Steg 7 Beholde info om bruker

- Legge til en bruker i en Users-collection ved registrering for å holde på informasjon om brukeren.


### Ekstraoppgaver

- Bytt ut den hjemmesnekra log in med [Firebase UI](https://github.com/firebase/firebaseui-web)
- Legg til flere autentiseringsproviders. Github, Twitter, osv.
- Se om du kan oppdatere mailen som sendes ut fra Firebase ved opprettelse av bruker, glemt passord og slikt.
