$("#mas-button-container").on("click", function (event) {
  let value = {};
  $.ajax({
    dataType: "json",
    async: false,
    url: "http://192.168.16.90:8000/api/solicitudes",
    success: function (result) {

      $.each(result.data, function (index, value) {
        let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
        let source = "images/" + tipo_sangre[value.tipo_sangre - 1] + ".png";

        let cuadros = `<div class="info-container d-flex flex-column">
<div class="header-info-container d-flex justify-content-center center align-items-center">
    <div class="title-header-info-container">
    ${value.nombre_apellido_donatario}
    </div>
    <div class="delete-header-info-container text-center">
        <button class="btn btn-link btn-sm" disabled><i class="bi bi-trash3"></i></button>
    </div>
    <div class="share-header-info-container text-center">
        <button class="btn btn-link btn-sm"><i class="bi bi-arrow-up-right-circle"></i></button>
    </div>
</div>
<div class="main-info-container">
    <table class="table">
        <thead class="d-none">
            <th></th>
            <th></th>
        </thead>
        <tbody>
            <tr>
                <td>Teléfono:</td>
                <td class="text-end fw-bold">${value.telefono_contacto}</td>
            </tr>
            <tr>
                <td>C.I:</td>
                <td class="text-end fw-bold">$</td>
            </tr>
            <tr>
                <td>Lugar de donación:</td>
                <td class="text-end fw-bold">${value.establecimiento}</td>
            </tr>
            <tr>
                <td>RH:</td>
                <td class="text-end"><img src="${source}" class="icono-sangre"></img></td>
            </tr>
            <tr>
                <td>Volúmenes:</td>
                <td class="text-end fw-bold">${value.volumenes_necesarios}</td>
            </tr>
            <tr>
                <td>Fecha límite:</td>
                <td class="text-end fw-bold">${value.fecha_limite}</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="footer-info-container text-center text-uppercase fw-bold">TOKENNNMMNNNNN</div>
</div>`;

$("#main-container").append(cuadros)
      });
    },
  });
});
