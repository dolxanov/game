let number = 0

function Mix() {
number++
 
let figure = document.getElementById('div1');
    
figure.innerHTML = number;
}

function start() {
    number = 0
  begin =  setInterval("Mix()", 1000);
}


function stop() {
    clearInterval (begin);
}






let first = [];
let last = [];
let count = 1;



for (i = 0; i < 16; i++) {
    first[i] = i + 1;
}
for (let i = 0; i < 16; i++) {
    let random = Math.floor(Math.random() * first.length);
    last[i] = first[random];
    first.splice(random, 1)

    tbl.innerHTML = last;

}
//  console.log(tbl)


table()
function table() {
    let ind = 0;
    let tbl = document.getElementById('tbl');
    let data = '';
    for (let i = 0; i < 4; i++) {
        data += ` <tr>`;

        for (let j = 0; j < 4; j++) {
            data += `<td id="td${last[ind]}" onclick="check(${last[ind]})">${last[ind]}</td>`;
            ind++;
        }
        data += `</tr>`
    }

    tbl.innerHTML = data;

}

function check(num) {
    let td = document.getElementById('td' + num);
    if (num === count) {
        count++
        td.style.backgroundColor = 'green'
    } else {
        td.style.backgroundColor = 'red'
        confirm('Yeniden Bashla')
    }
    
}


