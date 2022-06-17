import React, { useState } from "react";

//class ListaIngredientes extends Component {
export default function ListaIngredientes(){
    
            const [alacena, setAlacena] = useState([{
                            nombre: 'Papa',
                            cantidad: 1,
                            tipoMedida: 'kg'
                        },
                        {
                            nombre: 'Queso',
                            cantidad: 0.5,
                            tipoMedida: 'kg'
                        },
                        {
                            nombre: 'Arvejas',
                            cantidad: 1,
                            tipoMedida: 'Unidad'
                        }
                    ])

                    
            const [nombreNuevo, setNombreNuevo] = useState('Ingrediente');
            const [catidadNueva, setCantidadNueva] = useState(0);
            const [tipoMedidaNueva, setTipoMedidaNueva] = useState('Sin TdM');
                    
                    
                    
                function numeroValido(numero){
                    return numero > 0.1;
                }

                function restarCantidad(ingrediente) {

                     if (numeroValido(alacena[ingrediente].cantidad)){

                        let nuevoNumero = alacena[ingrediente].cantidad -= 0.1;
                        nuevoNumero = Number(nuevoNumero.toFixed(1));
                        alacena[ingrediente].cantidad = nuevoNumero;
                        
                        let alacenaNueva = [...alacena];
                        
                        setAlacena(alacenaNueva);
                    }
     /*
                    console.log('despues ' + alacena[ingrediente].nombre);
                    console.log('Cantidad: ' + alacena[ingrediente].cantidad);
    */
 
                }

                function sumarCantidad(ingrediente) {

                    let nuevoNumero = alacena[ingrediente].cantidad += 0.1;
                    nuevoNumero = Math.round(nuevoNumero * 100) / 100;
                    alacena[ingrediente].cantidad = nuevoNumero;

                    let alacenaNueva = [...alacena];
    
                    setAlacena(alacenaNueva);
    
                    }

                function borrarIngrediente(ingrediente){
                    
                    if(window.confirm('¿Ya no tenes ' + alacena[ingrediente].nombre + ' en tu alacena?')){
                        setAlacena(alacena.filter(alacenaNueva => alacenaNueva !== alacena[ingrediente]));
                    }

                    // Cambiar por cuadro de dialogo del DOM

                    }


            

            function agregarIngrediente(){
                console.log('Agregar Ingrediente');

                let ingredienteNuevo = {
                    nombre: nombreNuevo,
                    cantidad: catidadNueva,
                    tipoMedida: tipoMedidaNueva
                }

                console.log('Ingrediente nuevo: ' + nombreNuevo);

                // setAlacena(asd => asd.concat(ingredienteNuevo));

                setAlacena([...alacena, ingredienteNuevo]);
            }
         
            
    return(
        <section className='Lista-ingredientes'>

            <div className="row justify-content-center">
            
                <h2>En tu Alacenas tenés: </h2>
                {alacena.length ? (
                    
                    
                    <table className="Tabla-ingredientes col-auto">
                    <thead className="Head-Tabla">
                        <tr>
                            <td></td>
                            <th>Cantidad</th>
                            <th>Tipo de medida</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    {
                        alacena.map((dato, i) => {
                            return(
                                    <tr key={i} className="Body-Tabla">
                                        <th>{dato.nombre}</th>
                                        <td>{dato.cantidad}</td>
                                        <td>{dato.tipoMedida}</td>
                                            <td><button type="button" className="btn btn-primary" onClick={() => {restarCantidad(i)}}>-</button></td>
                                            <td><button type="button" className="btn btn-primary" onClick={() => {sumarCantidad(i)}}>+</button></td>
                                        <td><button type="button" className="btn btn-secondary" onClick={() => {borrarIngrediente(i)}}>borrar</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                        
                </table>

                ) : 

                <p>Tu Alacena esta vacía</p>
                } 
                
            </div>

            <div className="row justify-content-center">
                <form className="formulario col-auto">
                    <label>

                        Nuevo ingrediente:
                        <input type='text' placeholder="Nombre" onChange={event => setNombreNuevo(event.target.value)}></input> 
                        <input type='text' placeholder="Cantidad" onChange={event => setCantidadNueva(event.target.value)}></input> 
                        <input type='text' placeholder="Tipo de Medida" onChange={event => setTipoMedidaNueva(event.target.value)}></input> 

                    </label>
                    <input type='button' value='Agregar' onClick={() => {agregarIngrediente()}}></input>
                    
                </form>
            </div>
            
            
      </section>
      
        );
    
    
}

// export default ListaIngredientes;