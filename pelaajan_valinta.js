const pelaajat = [];
const pelaajaId = [];
let maxPelaajaa = 4

id = 1;
max = 0;
noppa = 0;

function lisaaPelaaja(){
    var pelaajanNimi = document.getElementById('nimi').value;
    var onkoTyhja = pelaajanNimi.length;
    const pelaajaIso = pelaajanNimi.charAt(0).toUpperCase() + pelaajanNimi.slice(1);
    console.log(pelaajaId)
    console.log(pelaajat)
    if(onkoTyhja > 1 && max < maxPelaajaa){
        pelaajat.push(pelaajaIso);
        pelaajaId.push(id)
        document.getElementById('pelaaja' + id).innerHTML = id + '. ' + pelaajaIso;
        id = id + 1;
        max = max + 1;
        console.log(noppa)
    }
    else if(maxPelaajaa == 4){
        alert('Pelaaja raja saavutettu');
    }
}

function yksNoppa(){
    noppa = 1;
}
function kaksNoppaa(){
    noppa = 2;
}