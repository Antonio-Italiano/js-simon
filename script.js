/---- ELEMENTI DOM ----/  
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const wishesElement = document.getElementById('wishes');
// console.log(days, hours, minutes, seconds);

// CREO UNA VARIABILE CON PUNTO DI RIFERIMENTO DEL NATALE
const christmasDay = new Date('December 25 2022');
// console.log(christmasDay);

/---- TRASFORMO LA VARIABILE IN MILLISECONDI ----/  
const christmasDayMs = christmasDay.getTime();
// console.log(christmasDayMs);
const secondsMs = 1000;
const minutesMs = 60 * secondsMs;
const hoursMs = 60 * minutesMs;
const daysMs = 24 * hoursMs;
// console.log(secondsMs, minutesMs, hoursMs, daysMs);


/---- FUNZIONI ----/
const countdown = setInterval => {
    // CREO VARIABILE DEL GIORNO CORRENTE
    const currentDay = new Date().getTime();
    // console.log(currentDay);
    const missingTime = christmasDayMs - currentDay;
    // console.log(missingTime)
    
    // CALCOLO LA DIFFERENZA DI TEMPO
    const missingDay = Math.floor(missingTime / daysMs);
    const missingHours = Math.floor((missingTime % daysMs) / hoursMs);
    const missingMinutes = Math.floor((missingTime % hoursMs) / minutesMs);
    const missingSeconds = Math.floor((missingTime % minutesMs) / secondsMs);
    // console.log(missingSeconds)

    // CONDIZIONE PER FAR TERMINARE IL COUNTDOWN 
    if (missingDay != 0 || missingHours != 0 || missingMinutes != 0 || missingSeconds != 0) {

        // STAMPO IN PAGINA IL RISULTATO
        daysElement.innerText = missingDay;
        hoursElement.innerText = missingHours;
        minutesElement.innerText = missingMinutes;
        secondsElement.innerText = missingSeconds;
    } else {
        clearInterval(countdown);
        wishesElement.innerText = 'TANTI AUGURI DI BUON NATALE'
    }

    
}

const counterCountdown = setInterval(countdown, 1000);