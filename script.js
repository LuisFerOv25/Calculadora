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
        alert("Erro! Adicione valores válidos.")
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
    =================== TOGGLE THEME ===================
    ====================================================
*/

// All colors for differents themes
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

// Get the root element
var root = document.querySelector(':root');

// Checking the user themes preference
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// changing the theme with the results above
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

// Create a function for recive the value of range input
function myFunction_set(val) {
    // receiving the input type range value
    document.getElementById('btnTheme').value = val; 

    // changing the theme with the results above
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
function convertTemperature() {
    let temperature = parseFloat(document.getElementById("valorIng").value);
    let unit = document.getElementById("unit").value;
    let result;
    if (unit === "celsius") {
      // Convertir de Celsius a Fahrenheit
      result = (temperature * 9/5) + 32;
      document.getElementById("resultado").value = result;
    } else if (unit === "fahrenheit") {
      // Convertir de Fahrenheit a Celsius
      result = (temperature - 32) * 5/9;
      document.getElementById("resultado").value = result;
    }
  }

  function presion() {
    let input = document.getElementById("valorPre").value;
    let unidad = document.getElementById("unidadP").value;

    let resultado;
    if (unidad === "pascal") {
      // Convertir de Pascal a Bar
      resultado = input / 100000;
      document.getElementById("resulPres").value = resultado.toExponential();
    } else if (unidad === "bar") {
      // Convertir de Bar a Pascal
      resultado = input * 100000;
      document.getElementById("resulPres").value = resultado.toExponential();
    }
  }

  function masa() {
    let seleccion = document.getElementById("uniMs").value;
    let inputValor = parseFloat(document.getElementById("valorMs").value);
    let resultado;

    if (seleccion === "kilogramo") {
      resultado = inputValor * 1000; // Convertir kilogramos a gramos
    } else if (seleccion === "gramo") {
      resultado = inputValor / 1000; // Convertir gramos a kilogramos
    }

    document.getElementById("resulMs").value = resultado;
  }

  function longitud() {
    let input = document.getElementById("valorLong").value;
    let selectedOption = document.getElementById("unidadL").value;

    
    if (selectedOption === "metro") {
      let resul = input * 100; // Convertir de metros a centímetros
      document.getElementById("resulLong").value = resul;
    } else if (selectedOption === "centimetro") {
      let resul = input / 100; // Convertir de centímetros a metros
      document.getElementById("resulLong").value = resul;
    }
  }
  