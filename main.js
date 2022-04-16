const createButton = document.getElementById('create-button');

createButton.addEventListener('click', function() {
    const table = document.getElementById('m-table');

    // xが1から9までこの中身が実行される
    for (let x = 1; x < 10; x++) {
        const tr = document.createElement('tr');

        for (let y = 1; y < 10; y++) {
            const result = x * y;
            const td = document.createElement('td');
            td.textContent = result;
            tr.append(td);
        }
        table.append(tr);
    }
})