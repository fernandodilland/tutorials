// Limpiar celdas
function Limpiar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulario = hojaActiva.getSheetByName("Formulario");

  var celdasALimpiar = ["B3", "B6", "B8", "B10", "D6", "D8", "D10"]; // Celdas a limpiar
   for (var i=0; i<celdasALimpiar.length; i++){
     formulario.getRange(celdasALimpiar[i]).clearContent();
   }
}

// Guardar celdas
function Guardar(){
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulario = hojaActiva.getSheetByName("Formulario"); // Nombre de hoja del formulario
  var datos = hojaActiva.getSheetByName("Datos"); // Nombre de hoja donde se almacenan datos

  // Celdas de donde se obtendrán los datos a guardar
  var valores = [[formulario.getRange("B6").getValue(),
                 formulario.getRange("B8").getValue(),
                 formulario.getRange("B10").getValue(),
                 formulario.getRange("D6").getValue(),
                 formulario.getRange("D8").getValue(),
                 formulario.getRange("D10").getValue()]];

  // Inyección de datos a hoja donde se almacenan datos
  datos.getRange(datos.getLastRow()+1,1,1,6).setValues(valores); // El "6" se cambia por cantidad de datos a almacenar

  Limpiar(); // Ejecución de función para limpieza de celdas
}

// Buscar
var NUM_COLUMNA_BUSQUEDA = 0;
function Buscar() {

  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulario = hojaActiva.getSheetByName("Formulario"); // Nombre de hoja del formulario
 
  var valor = formulario.getRange("B3").getValue();
  var valores = hojaActiva.getSheetByName("Datos").getDataRange().getValues(); // Nombre de hoja donde se almacenan datos
  for (var i = 0; i < valores.length; i++) {
     var fila = valores[i];
    if (fila[NUM_COLUMNA_BUSQUEDA] == valor) {
      
      formulario.getRange("B6").setValue(fila[0]);
      formulario.getRange("B8").setValue(fila[1]);
      formulario.getRange("B10").setValue(fila[2]);
      formulario.getRange("D6").setValue(fila[3]);
      formulario.getRange("D8").setValue(fila[4]);
      formulario.getRange("D10").setValue(fila[5]);
    }
  }
}

// Actualizar
function Actualizar(){
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulario = hojaActiva.getSheetByName("Formulario"); // Nombre de hoja del formulario
  var datos = hojaActiva.getSheetByName("Datos"); // Nombre de hoja donde se almacenan datos
  
  var valor = formulario.getRange("B3").getValue();
  var valores = hojaActiva.getSheetByName("Datos").getDataRange().getValues(); // Nombre de hoja donde se almacenan datos
  for (var i = 0; i < valores.length; i++) {
    var fila = valores[i];
    if(fila[NUM_COLUMNA_BUSQUEDA] == valor) {
      var INT_R = i+1
      
      var valores1 = [[formulario.getRange("B6").getValue(),
                      formulario.getRange("B8").getValue(),
                      formulario.getRange("B10").getValue(),
                      formulario.getRange("D6").getValue(),
                      formulario.getRange("D8").getValue(),
                      formulario.getRange("D10").getValue()]];
      
      datos.getRange(INT_R, 1, 1, 6).setValues(valores1);
      SpreadsheetApp.getUi().alert('Datos actualizados');

      Limpiar(); // Ejecución de función para limpieza de celdas
    }
  }
}

// Eliminar
function Eliminar() {
  var hojaActiva = SpreadsheetApp.getActiveSpreadsheet();
  var formulario = hojaActiva.getSheetByName("Formulario"); // Nombre de hoja del formulario
  var datos = hojaActiva.getSheetByName("Datos"); // Nombre de hoja donde se almacenan datos
  
  var interface = SpreadsheetApp.getUi();
  var respuesta = interface.alert('¿Está seguro de borrar?',interface.ButtonSet.YES_NO);
  
  // Proceso si el usuario responde
  if (respuesta == interface.Button.YES) {
    
    var valor = formulario.getRange("B3").getValue();
    var valores = hojaActiva.getSheetByName("Datos").getDataRange().getValues(); // Nombre de hoja donde se almacenan datos
    for (var i = 0; i< valores.length; i++) {
      var fila = valores[i];
      if (fila[NUM_COLUMNA_BUSQUEDA] == valor) {
        var INT_R = i+1
        
        datos.deleteRow(INT_R);
        Limpiar(); // Ejecución de función para limpieza de celdas
      }
    }
  }
}
