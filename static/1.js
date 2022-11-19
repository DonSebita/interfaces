function main() {
    $.getJSON("http://127.0.0.1:8000/gra", function(datos) {
        console.log(datos)
        const grafica = document.querySelector("#material");
        const temperatura = document.querySelector("#temperatura");
            // Las etiquetas son las que van en el eje X.
            const etiquetas = ["1", "2"]
            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datos01 = {
                label: "Material Particulado 0.1",
                data: [datos["01"],datos["01"]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'blue',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            const datos25 = {
                label: "Material Particulado 2.5",
                data: [datos["25"],datos["25"]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'red',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            const datos10 = {
                label: "Material Particulado 10",
                data: [datos["10"],datos["10"]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'green',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            const datoste = {
                label: "Temperatura",
                data: [datos["te"],datos["te"]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                borderColor: 'red',
                borderWidth: 1,// Ancho del borde
                tension: 0.1,
                fill: false,
            };
            
            var myChart=new Chart(grafica, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datos01,
                        datos25,
                        datos10,
                        // Aquí más datos...
                    ]
                },
            });
            var myChart2=new Chart(temperatura, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datoste,
                        // Aquí más datos...
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });
        document.getElementById("exM").addEventListener('click',()=>{
            exportar(myChart)

        });
        document.getElementById("exT").addEventListener('click',()=>{
            exportar(myChart2)

        });
        setTimeout(destruir,5000);
        setTimeout(main,5000);
        function destruir(){
            if (myChart){
                myChart.clear();
                myChart.destroy();
            }
            if (myChart2){
                myChart2.clear()
                myChart2.destroy();
                }
            }

    });
}
function exportar(variable){
    var img = variable.toBase64Image()
    var codi = encodeURIComponent(img)
    if (typeof codi == "string") {console.log("es un string")}
    console.log(img)
    $.ajax({
        type: "POST",
        url: '/Envio',
        data:codi,
        success: function(){console.log("Datos enviados")}
    });
}
main()