{

   const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio" ,
   "Julio", "Agosto", "Septiembre", "Octubre", "Novimbre", "Diciembre"];
   
   for(let i = 0; i < meses.length; i++){
      console.log(meses[i]);
   }
   
   console.log(" \n for of \n");
   for (const mes of meses) {
      console.log(mes);
   }
   
   console.log(" \n for each \n");
   meses.forEach( mes => {
      console.log(mes);
   });
   
   console.log(" \n for each \n");
   meses.forEach((mes, indice, meses) =>
   console.log(indice + ": "+ mes +","+ meses[indice])
   )
   console.log(meses);
}