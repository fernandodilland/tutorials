function Limpiar() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var formS = ss.getSheetByName("Formulario");

  var rangesToClear = ["C4", "C6", "C8", "C10"];
   for (var i=0; i<rangesToClear.length; i++){
     formS.getRange(rangesToClear[i]).clearContent();
   }
}

function Guardar(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var formS = ss.getSheetByName("Formulario");
  var dataS = ss.getSheetByName("Datos");

  var values = [[formS.getRange("C4").getValue(),
                 formS.getRange("C6").getValue(),
                 formS.getRange("C8").getValue(),
                 formS.getRange("C10").getValue()]];
  dataS.getRange(dataS.getLastRow()+1,1,1,4).setValues(values);
  Limpiar();
}
