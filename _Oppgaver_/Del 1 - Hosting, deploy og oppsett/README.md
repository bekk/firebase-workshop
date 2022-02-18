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

## Steg 3A:

1. For å koble ditt lokale prosjekt med firebase må vi gjøre en rask konfigurering. Det starter vi ved å skrive inn
   <code>firebase init</code>.
2. Følg instruksene, på første steg velger <code>Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys</code>
3. Velg kontoen du har registrert firebaseprosjektet til.
4. Som ditt public directory skriver du <code>build</code>. Her vil vår nettside bli bygget til.
5. Velg <code>y</code> til at det skal være en single-page-application.
6. Svar <code>N</code> til Github actions oppsettet.
7. Hvis du får beskjed om at <code>File build/index.html already exists</code> svarer du <code>N</code> til spørsmålet om du skal overskrive filen.
8. Og med det er du koblet opp mot firebase 🎉!

## Steg 4: Send appen ut på internett

1. Åpne en ny terminal (eller bare terminer den kjørende applikasjonen med ctrl+c) og skriv <code>firebase projects:list</code>
2. Åpne filen <code>.firebasesrc</code> og se til at Project ID samsvarer med ditt nyopprettede prosjekt.
3. Skriv <code>npm build</code> etterfulgt av <code>firebase deploy --only hosting</code>
4. Prosjektet kjører nå på internett! 🎉
