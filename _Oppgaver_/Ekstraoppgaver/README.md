# Ekstraoppgaver

Når man først har begynt å ta i bruk Firebase, så finnes det veldig mange områder å utforske videre. Under er forslag til noen oppgaver som du kan se nærmere på dersom du har tid og lyst til å utvikle denne applikasjonen videre.

## Eksempler på oppgaver

🚓 Sette opp **Security Rules** for database tilgangen. Det er med Security Rules man sikrer database-tilganger på den riktige måten. https://firebase.google.com/docs/rules

💾 **Firebase Emulator Suite**. Sett opp Emulator for å ikke lese / skrive direkte fra prod-databasen. https://firebase.google.com/docs/emulator-suite

📦 Test ut **Firebase Storage**. Hva med å legge til muligheten for at et quiz-spørsmål kan være et bilde? Med Firebase Storage får du tilgjengelig lagringsplass til ditt Firebase prosjekt der brukerne kan laste opp f.eks bilder.

📚 Legg til flere kategorier til et Quiz-spørmål. Et spørmsål kan f.eks være av typen Sport, Musikk, Politikk. Deretter kan du utvide funksjonaliteten ved "Lag Quiz" til å også kun gjelde visse kategorier.

🔐 Sett opp mulighet for flere autentiseringsproviders. Firebase, Github, Twitter, Microsoft.

🤫 Sign-in **anonymously**. Test ut funksjonaliteten rundt anonyme brukere. For disse kan man ha Security Rules selv om de ikke har opprettet en bruker. De kan så bli knyttet opp til en reel bruker, og ha med seg sin data videre. https://firebase.google.com/docs/auth/web/anonymous-auth .

🏋️ Gjør "Lag Quiz"-funksjonaliteten om til en **Firebase Function** som kalles på. Obs. Dette vil kreve at du oppgraderer Firebase-kontoen din fra Spark til Blaze. https://firebase.google.com/pricing. Det vil i stor grad fortsatt være gratis å bruke, men du må legge til betalingsopplysninger. I tillegg vil vi sterkt anbefale å sette opp varsling dersom det viser seg at månedsregningen går over et visst beløp. Da dette da trolig er noe du bør sjekke opp.
