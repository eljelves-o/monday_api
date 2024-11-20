function editarFila(id) 
{
    //==================== ELEMENTOS EN BASE AL ID =====================
    const nombreProducto = document.getElementById(id).textContent;
    const documentEstado = document.getElementById('status-'+id);
    //
    const estadoCotizacion = documentEstado.textContent;
    const styleEstadoCotizacion = documentEstado.style;
    //
    const correoResponsable = document.getElementById('correo_electr_nico__1-'+id).textContent;
    const fechaCreacion = document.getElementById('date-'+id).textContent.split(' ')[0];
    const marcaProducto = document.getElementById('label__1-'+id).textContent;
    const cantidadProducto = document.getElementById('n_meros__1-'+id).textContent;
    const tipoProducto = document.getElementById('label_1__1-'+id).textContent;
    const proveedor = document.getElementById('label9__1-'+id).textContent;
    const OC = document.getElementById('n_meros_1__1-'+id).textContent;
    let archivoOC = document.getElementById('texto6__1-'+id).textContent;
    if (archivoOC == "OC") {
        archivoOC = document.querySelector('#texto6__1-'+id+' a').href;
    }

    let cotizacionProveedor = document.getElementById('texto11__1-'+id).textContent;
    if (cotizacionProveedor == "Cotizacion") {
        cotizacionProveedor = document.querySelector('#texto11__1-'+id+' a').href;
    }
    const observacion = document.getElementById('texto1__1-'+id).textContent;
    const documentEstadoOC = document.getElementById('estado_1__1-'+id);
    //
    const estadoOC = documentEstadoOC.textContent;
    const styleEstadoOC = documentEstadoOC.style;
    //

    //=====================  INPUT DEL FORMULARIO  ======================
    const formId = document.getElementById('id')
    const formNombreProducto = document.getElementById('nombre');
    const formEstadoCotizacion = document.getElementById('estado');
    //
    formEstadoCotizacion.style.backgroundColor = styleEstadoCotizacion.backgroundColor;
    formEstadoCotizacion.style.color = styleEstadoCotizacion.color;
    //
    const formCorreoResponsable = document.getElementById('correo');
    const formFechaCreacion = document.getElementById('fecha');
    const formMarcaProducto = document.getElementById('marca');
    const formCantidadProducto = document.getElementById('cantidad');
    const formTipoProducto = document.getElementById('tipo');
    const formProveedor = document.getElementById('proveedor');
    const formOC = document.getElementById('oc');
    const formArchivoOC = document.getElementById('archivo-oc');
    const formCotizacionProducto = document.getElementById('cotizacion');
    const formObservacion = document.getElementById('observacion');
    const formEstadoOC = document.getElementById('estado-oc');
    //
    formEstadoOC.style.backgroundColor = styleEstadoOC.backgroundColor;
    formEstadoOC.style.color = styleEstadoOC.color;
    //

    //========================= SET DE INPUTS ============================

    formId.value = id;
    formNombreProducto.value = nombreProducto;
    formEstadoCotizacion.value = estadoCotizacion;
    formCorreoResponsable.value = correoResponsable;
    formFechaCreacion.value = fechaCreacion;
    formMarcaProducto.value = marcaProducto;
    formCantidadProducto.value = cantidadProducto;
    formTipoProducto.value = tipoProducto;
    formProveedor.value = proveedor;
    formOC.value = OC;
    formArchivoOC.value = archivoOC;
    formCotizacionProducto.value = cotizacionProveedor;
    formObservacion.value = observacion;
    formEstadoOC.value = estadoOC;
}

document.addEventListener("DOMContentLoaded", function() {
    const estadoSelect = document.getElementById('estado');
    const estadoOCSelect = document.getElementById('estado-oc');
    const colorMap = {
        "En Recepción": "rgb(51, 211, 145)",
        "OC Enviada": "rgb(253, 188, 100)",
        "Sin Respuesta": "rgb(232, 106, 125)",
        "Sin Stock": "rgb(255, 145, 145)",
        "Anulada": "rgb(153, 117, 108)",
        "Cotizando": "rgb(147, 111, 218)",
        "Reemplazada": "rgb(181, 125, 227)",
        "Esperando OC Firmada": "rgb(176, 220, 81)",
        "Esperando OK TI": "rgb(133, 214, 255)",
        "Pendiente": "rgb(121, 126, 147)",
        "Listo": "rgb(92, 92, 92)",
    };

    const colorMapOC = {
        "Emitir OC": "rgb(176, 220, 81)",
        "Recepcionado": "rgb(51, 211, 145)",
        "Rechazado": "rgb(232, 106, 125)",
        "Enviar OC": "rgb(133, 214, 255)",
        "----": "rgb(121, 126, 147)",
    };

    function updateSelectColor(selectElement, colorMap) {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const color = colorMap[selectedOption.value] || "white";
        selectElement.style.backgroundColor = color;
        selectElement.style.color = "white";
    }

    estadoSelect.addEventListener('change', function() {
        updateSelectColor(estadoSelect, colorMap);
    });

    estadoOCSelect.addEventListener('change', function() {
        updateSelectColor(estadoOCSelect, colorMapOC);
    });

    // Establecer el color inicial basado en la opción seleccionada inicialmente
    updateSelectColor(estadoSelect, colorMap);
    updateSelectColor(estadoOCSelect, colorMapOC);
});