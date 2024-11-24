
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('fr-FR', options);
    document.getElementById('date-time').textContent = `${time} • ${date}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
