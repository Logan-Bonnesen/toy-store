document.getElementById('addToy').addEventListener('click', () => {
    const toyInput = document.getElementById('toyInput')
    fetch('/api/toys', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: toyInput.value })
    })
    .then(response => response.json())
    .then(toy => {
        const toysList = document.getElementById('toysList')
        const li = document.createElement('li')
        li.className = 'list-group-item'
        li.textContent = toy.name;
        toysList.appendChild(li)
        toyInput.value = '';
    })
})