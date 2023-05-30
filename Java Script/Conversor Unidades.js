// conversor de unidades 

consideraciones:
// 1 Litro (lts) = 100 Centilitros (ctls) = 33.814 Onzas (oz) = 10 DeCi litros (Dclts) = 0.26 Galones (Gal)

function convertirLtsaClts(litros) {
    let centilitros = litros * 100;
    console.log(centilitros);

}

function convertirLtsaOnzas(litros) {
    let onzas = litros * 33.814;
    console.log(onzas);
}
function convertirLtsaDclts(litros) {
    let decilitros = litros * 10
    console.log(decilitros);
}

function convertirLtsaGal(litros) {
    let galones = litros * 0.378
    console.log(galones);

}
convertirLtsaClts(250);

convertirLtsaOnzas(450);


