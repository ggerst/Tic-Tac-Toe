var size = parseInt(prompt('mekkora legyen?', '3'), 10);
document.querySelector('#board').innerHTML = '';
for (let i = 0; i < size; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < size; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    document.querySelector('#board').appendChild(tr);
}

function takeAnX(cell) {
    cell.innerHTML = 'x';
    getTableContent();
}

function addeventlistener() {
    var cellak = document.querySelectorAll('td');
    for (let i = 0; i < cellak.length; i++) {
        cellak[i].addEventListener('click', function () {
            takeAnX(cellak[i]);
        })
    }
}

function takeO(coordinates = []) {
    var i = coordinates[0];
    var j = coordinates[1];
    if (document.querySelectorAll('tr')[i].children[j].innerHTML == '')
        document.querySelectorAll('tr')[i].children[j].innerHTML = 'o';
    else
        takeO(checkTwoBetween());
}

function checkWin(tableContent) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (tableContent[i][j] != '') {
                // sorban vizsgál
                if (i - 2 in tableContent && tableContent[i - 1][j] == tableContent[i][j] && tableContent[i - 2][j] == tableContent[i][j])
                    return tableContent[i][j];
                if (i + 2 in tableContent && tableContent[i + 1][j] == tableContent[i][j] && tableContent[i + 2][j] == tableContent[i][j])
                    return tableContent[i][j];
                if (i - 1 in tableContent && i + 1 in tableContent && tableContent[i - 1][j] == tableContent[i][j] && tableContent[i + 1][j] == tableContent[i][j])
                    return tableContent[i][j];
                // oszlopban vizsgál
                if (j - 2 in tableContent[0] && tableContent[i][j - 1] == tableContent[i][j] && tableContent[i][j - 2] == tableContent[i][j])
                    return tableContent[i][j];
                if (j + 2 in tableContent[0] && tableContent[i][j + 1] == tableContent[i][j] && tableContent[i][j + 2] == tableContent[i][j])
                    return tableContent[i][j];
                if (j - 1 in tableContent[0] && j + 1 in tableContent[0] && tableContent[i][j - 1] == tableContent[i][j] && tableContent[i][j + 1] == tableContent[i][j])
                    return tableContent[i][j];
                // átlósan vizsgál -45°-ban
                if (j - 2 in tableContent[0] && i - 2 in tableContent && tableContent[i - 1][j - 1] == tableContent[i][j] && tableContent[i - 2][j - 2] == tableContent[i][j])
                    return tableContent[i][j];
                if (j + 2 in tableContent[0] && i + 2 in tableContent && tableContent[i + 1][j + 1] == tableContent[i][j] && tableContent[i + 2][j + 2] == tableContent[i][j])
                    return tableContent[i][j];
                if (j - 1 in tableContent[0] && i - 1 in tableContent && j + 1 in tableContent[0] && i + 1 in tableContent && tableContent[i - 1][j - 1] == tableContent[i][j] && tableContent[i + 1][j + 1] == tableContent[i][j])
                    return tableContent[i][j];
                // átlósan vizsgál +45°-ban
                if (j - 2 in tableContent[0] && i + 2 in tableContent && tableContent[i + 1][j - 1] == tableContent[i][j] && tableContent[i + 2][j - 2] == tableContent[i][j])
                    return tableContent[i][j];
                if (j + 2 in tableContent[0] && i - 2 in tableContent && tableContent[i - 1][j + 1] == tableContent[i][j] && tableContent[i - 2][j + 2] == tableContent[i][j])
                    return tableContent[i][j];
                if (j - 1 in tableContent[0] && i - 1 in tableContent && j + 1 in tableContent[0] && i + 1 in tableContent && tableContent[i - 1][j + 1] == tableContent[i][j] && tableContent[i + 1][j - 1] == tableContent[i][j])
                    return tableContent[i][j];
            }
        }
    }
    return false;
}

function checkTwoBetween(tableContent) {
    var emptyCells = 0;
    var nyertes = checkWin(tableContent);
    if (nyertes === false) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (tableContent[i][j] == '') {
                    emptyCells += 1;
                    // sorban vizsgál
                    if (i - 2 in tableContent && tableContent[i - 1][j] == 'x' && tableContent[i - 2][j] == 'x')
                        return [i, j];
                    if (i + 2 in tableContent && tableContent[i + 1][j] == 'x' && tableContent[i + 2][j] == 'x')
                        return [i, j];
                    if (i - 1 in tableContent && i + 1 in tableContent && tableContent[i - 1][j] == 'x' && tableContent[i + 1][j] == 'x')
                        return [i, j];
                    // oszlopban vizsgál
                    if (j - 2 in tableContent[0] && tableContent[i][j - 1] == 'x' && tableContent[i][j - 2] == 'x')
                        return [i, j];
                    if (j + 2 in tableContent[0] && tableContent[i][j + 1] == 'x' && tableContent[i][j + 2] == 'x')
                        return [i, j];
                    if (j - 1 in tableContent[0] && j + 1 in tableContent[0] && tableContent[i][j - 1] == 'x' && tableContent[i][j + 1] == 'x')
                        return [i, j];
                    // átlósan vizsgál -45°-ban
                    if (j - 2 in tableContent[0] && i - 2 in tableContent && tableContent[i - 1][j - 1] == 'x' && tableContent[i - 2][j - 2] == 'x')
                        return [i, j];
                    if (j + 2 in tableContent[0] && i + 2 in tableContent && tableContent[i + 1][j + 1] == 'x' && tableContent[i + 2][j + 2] == 'x')
                        return [i, j];
                    if (j - 1 in tableContent[0] && i - 1 in tableContent && j + 1 in tableContent[0] && i + 1 in tableContent && tableContent[i - 1][j - 1] == 'x' && tableContent[i + 1][j + 1] == 'x')
                        return [i, j];
                    // átlósan vizsgál +45°-ban
                    if (j - 2 in tableContent[0] && i + 2 in tableContent && tableContent[i + 1][j - 1] == 'x' && tableContent[i + 2][j - 2] == 'x')
                        return [i, j];
                    if (j + 2 in tableContent[0] && i - 2 in tableContent && tableContent[i - 1][j + 1] == 'x' && tableContent[i - 2][j + 2] == 'x')
                        return [i, j];
                    if (j - 1 in tableContent[0] && i - 1 in tableContent && j + 1 in tableContent[0] && i + 1 in tableContent && tableContent[i - 1][j + 1] == 'x' && tableContent[i + 1][j - 1] == 'x')
                        return [i, j];
                }
            }
        }
        if (emptyCells == 0) {
            alert('döntetlen!');
            return;
        } else {
            var i = Math.floor(Math.random() * size);
            var j = Math.floor(Math.random() * size);
            return [i, j];
        }
    } else {
        alert(`A nyertes: ${nyertes}`);
        location.reload();
    }
}

function getTableContent() {
    var tableContent = [];
    for (var i = 0; i<size; i++) {
        tableContent.push([]);
    }
    var sorok = document.querySelectorAll('tr');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            tableContent[i].push(sorok[i].children[j].innerHTML);
        }
    }
    console.log(tableContent);
    setTimeout(function () {

        takeO(checkTwoBetween(tableContent));

    }, 100);
}

addeventlistener();