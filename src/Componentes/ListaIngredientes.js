import React, { Component, useState, useRef } from "react";

//class ListaIngredientes extends Component {
export default function ListaIngredientes(){

    
    // render(){}

   
             // const [cantidad, setCantidad] = useState(0);

            //const [ingredientePapa, setIngredientePapa] = useState({
            //    Nombre: 'Papa',
            //    Cantidad: 1,
            //    TipoMedida: 'kg'
            //});
            
            //const [ingredienteQueso, setIngredienteQueso] = useState({
            //    Nombre: 'Queso',
            //    Cantidad: 0.5,
            //    TipoMedida: 'kg'
            //});

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

                
        
            


                function numeroValido(numero){
                    return numero > 0.1;
                }

                function restarCantidad(ingrediente) {

                    //alacena[ingrediente].cantidad -= 1;
                    
                    // setAlacena(alacena, alacena[ingrediente].cantidad -= 1);
    
                    if (numeroValido(alacena[ingrediente].cantidad)){

                        let nuevoNumero = alacena[ingrediente].cantidad -= 0.1;
                        nuevoNumero = Number(nuevoNumero.toFixed(1));
                        alacena[ingrediente].cantidad = nuevoNumero;
                        
                        let alacenaNueva = [...alacena];
                        
                        setAlacena(alacenaNueva);
                    }
    
                    //setAlacena(prevState => {
                    //    console.log('PREVSTATE ' + prevState[ingrediente].cantidad);
                    //    return {...[prevState, ...alacena[ingrediente].cantidad -= 1]}
                    //});


    /*
                    console.log('despues ' + alacena[ingrediente].nombre);
                    console.log('Cantidad: ' + alacena[ingrediente].cantidad);
    */

                    
                    //prevState => {
                        // //console.log('PREVSTATE ' + prevState[0].cantidad);
                        //return {prevState};
                        // // [prevState, prevState[ingrediente].cantidad = 5]
                    //}
    
                    //setIngredientePapa(previousState => {
                    //    return {...previousState, Cantidad: (alacena[ingrediente].Cantidad-=0.1)}
                    //});
    
    
                    //alacena[ingrediente].Cantidad -= 0.1;
                    //console.log('Ahora debería tener ' + alacena[ingrediente].Cantidad + ' de ' + alacena[ingrediente].Nombre)
                    //console.log(alacena[ingrediente].Cantidad)
                    //console.log(alacena)
                    
                }

                function sumarCantidad(ingrediente) {

                    let nuevoNumero = alacena[ingrediente].cantidad += 0.1;
                    nuevoNumero = Math.round(nuevoNumero * 100) / 100;
                    alacena[ingrediente].cantidad = nuevoNumero;

                    let alacenaNueva = [...alacena];
    
                    setAlacena(alacenaNueva);
    
                    }
            
            
            //let alacena = [ingredientePapa, ingredienteQueso];
            // USAR useState EN AlACENA

            //{console.log('PUNTOS: ' + [...alacena])}
            //    {console.log('PUNTOS 2: ' + [...alacena, alacena[0].nombre = 'Otra Papa'])}
            //    {console.log('PUNTOS 3: ' + alacena[0].nombre)}
            //    {console.log('PUNTOS 2-2: ' + [...alacena])}

            function borrarIngrediente(ingrediente){
                // let nuevaAlacena = alacena;
                // nuevaAlacena.splice(ingrediente, 1);

                

                if(window.confirm('¿Ya no tenes ' + alacena[ingrediente].nombre + ' en tu alacena?')){
                    setAlacena(alacena.filter(alacenaNueva => alacenaNueva !== alacena[ingrediente]));
                }

                // Cambiar por cuadro de dialogo del DOM

            }


            // let nombreNuevo = React.findDOMNode(this.refs.nombreRef).value;

            const [nombreNuevo, setNombreNuevo] = useState('');
            const [catidadNueva, setCantidadNueva] = useState(0);
            const [tipoMedidaNueva, setTipoMedidaNueva] = useState('');

            function agregarIngrediente(){
                console.log('Agregar Ingrediente');

                let ingredienteNuevo = {
                    nombre: nombreNuevo,
                    cantidad: catidadNueva,
                    tipoMedida: tipoMedidaNueva
                }

                console.log('Ingrediente nuevo: ' + nombreNuevo);

                // setAlacena(asd => asd.concat(ingredienteNuevo));

                setAlacena([... alacena, ingredienteNuevo]);
            }

            
            

            function cambiar(){
                nombreNuevo = nombreNuevo;
            }
         
            
    return(
        <section className='Lista-ingredientes'>
            
            <h2>En tu Alacenas tenés: </h2>
            <table className="Tabla-ingredientes">
                <thead>
                    <tr>
                        <td></td>
                        <th>Cantidad</th>
                        <th>Tipo de medida</th>
                    </tr>
                </thead>

{/*
                {console.log('1 antes ' + alacena)}
                {console.log('2 Tipo ' + typeof alacena)}
                {console.log('3 Es array ' + Array.isArray(alacena))}
                {console.log('4 DESPUES ' + alacena)}
*/}

                
                    {
                    alacena.map((dato, i) => {
                        return(
                            <tbody key={i}>
                                <tr>
                                    <th>{dato.nombre}</th>
                                    <td>{dato.cantidad}</td>
                                    <td>{dato.tipoMedida}</td>
                                    <td><button onClick={() => {restarCantidad(i)}}>-</button></td>
                                    <td><button onClick={() => {sumarCantidad(i)}}>+</button></td>
                                    <td><button onClick={() => {borrarIngrediente(i)}}>borrar</button></td>
                                </tr>
                            </tbody>
                            )
                        })
                    }
                    
            </table>

            <form>
                <label>Nuevo ingrediente:
                    <input type='text' placeholder="Nombre" onChange={event => setNombreNuevo(event.target.value)}></input> 
                    <input type='text' placeholder="Cantidad" onChange={event => setCantidadNueva(event.target.value)}></input> 
                    <input type='text' placeholder="Tipo de Medida" onChange={event => setTipoMedidaNueva(event.target.value)}></input> 

                {/*
                <textarea placeholder='Nombre'></textarea>
                <textarea placeholder='Cantidad'></textarea>
                <textarea placeholder='Tipo de Medida'></textarea>
                */}
                </label>
                <input type='button' value='Agregar' onClick={() => {agregarIngrediente()}}></input>
                
            </form>
            
            
      </section>
      
        );
    
    
}

// export default ListaIngredientes;