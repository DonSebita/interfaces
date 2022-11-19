let map = L.map('map').setView([-38.740857,-72.594756],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let pr=[]
let pr1=[]
let pr2=[]
let com
let myChart

var myIcon = L.icon({
    iconUrl: 'https://cdn.pixabay.com/photo/2016/02/01/16/51/ascending-graph-1173935_960_720.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});
    
L.marker([-38.723192, -72.574569], {icon: myIcon}).addEventListener("click", () => {
    if (myChart){
        myChart.clear();
        myChart.destroy();
        pr=[]
        pr1=[]
        pr2=[]
    }
    com=0
    principal("#grafica1")

}).addTo(map);

L.marker([-38.714218, -72.552253], {icon: myIcon}).addEventListener("click", () => {
    if (myChart){
        myChart.clear();
        myChart.destroy();
        pr=[]
        pr1=[]
        pr2=[]
    }
    com=1
    principal("#grafica2")

}).addTo(map);
L.marker([-38.735244, -72.641174], {icon: myIcon}).addEventListener("click", () => {
    if (myChart){
        myChart.clear();
        myChart.destroy();
        pr=[]
        pr1=[]
        pr2=[]
    }
    com=2
    principal("#grafica3")

}).addTo(map);
L.marker([-38.757067, -72.624007], {icon: myIcon}).addEventListener("click", () => {
    if (myChart){
        myChart.clear();
        myChart.destroy();
        pr=[]
        pr1=[]
        pr2=[]
    }
    com=3
    principal("#grafica4")

}).addTo(map);
L.marker([-38.745152, -72.582122], {icon: myIcon}).addEventListener("click", () => {
    if (myChart){
        myChart.clear();
        myChart.destroy();
        pr=[]
        pr1=[]
        pr2=[]
    }
    com=4
    principal("#grafica5")

}).addTo(map);

function principal(id) {
    $.getJSON("http://127.0.0.1:8000/grafica", function(datos) {
        pr.push(datos["01"])
        pr1.push(datos["25"])
        pr2.push(datos["10"])

        function range(size, startAt = 1) {
    		return [...Array(size).keys()].map(i => i + startAt);
		};
        const grafica = document.querySelector(id);
            // Podemos tener varios conjuntos de datos. Comencemos con uno
            
        const datos1 = {
            label: "Nivel 0.1",
            data: pr, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            borderColor: 'blue',
            borderWidth: 1,// Ancho del borde

        };
        const datos25 = {
            label: "Nivel 2.5",
            data: pr1, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            borderColor: 'red',
            borderWidth: 1,// Ancho del borde

        };
        const datos10 = {
            label: "Nivel 10",
            data: pr2, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
            borderColor: 'green',
            borderWidth: 1,// Ancho del borde

        };            
            
        myChart=new Chart(grafica, {
            type: 'line',// Tipo de gráfica
            data: {
                labels: range(pr.length),
                datasets: [
                    datos1,
                    datos25,
                    datos10,
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
        if(com===0 && id==="#grafica1"){
            setTimeout(destruir,5000);
            setTimeout(principal,5000,id);
        }else if(com===1 && id==="#grafica2"){
            setTimeout(destruir,5000);
            setTimeout(principal,5000,id);
        }else if(com===2 && id==="#grafica3"){
            setTimeout(destruir,5000);
            setTimeout(principal,5000,id);
        }else if(com===3 && id==="#grafica4"){
            setTimeout(destruir,5000);
            setTimeout(principal,5000,id);
        }else if(com===4 && id==="#grafica5"){
            setTimeout(destruir,5000);
            setTimeout(principal,5000,id);
        }
        
        
        function destruir(){
            if (myChart){
                myChart.clear();
                myChart.destroy();
            }
            }
        

        

    })
    
}
