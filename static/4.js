let m = L.map('map').setView([-38.740857,-72.594756],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);
let Arreglo=[]

$(document).ready(function(){
    const Url="http://127.0.0.1:8000/rutas";
    function Envio(data){
        $.ajax({
            url:Url,
            data:data,
            type:"POST",
            success:function(response){
                Trayecto(response)
            },
            error:function(error){
                console.log(error)
            }

        })
    }
    function Trayecto(rest){
        Arreglo=[]
        dat=rest["data"]
        for (let x = 0; x < dat.length-1; x++) {
            Arreglo.push(dat[x])
          }
        L.Routing.control({waypoints: Arreglo}).addTo(m);
        
    }
    $("#btn1").click(function(){
        Envio("1")
    })
    $("#btn2").click(function(){
        Envio("2")
    })
    $("#btn3").click(function(){
        Envio("3")
    })
    $("#btn4").click(function(){
        Envio("4")
    })
    $("#btn5").click(function(){
        Envio("5")
    })
    $("#btn6").click(function(){
        Envio("6")
    })
    $("#btn7").click(function(){
        Envio("7")
    })
    $("#btn8").click(function(){
        Envio("8")
    })
    $("#btn9").click(function(){
        Envio("9")
    })
    $("#btn10").click(function(){
        Envio("10")
    })
    $("#borrar").click(function(){
        window.location.reload()
    })
})