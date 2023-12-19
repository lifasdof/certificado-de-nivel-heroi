let PontosRanqueada= contador(60,0)
    function contador (vitoria,derrota){
    let somatorio = (vitoria - derrota)
    return somatorio
}   
if(PontosRanqueada <= 10 ){
console.log("seu elo é ferro")
}else if( PontosRanqueada <= 20 ){
    console.log("seu elo igual a bronze")
}else if(PontosRanqueada <= 50){
    console.log("seu elo igual a prata")
}else if( PontosRanqueada <=80 ){
    console.log("seu elo igual a ouro")
}else if(PontosRanqueada <= 90){
    console.log("seu elo igual a diamante")        
}else console.log("seu elo igual a imortal")