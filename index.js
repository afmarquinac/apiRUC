var datosGlobales;

$(document).ready(function () {
  $("#sRuc").on('change', onChangeDocument);
});

function onChangeDocument() {
  if ($(this).val() != 0) {
    var sDocumento;
    sDocumento = $(this).val()
    var formData = new FormData();
    formData.append("token", "NtwsM8DNwPjbLVDu50IHyJtSiMjV3kuA2nB6pkE3EVbIsci6HmJIh6N3keYo");
    formData.append("ruc", sDocumento);
    var request = new XMLHttpRequest();
    request.open("POST", "https://api.migo.pe/api/v1/ruc");
    request.setRequestHeader("Accept", "application/json");
    request.send(formData);
    request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      datosGlobales = data;
      llenarDatos(JSON.stringify(datosGlobales))
    };
  }
}

function llenarDatos(datosGlobales) {
  let contenido = '';
  let datoVacio = '';
  let html_tbody = '';
  let ContadorFila = 0;
  contenido = $('#divContent');
  contenido.empty();
  html_tbody = "<p>";
  html_tbody = datosGlobales;
  html_tbody += "</p>";
  contenido.append(html_tbody);
}