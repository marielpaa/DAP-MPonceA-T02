  var imagen = new Image();
  var play;

  /* cuando al boton con id jugar se le da click play=true */
  $("#jugar").click(function(e){
    play = true;

  /* si play=true se le hace un push al dado, esto hace que la imagen se cargue y en un determinado tiempo va a 
  ir cambiando segun la manera en que se defina en el arreglo  */
  function setImage(id) {
    if (play == true){
      dado.push(dado.shift())
      imagen.onload = function() {
      $("#verDado img").attr("src", this.src)
    }
    imagen.src = "img/" + dado[0] + ".png" 
  
  return setTimeout(setImage, 150);
  }}

  /* el div con id dado se muestra, se hace un arreglo que se va a ir recorriendo 123456 son nombres de las dif imagenes
  que hay, y el dado va a ir moviendose en ese orden. Cuando se llama al id ver dado se jala la imagen para mostrarla y 
  la funcion setimage se vuelve true */
  $("#dado").show();
    var dado = ["1", "2", "3", "4", "5", "6"];
  $("#verDado").html("<img src='img/" + dado[0] + ".png'>").show()
    setImage(true);


  /* si play=false se sigue mostrando la imagen en la que se quedo */
  if(play == false){
    $("#verDado").html("<img src='img/" + dado[0] + ".png'>").show()
  }
  });

  /* cunando se le da click al boton con id detener play se vuelve false y hace que el dado deje de moverse*/
  $("#detener").click(function(e){
    play = false;
  });