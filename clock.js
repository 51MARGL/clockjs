window.addEventListener('load', () => {
    const div = document.querySelector('.clock');
    const timeDiv = document.createElement('div');
    const timeInnerDiv = document.createElement('div');
    timeDiv.appendChild(timeInnerDiv);
    timeDiv.classList.add('time');
    const dateDiv = document.createElement('div');
    const dateInnerDiv = document.createElement('div');
    dateDiv.appendChild(dateInnerDiv);
    dateDiv.classList.add('date');
    div.appendChild(timeDiv);
    div.appendChild(dateDiv);

    setInterval(() => {
        const date = new Date();
        const fullDate = date.toLocaleDateString('cs-CZ', { hour: "2-digit", minute: "2-digit", second: "2-digit", day: "2-digit", month: "2-digit", year: "2-digit" });
        timeInnerDiv.textContent = fullDate.slice(fullDate.lastIndexOf(" ") + 1);
        timeDiv.setAttribute('data-text', timeDiv.textContent);
        dateInnerDiv.textContent = fullDate.slice(0, fullDate.lastIndexOf(" "));
        dateDiv.setAttribute('data-text', dateDiv.textContent);
    }, 1000);
});