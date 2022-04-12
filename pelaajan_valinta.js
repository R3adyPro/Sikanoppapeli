const pelaajat = [];
const pelaajaId = [];
let maxPelaajaa = 4
const pisteet = [0, 0, 0, 0]
const x = document.getElementById('testi').rows[1].cells;




id = 1;
max = 0;
peliMuoto = 0;
noppa = 0;
yht = 0;
lopeta = 0;
i = 0;
cell = 0
pistemaara = 0;
doubles = 0;



function noppanNumero(){
    noppa = Math.floor(Math.random() * 6) + 1;
    noppa2 = Math.floor(Math.random() * 6) + 1;
}


//Yhden nopan pelimuoto
function Pelaa(){
    if(peliMuoto == 1){
        noppanNumero();
        onkoVoittoa();
        lisaapiste();
        document.getElementById('numero').innerHTML = noppa;
        if(lopeta == 1){
            x[cell].innerHTML = pisteet[cell] + yht;
            pisteet[cell] = pisteet[cell] + yht;
            yht = 0;
            noppa = 0;
            lopeta = 0;
            if(cell < (max-1)){
                cell++
            }
            else {
                cell = 0;
            }
        }
        else if(noppa == 1){
            yht = 0;
            noppa = 0;
            lopeta = 0;
            if(cell < (max-1)){
                cell++
            }
            else {
                cell = 0;
            }
        }
        else if(noppa != 1){
            yht = yht + noppa;
            document.getElementById('yhteen').innerHTML = yht;
        }
    }
    else if(peliMuoto == 2){
        noppanNumero();
        onkoVoittoa();
        lisaapiste();
        document.getElementById('numero').innerHTML = noppa;
        document.getElementById('numero2').innerHTML = noppa2;
        if(noppa == 1 && noppa2 == 1){
            yht = yht + 25;
            document.getElementById('yhteen').innerHTML = yht;
        }
        else if(noppa == 1 || noppa2 == 1 || lopeta == 1){
            x[cell].innerHTML = pisteet[cell] + yht;
            pisteet[cell] = pisteet[cell] + yht;
            yht = 0;
            noppa = 0;
            noppa2 = 0;
            lopeta = 0;
            doubles = 0;
            if(cell < max -1){
                cell++
            }
            else {
                cell = 0;
            }
        }
        else if(noppa == noppa2){
            yht = yht + ((noppa + noppa2)* 2);
            document.getElementById('yhteen').innerHTML = yht;
            doubles = doubles + 1;
        }
        else if(noppa != 1 || noppa2 != 1){
            yht = yht + noppa + noppa2;
            document.getElementById('yhteen').innerHTML = yht;
            doubles = 0;
        }
        else if(doubles = 3){
            doubles = 0;
        }
    }
}


//Pelaajien valinta ja pelimuodon valinta
function Pelaajat(){
    p = 1;
    for(i=0; i<max; i++){
        document.getElementById('pelaajat' + p).innerHTML = pelaajat[i];
        document.getElementById('pisteet' + p).innerHTML = pisteet[i];
        p++;
    }
    id = 1;
}

function lisaaPelaaja(){
    var pelaajanNimi = document.getElementById('nimi').value;
    var onkoTyhja = pelaajanNimi.length;
    const pelaajaIso = pelaajanNimi.charAt(0).toUpperCase() + pelaajanNimi.slice(1);
    if(onkoTyhja > 1 && max < maxPelaajaa){
        pelaajat.push(pelaajaIso);
        pelaajaId.push(id)
        document.getElementById('pelaaja' + id).innerHTML = id + '. ' + pelaajaIso;
        id = id + 1;
        max = max + 1;
    }
    else if(maxPelaajaa == 4){
        alert('Pelaaja raja saavutettu');
    }
}

function lisaapiste(){
    let piste = document.getElementById('pistemaara').value;
    let tarkistettuPiste =  /^[0-9-.,]+$/.test(piste);
    if(tarkistettuPiste == false){
        alert('Vain numeroita')
    }
    else if(tarkistettuPiste == true){
        pistemaara = piste
    }
}

function onkoVoittoa(){
    for(i=0; i < 4; i++){
        if(pisteet[i] >= pistemaara){
            console.log(pisteet)
            alert('Pelaaja ' + pelaajat[i] + ' on voittanut pelin')
        }
    }
}

function yksNoppa(){
    peliMuoto = 1;
}
function kaksNoppaa(){
    peliMuoto = 2;
}
function lopetaPeli(){
    lopeta = 1;
}

