document.getElementById('spin').addEventListener('click', async () => {
    const res = await fetch('/quest');
    const data = await res.json();
    document.getElementById('quest').textContent = data.quest;
});
