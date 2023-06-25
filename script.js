/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/ 

// get the result element
let result  = document.getElementById("result");

// Input numbers by key pressed
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Calculator logic
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Error, ingrese valores validos")
    }
}

// Reset button
function reset(){
    result.value = "";
}

// Del button
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

/*
    ====================================================
    =================== ALTERAR TEMA ===================
    ====================================================
*/

// Todos los colores para los diferentes temas
const theme = {
    defaul(){
        root.style.setProperty('--background'          , '#3a4764');
        root.style.setProperty('--background-dark'     , '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');
        
        root.style.setProperty('--key-color-top'       , '#ffffff');
        root.style.setProperty('--key-color-bottom'    , '#3a4764');
        root.style.setProperty('--key-background'      , '#eae3dc');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#637097');
        root.style.setProperty('--key-blue-shadow'     , '#404e72');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    dark(){
        root.style.setProperty('--background'          , '#17062a');
        root.style.setProperty('--background-dark'     , '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');
        
        root.style.setProperty('--key-color-top'       , '#f7de43');
        root.style.setProperty('--key-color-bottom'    , '#f7de43');
        root.style.setProperty('--key-background'      , '#331b4d');
        root.style.setProperty('--key-shadow'          , '#851c9c');

        root.style.setProperty('--key-blue-background' , '#56077c');
        root.style.setProperty('--key-blue-shadow'     , '#851c9c');

        root.style.setProperty('--key-red-background'  , '#00decf');
        root.style.setProperty('--key-red-shadow'      , '#00decf');
    }
}

// Obteniendo los elementos de raiz
var root = document.querySelector(':root');

// comprobando las preferencias del tema 
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// cambiando el tema con la preferencia seleccionada
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if(lightThemeMq.matches){
    document.getElementById('btnTheme').value = "2";
    theme.light();    
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();    
}

// Creando la funcion que recibe el valor de entrada
function myFunction_set(val) {
    // recibiendo el valor del tema
    document.getElementById('btnTheme').value = val; 

    // Cambiando el tema con el valor elegido
    if(val == 1){
        theme.defaul();
    } 
     
    else if(val == 2){
        theme.light();
    }
    
    else{
        theme.dark();
    } 
  
}


