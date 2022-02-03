//creo una variabile costante alla quale do io il valore
const pswNumber = 21;
console.log(pswNumber);;

//Salvo il nome dell'utente in una variabile
const userName = prompt('Come ti chiami?');
console.log(userName);

//Salvo il cognome dell'utente in una variabile
const userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);

//Salvo il colore preferito dell'utente in una variabile
const favoriteColor = prompt('Qual è il tuo colore preferito?');
console.log(favoriteColor);


//collego le stringhe in una unica
document.getElementById('psw').innerHTML += `
                                            ${userName}${userSurname}${favoriteColor}${pswNumber}
                                            `