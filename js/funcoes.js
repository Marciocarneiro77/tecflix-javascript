let filmes = ["Batman v Superman.jpg" , "LigaJustiça.jpg" , "Cavaleiro-das-trevas.jpg","batmankeaton.jpg"];
//console.log(filmes);
//console.log(filmes.length);

//console.log(filmes[0]);
//console.log(filmes[1]);
//console.log(filmes[2]);

//let quantidadeFilmes = 3;
//while(quantidadeFilmes > 0){
   // console.log(filmes[quantidadeFilmes]);
   //quantidadeFilmes --;
//}
//filmes.push("liga da Justiça");


for(let i = 0; i < filmes.length; i++){
    document.write("<img src='img/" + filmes[i] +"'>");

}