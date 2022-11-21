let pr=[]
let pr1=[]
let pr2=[]
let tm=[]
function main() {
    $.getJSON("http://127.0.0.1:8000/gra", function(datos) {
        const grafica = document.querySelector("#material");
        const temperatura = document.querySelector("#temperatura");
        pr.push(datos["01"])
        pr1.push(datos["25"])
        pr2.push(datos["10"])
        tm.push(datos["te"])
        function range(size, startAt = 1) {
    		return [...Array(size).keys()].map(i => i + startAt);
		};
            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datos01 = {
                label: "Material Particulado 0.1",
                data: pr, 
                borderColor: 'blue',
                borderWidth: 1,
            };
            const datos25 = {
                label: "Material Particulado 2.5",
                data: pr1, 
                borderColor: 'red',
                borderWidth: 1,
            };
            const datos10 = {
                label: "Material Particulado 10",
                data: pr2, 
                borderColor: 'green',
                borderWidth: 1,
            };
            const datoste = {
                label: "Temperatura",
                data: tm, 
                borderColor: 'red',
                borderWidth: 1,
            };
            
            var myChart=new Chart(grafica, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: range(pr.length),
                    datasets: [
                        datos01,
                        datos25,
                        datos10,
                    ]
                }, options: {
                    responsive: true,
                        scales: {
                            x: {
                                display:true,
                                title:{
                                    display:true,
                                    text:"N° de muestra",
                                    color:"#0000ff",
                                },
                                    },
                            y: {
                                display:true,
                                title:{
                                    display:true,
                                    text:"μg/m^3",
                                    color:"#0000ff",
                                },
                            },	
                           },
                           plugins: {
                                  title: {
                                    display: true,
                                    text: 'Niveles de contaminacion',
                                    fontSize: 50,
                                    padding:30,
    
                                      }
                                },
                    },
            });
            var myChart2=new Chart(temperatura, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: range(tm.length),
                    datasets: [
                        datoste,
                        // Aquí más datos...
                    ]
                },
                options: {
                    responsive: true,
                        scales: {
                            x: {
                                display:true,
                                title:{
                                    display:true,
                                    text:"N° de muestra",
                                    color:"#0000ff",
                                },
                                    },
                           },
                           plugins: {
                                  title: {
                                    display: true,
                                    text: 'Nivel de Temperatura',
                                    fontSize: 50,
                                    padding:30,
    
                                      }
                                },
                    },
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
    img = "hola"
    var link = document.createElement('a');
    link.href = variable.toBase64Image();
    link.download = 'grafico.png';
    link.click();

    $.ajax({
        type: "POST",
        url: '/Envio',
        data: img
    });
}
main()