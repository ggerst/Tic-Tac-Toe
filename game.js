var size = parseInt(prompt('mekkora legyen?', '3'), 10);

function createTable() {
    document.querySelector('#board').innerHTML = '';
    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        document.querySelector('#board').appendChild(tr);
    }
}

function checkWin(tableContent) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (tableContent)
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

function checkTable(tableContent) {
    var emptyCells = 0;
    var nyertes = checkWin(tableContent);
    if (nyertes === false) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (tableContent[i][j] === '') {
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
            location.reload();
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

function takeO(coordinates = []) {
    var i = coordinates[0] || 0;
    var j = coordinates[1] || 0;
    if (document.querySelectorAll('tr')[i].children[j].innerHTML === '')
    document.querySelectorAll('tr')[i].children[j].innerHTML = 'o';
    else
    takeO(checkTable());
}

function getTableContent() {
    let tableContent = [];
    for (let i = 0; i < size; i++) {
        tableContent.push([]);
    }
    let sorok = document.querySelectorAll('tr');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            tableContent[i].push(sorok[i].children[j].innerHTML);
        }
    }
    return tableContent;
}

function AIresponse() {
    let tableContent = getTableContent();
    console.log(tableContent);
    setTimeout(function () {
        takeO(checkTable(tableContent));
        tableContent = getTableContent();
        var nyertes = checkWin(tableContent);

        setTimeout(function () {
            if (nyertes !== false) {
                alert(`A nyertes: ${nyertes}`);
                location.reload();
            }
            
        }, 100);
    }, 100);
}

function takeAnX(cell) {
    if (cell.innerHTML != '')
        return;
    else
        cell.innerHTML = 'x';
    AIresponse();
}

function addeventlistener() {
    var cellak = document.querySelectorAll('td');
    for (let i = 0; i < cellak.length; i++) {
        cellak[i].addEventListener('click', function () {
            takeAnX(cellak[i]);
        })
    }
}

createTable();
addeventlistener();


/* próbáltam kiszervezni a sok if-et  de nem sikerült, azért ide elmentem a kódot:

function checkTwoBetween(tableContent, i, j, returnvalue, checkThis) {
    // sorban vizsgál
    if (i - 2 in tableContent && tableContent[i - 1][j] == checkThis && tableContent[i - 2][j] == checkThis)
        return returnvalue;
    if (i + 2 in tableContent && tableContent[i + 1][j] == checkThis && tableContent[i + 2][j] == checkThis)
        return returnvalue;
    if (i - 1 in tableContent && i + 1 in tableContent && tableContent[i - 1][j] == checkThis && tableContent[i + 1][j] == checkThis)
        return returnvalue;
    // oszlopban vizsgál
    if (j - 2 in tableContent[0] && tableContent[i][j - 1] == checkThis && tableContent[i][j - 2] == checkThis)
        return returnvalue;
    if (j + 2 in tableContent[0] && tableContent[i][j + 1] == checkThis && tableContent[i][j + 2] == checkThis)
        return returnvalue;
    if (j - 1 in tableContent[0] && j + 1 in tableContent[0] && tableContent[i][j - 1] == checkThis && tableContent[i][j + 1] == checkThis)
        return returnvalue;
    // átlósan vizsgál -45°-ban
    if (j - 2 in tableContent[0] && i - 2 in tableContent && tableContent[i - 1][j - 1] == checkThis && tableContent[i - 2][j - 2] == checkThis)
        return returnvalue;
    if (j + 2 in tableContent[0] && i + 2 in tableContent && tableContent[i + 1][j + 1] == checkThis && tableContent[i + 2][j + 2] == checkThis)
        return returnvalue;
    if (j - 1 in tableContent[0] && i - 1 in tableContent && j + 1 in tableContent[0] && i + 1 in tableContent && tableContent[i - 1][j - 1] == checkThis && tableContent[i + 1][j + 1] == checkThis)
        return returnvalue;
    // átlósan vizsgál +45°-ban
    if (j - 2 in tableContent[0] && i + 2 in tableContent && tableContent[i + 1][j - 1] == checkThis && tableContent[i + 2][j - 2] == checkThis)
        return returnvalue;
    if (j + 2 in tableContent[0] && i - 2 in tableContent && tableContent[i - 1][j + 1] == checkThis && tableContent[i - 2][j + 2] == checkThis)
        return returnvalue;
    if (j - 1 in tableContent[0] && i - 1 in tableContent && j + 1 in tableContent[0] && i + 1 in tableContent && tableContent[i - 1][j + 1] == checkThis && tableContent[i + 1][j - 1] == checkThis)
        return returnvalue;
}

hívás - win:
checkTwoBetween(tableContent, i, j, '', 'tableContent[i][j]');
hívás - checkTable:
checkTwoBetween(tableContent, i, j, '[i,j]', 'x');
*/