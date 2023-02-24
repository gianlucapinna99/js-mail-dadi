"user strict"

// Lista di email consentite
const allowedEmails = ['esempio1@example.com', 'esempio2@example.com', 'esempio3@example.com'];

// Chiedi all'utente la sua email
const userEmail = prompt('Inserisci la tua email:');

// Controlla se l'email è presente nella lista di accesso
if (allowedEmails.includes(userEmail)) {
// L'utente è autorizzato ad accedere
  console.log('Accesso consentito per l\'email ' + userEmail);
} 

else {
  // L'utente non è autorizzato ad accedere
  console.log('Accesso negato per l\'email ' + userEmail);
}