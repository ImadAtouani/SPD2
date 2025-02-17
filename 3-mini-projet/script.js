document.addEventListener("DOMContentLoaded", function () {
    const clock = document.getElementById("clock");
    const reminderList = document.getElementById("reminders");
    const addReminderBtn = document.getElementById("addReminder");
    const alertSound = new Audio("alarm.mp3");

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        clock.textContent = `${hours}:${minutes}:${seconds}`;
        checkReminders(hours, minutes, seconds);
    }

    function checkReminders(currentHour, currentMinute, currentSecond) {
        document.querySelectorAll(".reminder").forEach(reminder => {
            const isChecked = reminder.querySelector(".reminder-check").checked;
            const hour = reminder.querySelector(".reminder-hour").value.padStart(2, "0");
            const minute = reminder.querySelector(".reminder-minute").value.padStart(2, "0");
            const second = reminder.querySelector(".reminder-second").value.padStart(2, "0");
            const note = reminder.querySelector(".reminder-note").value.trim();
            
            if (isChecked && hour === currentHour && minute === currentMinute && second === currentSecond) {
                let isAlertConfirmed = false;

                // Fonction pour jouer l'alarme en boucle
                function playAlert() {
                    alertSound.play();
                    alertSound.onended = function() {
                        if (!isAlertConfirmed) {
                            playAlert(); // Rejoue l'alarme si l'alerte n'est pas confirmée
                        }
                    };
                }

                // Démarrer l'alarme
                playAlert();

                // Afficher l'alerte et arrêter l'alarme lorsque l'utilisateur clique sur OK
                if (note) {
                    alert(`Rappel: ${note}`);
                } else {
                    alert("Rappel sans note !");
                }

                isAlertConfirmed = true;
                alertSound.pause(); // Arrêter l'alarme
                alertSound.currentTime = 0; // Réinitialiser le son
            }
        });
    }

    function addReminder() {
        const reminder = document.createElement("div");
        reminder.classList.add("reminder");
        reminder.innerHTML = `
            <input type="checkbox" class="reminder-check">
            <input type="number" class="reminder-hour" min="0" max="23" placeholder="HH">
            <input type="number" class="reminder-minute" min="0" max="59" placeholder="MM">
            <input type="number" class="reminder-second" min="0" max="59" placeholder="SS">
            <input type="text" class="reminder-note" placeholder="Note (facultatif)">
            <button class="delete-reminder">X</button>
        `;
        reminderList.appendChild(reminder);

        reminder.querySelector(".delete-reminder").addEventListener("click", () => {
            reminder.remove();
        });
    }

    addReminderBtn.addEventListener("click", addReminder);
    setInterval(updateClock, 1000);
    updateClock();
});