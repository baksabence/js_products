import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

const tablaMegfog = document.querySelector("#feladat_1")
tablaMegfog.innerHTML += letrehozTablazat(GYUMOLCSOK)


// 1. feladat
function letrehozTablazat() {
    let txt = "<table>";
    for(let i = 0; i < GYUMOLCSOK.length; i++){
        txt += 
        `
        <tr>
        <td> ${GYUMOLCSOK[i].nev}  </td>
        <td> ${GYUMOLCSOK[i].tomeg}</td>
        <td> ${GYUMOLCSOK[i].ar} </td>
        </tr>
        `
    }
    txt += "</table>"
    console.log(txt);
    return txt;

}

// 2. feladat
const osszesitMegfog = document.querySelector("#feladat_2")
osszesitMegfog.innerHTML += osszesit(GYUMOLCSOK)
function osszesit() {
    let txt = "<p>";
    txt += 
        `
        A gyümölcsök súlya összesen: ${GYUMOLCSOK[0].tomeg + GYUMOLCSOK[1].tomeg + GYUMOLCSOK[2].tomeg + GYUMOLCSOK[3].tomeg} <br>
        A gyümölcsök ára összesen: ${GYUMOLCSOK[0].ar + GYUMOLCSOK[1].ar + GYUMOLCSOK[2].ar + GYUMOLCSOK[3].ar}
        `
    txt += "</p>"
    console.log(txt);
    return txt;


   /* CIKLUSSAL
   
   let osszTomeg = 0
    let osszAr = 0
    let txt = ""
    for (let i = 0; i < GYUMOLCSOK.length; i++) {
        osszTomeg += GYUMOLCSOK[i].tomeg
        osszAr += GYUMOLCSOK[i].ar
    }
    txt += "A gyümölcsök súlya összesen: "+osszTomeg+"g<br>"
    txt += "A gyümölcsök ára összesen:"+osszAr+"Ft"
    return txt


    */
}

// 3. feladat



function vasarol() {
    const vasarlas = document.querySelectorAll("#feladat_1 tr")
    const megfogomAGyumolcsot = document.querySelectorAll("#feladat_3")[0]    
    for(let i = 0; i < GYUMOLCSOK.length; i++){
        vasarlas[i].addEventListener('click', function(){
            megfogomAGyumolcsot.innerHTML += 
            `
            <tr>
            <td> ${GYUMOLCSOK[i].nev}  </td>
            </tr>
            `

        })

        
    }

}

vasarol();


// 4. feladat
function torolEsemeny() {

}