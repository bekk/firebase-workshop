# Del 1 - Oppsett, hosting og deploy

todo introduksjon

## Steg 1: Opprett Firebase-prosjekt 
1. Gå til [Firebase Console](https://console.firebase.google.com)
2. Logg inn eller opprett bruker
3. Lag et nytt prosjekt
4. Gi prosjektet et navn - eks. "bekk-workshop-quiz" (du kan godt skru av Analytics for prosjektet 😏)
5. Firebase-prosjektet er opprettet! 🎉

## Steg 2: Installer Firebase Tools
1. Åpne terminalen på din maskin og installer Firebase Tools ved å kjøre <code>npm install -g firebase-tools</code> (https://github.com/firebase/firebase-tools)
2. Skriv <code>firebase login</code> og følg instruksjonene i terminalen for å logge inn
3. Du er nå satt opp Firebase lokalt! 🎉

## Steg 3: Klon prosjektet til din maskin
1. Bruk git til å klone prosjektet til din maskin, eventuelt kan prosjektet lastes ned som en .zip
2. Åpne prosjektet i din favoritt idea, for eksempel [Visual Studio Code](https://code.visualstudio.com/)
3. Skriv <code>npm i</code> etterfulgt av <code>npm start</code>
4. Nettleseren åpnes og "Quiz Generator" kjører på [localhost:3000](http://localhost:3000/)
5. Prosjektet kjører nå lokalt! 🎉

## Steg 4: Sett opp Firebase config
1. Åpne en ny terminal (eller bare terminer den kjørende applikasjonen med ctrl+c) og skriv <code>firebase projects:list</code>
2. Kopier Project ID 
3. Åpne filen <code>.firebasesrc</code> og endre default project til din Project ID
4. Skriv <code>firebase deploy</code>
5. Prosjektet kjører nå på internett! 🎉


TODOS: 
* Hadde en del problemer med linteren. Fikk den ikke til å spille på lag. 
* Jeg fikk problemer med  `Parsing error: Cannot read file 'functions/tsconfig.json'`. Vet ikke helt hva det betyr

## Steg 5:
Oppdater Github Secrets fra Google

## Steg 6:
Deploy appen og se til at den kommer opp å kjøre
