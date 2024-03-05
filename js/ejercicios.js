//definir una funcion en este caso de llama mostrar, que va a recibir un datos la cual es una variable
function mostrar(datos) {
    //funcion switch para que se comporte en forma de casos y podamos evaluar cada uno
    switch (datos) {
        case 1:
            document.getElementById('enunciado1').style.display = 'block';
            document.getElementById('enunciado2').style.display = 'none';
            document.getElementById('enunciado3').style.display = 'none';
            document.getElementById('enunciado4').style.display = 'none';
            document.getElementById('enunciado5').style.display = 'none';
            document.getElementById('enunciado6').style.display = 'none';
            document.getElementById('enunciado7').style.display = 'none';
            document.getElementById('tablaarticulos').style.display = 'block';
            document.getElementById('tablaempleados').style.display = 'block';
            document.getElementById('tablaventas').style.display = 'block';
            break;
        case 2:
            document.getElementById('enunciado1').style.display = 'none';
            document.getElementById('enunciado2').style.display = 'block';
            document.getElementById('enunciado3').style.display = 'none';
            document.getElementById('enunciado4').style.display = 'none';
            document.getElementById('enunciado5').style.display = 'none';
            document.getElementById('enunciado6').style.display = 'none';
            document.getElementById('enunciado7').style.display = 'none';
            document.getElementById('tablaarticulos').style.display = 'none';
            document.getElementById('tablaempleados').style.display = 'none';
            document.getElementById('tablaventas').style.display = 'none';
            break;
        case 3:
            document.getElementById('enunciado1').style.display = 'none';
            document.getElementById('enunciado2').style.display = 'none';
            document.getElementById('enunciado3').style.display = 'block';
            document.getElementById('enunciado4').style.display = 'none';
            document.getElementById('enunciado5').style.display = 'none';
            document.getElementById('enunciado6').style.display = 'none';
            document.getElementById('enunciado7').style.display = 'none';
            document.getElementById('tablaarticulos').style.display = 'none';
            document.getElementById('tablaempleados').style.display = 'none';
            document.getElementById('tablaventas').style.display = 'none';
            break;
        case 4:
            document.getElementById('enunciado1').style.display = 'none';
            document.getElementById('enunciado2').style.display = 'none';
            document.getElementById('enunciado3').style.display = 'none';
            document.getElementById('enunciado4').style.display = 'block';
            document.getElementById('enunciado5').style.display = 'none';
            document.getElementById('enunciado6').style.display = 'none';
            document.getElementById('enunciado7').style.display = 'none';
            document.getElementById('tablaarticulos').style.display = 'none';
            document.getElementById('tablaempleados').style.display = 'none';
            document.getElementById('tablaventas').style.display = 'none';
            break;
        case 5:
            document.getElementById('enunciado1').style.display = 'none';
            document.getElementById('enunciado2').style.display = 'none';
            document.getElementById('enunciado3').style.display = 'none';
            document.getElementById('enunciado4').style.display = 'none';
            document.getElementById('enunciado5').style.display = 'block';
            document.getElementById('enunciado6').style.display = 'none';
            document.getElementById('enunciado7').style.display = 'none';
            document.getElementById('resultado').style.display = 'block';
            document.getElementById('tablaarticulos').style.display = 'none';
            document.getElementById('tablaempleados').style.display = 'none';
            document.getElementById('tablaventas').style.display = 'none';
            break;
        case 6:
            document.getElementById('enunciado1').style.display = 'none';
            document.getElementById('enunciado2').style.display = 'none';
            document.getElementById('enunciado3').style.display = 'none';
            document.getElementById('enunciado4').style.display = 'none';
            document.getElementById('enunciado5').style.display = 'none';
            document.getElementById('enunciado6').style.display = 'block';
            document.getElementById('enunciado7').style.display = 'none';
            document.getElementById('tablaarticulos').style.display = 'none';
            document.getElementById('tablaempleados').style.display = 'none';
            document.getElementById('tablaventas').style.display = 'none';
            break;
        case 7:
            document.getElementById('enunciado1').style.display = 'none';
            document.getElementById('enunciado2').style.display = 'none';
            document.getElementById('enunciado3').style.display = 'none';
            document.getElementById('enunciado4').style.display = 'none';
            document.getElementById('enunciado5').style.display = 'none';
            document.getElementById('enunciado6').style.display = 'none';
            document.getElementById('enunciado7').style.display = 'block';
            document.getElementById('tablaarticulos').style.display = 'none';
            document.getElementById('tablaempleados').style.display = 'none';
            document.getElementById('tablaventas').style.display = 'none';
            break;
    }
}

//arreglo vacio
var bodega = [];

function articulos() {

    var producto, marca, precio_compra, stock, precio_venta, articulo, ganancia;

    const ganancia30 = 0.30;

    producto = document.getElementById("producto").value;
    marca = document.getElementById('marca').value;
    precio_compra = Number(document.getElementById('precio_compra').value);
    stock = document.getElementById('stock').value;

    //Validacion formulario
    if (producto == "") {
        document.getElementById("error1").style.display = "block";

    } else {
        document.getElementById("error1").style.display = "none";
    }

    if (marca == "") {
        document.getElementById("error2").style.display = "block";

    } else {
        document.getElementById("error2").style.display = "none";
    }

    if (precio_compra == "") {
        document.getElementById("error3").style.display = "block";

    } else {
        document.getElementById("error3").style.display = "none";
    }

    if (stock == "") {
        document.getElementById("error4").style.display = "block";

    } else {
        document.getElementById("error4").style.display = "none";
    }

    //validar que no tenga datos vacios antes de insertar a bodega
    if (producto != "" && marca != "" && precio_compra != "" && stock != "") {

        ganancia = precio_compra * ganancia30;

        precio_venta = precio_compra + ganancia;

        //variable tipo objeto
        articulo = {
            producto: producto,
            marca: marca,
            precio_compra: precio_compra,
            precio_venta: precio_venta,
            stock: stock

        }

        //guardar los articulos en bodega
        this.bodega.push(articulo);

    } else {

        alert("Faltan datos para ingresar");
    }

    //funcion llena tabla
    llenartablaarticulos();
    console.log(this.bodega);

}

function llenartablaarticulos() {
    var mensaje = "";
    document.getElementById("datos").innerHTML = "";
    var largo = this.bodega.length;
    for (con = 0; con < largo; con++) {
        mensaje +=
            `<tr>
            
            <td>`+ this.bodega[con].producto + `</td>
               <td>`+ this.bodega[con].marca + `</td>
                <td>`+ this.bodega[con].precio_compra + `</td>
                <td>`+ this.bodega[con].precio_venta + `</td>
                <td>`+ this.bodega[con].stock + `</td>
            <tr>
            `
    }
    document.getElementById("datos").innerHTML = mensaje;

}

//arreglo vacio
var empleados = [];

function empleado() {
    var vendedor, cedula, email, celular;

    vendedor = document.getElementById("vendedor").value;
    cedula = document.getElementById("cedula").value;
    email = document.getElementById("email").value;
    celular = document.getElementById("telefono").value;

    //validar formulario

    if (vendedor == "") {
        document.getElementById("error5").style.display = "block";

    } else {
        document.getElementById("error5").style.display = "none";
    }

    if (cedula == "") {
        document.getElementById("error6").style.display = "block";

    } else {
        document.getElementById("error6").style.display = "none";
    }

    if (email == "") {
        document.getElementById("error7").style.display = "block";

    } else {
        document.getElementById("error7").style.display = "none";
    }

    if (celular == "") {
        document.getElementById("error8").style.display = "block";

    } else {
        document.getElementById("error8").style.display = "none";
    }

    if (vendedor != "" && cedula != "" && email != "" && celular != "") {

        vendedor = {
            vendedor: vendedor,
            cedula: cedula,
            email: email,
            celular: celular
        }

        this.empleados.push(vendedor);

    } else {
        alert("Faltan datos para ingresar");
    }


    llenarempleados();

}

function llenarempleados() {
    var mensaje = "";
    document.getElementById("datosempleados").innerHTML = "";
    var largo = this.empleados.length;

    for (con = 0; con < largo; con++) {
        mensaje +=
            `<tr> 
        <td>`+ this.empleados[con].vendedor + `</td>
        <td>`+ this.empleados[con].cedula + `</td>
        <td>`+ this.empleados[con].email + `</td>
        <td>`+ this.empleados[con].celular + `</td>

    </tr>`;
    }
    document.getElementById("datosempleados").innerHTML = mensaje;

}

//arreglo vacio
var r_ventas = [];

function ventas() {
    var fecha, productov, empleadov, cantidad, precio, subtotal, valorconiva, total, largobodega, largoempleados, venta, mensaje;

    const iva19 = 0.19;

    fecha = document.getElementById('fechacompra').value;
    productov = document.getElementById('productov').value;
    cantidad = document.getElementById('cantidad').value;
    empleadov = document.getElementById('vendedores').value;

    //validar formulario

    if (fecha == "") {
        document.getElementById("error9").style.display = "block";

    } else {
        document.getElementById("error9").style.display = "none";
    }

    if (productov == "") {
        document.getElementById("error10").style.display = "block";

    } else {
        document.getElementById("error10").style.display = "none";
    }

    if (cantidad== "") {
        document.getElementById("error11").style.display = "block";

    } else {
        document.getElementById("error11").style.display = "none";
    }

    if (empleadov == "") {
        document.getElementById("error12").style.display = "block";

    } else {
        document.getElementById("error12").style.display = "none";
    }

    //validar que esten todos los datos, no esten vacios
    if (fecha != "" && productov != "" && cantidad != "" && empleadov != "") {
        largobodega = this.bodega.length

        //bucle que recorre bodega y compara si el producto que vendo esta en el arreglo bodega
        con=0;
        while (con < largobodega) {
                if(productov == this.bodega[con].producto){
                    precio = this.bodega[con].precio_venta;
                    largoempleados = this.empleados.length;
                    con=0;
        //bucle que recorre empleados y compara si el empleado que vendo esta en el arreglo empleados
                    while (con<largoempleados) {
                        if (empleadov == this.empleados[con].vendedor) {
                            subtotal = precio * cantidad;
                            valorconiva = subtotal * iva19;
                            total = subtotal + valorconiva;              
            
                            venta = {
                                fecha: fecha,
                                productov: productov,
                                cantidad: cantidad,
                                subtotal: subtotal,
                                iva: valorconiva,
                                total: total,
                                empleadov: empleadov
                            }
            
                            this.r_ventas.push(venta);
                            llenartablaventas();
                            productov="";
                            empleadov="";            
            
                        }
                        
                        con++
                        
                    }
                }
        
                con++;
            }
    }   

}

function llenartablaventas() {
    var mensaje = "";
    document.getElementById("datosventas").innerHTML = "";
    var largo = this.r_ventas.length;
    for (con = 0; con < largo; con++) {
            mensaje +=
                `<tr> 
            <td>`+ this.r_ventas[con].fecha + `</td>
            <td>`+ this.r_ventas[con].productov + `</td>
            <td>`+ this.r_ventas[con].cantidad + `</td>
            <td>`+ this.r_ventas[con].subtotal + `</td>
            <td>`+ this.r_ventas[con].iva + `</td>
            <td>`+ this.r_ventas[con].total + `</td>
            <td>`+ this.r_ventas[con].empleadov + `</td>
    
        </tr>`;
        }
        document.getElementById("datosventas").innerHTML = mensaje;
   

}