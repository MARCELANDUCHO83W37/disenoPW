function cambiarImagen(){
    //menu desplegable
    const select=document.getElementById("imagen");
    //division para mostrar imagen
    const backGroundBox = document.getElementById('backGroundBox');
    //
    const selectImagen = select.value;
    
    if(selectImagen){
        backGroundBox.style.backgroundImage = `url('${selectImagen}')`;
    }else{
        backGroundBox.style.backgroundImage='none';
    }
}