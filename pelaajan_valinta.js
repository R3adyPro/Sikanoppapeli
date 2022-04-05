const pelaajat = [];
const pelaajaId = [];
let maxPelaajaa = 4
const pisteet = [0, 0, 0, 0]



id = 1;
max = 0;
peliMuoto = 0;
noppa = 0;


function noppanNumero(){
    noppa = Math.floor(Math.random() * 6) + 1;
}


//Yhden nopan pelimuoto
function Pelaa(){
    noppanNumero();
    document.getElementById('noppa').innerHTML = noppa;
}


//Pelaajien valinta ja pelimuodon valinta
function Pelaajat(){
    p = 1;
    for(i=0; i<pelaajat.length; i++){
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

function yksNoppa(){
    peliMuoto = 1;
}
function kaksNoppaa(){
    peliMuoto = 2;
}

