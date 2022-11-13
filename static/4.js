let m = L.map('map').setView([-38.740857,-72.594756],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);

function clearMap() {
    for(i in m._layers) {
        if(m._layers[i]._path != undefined) {
            try {
                m.removeLayer(m._layers[i]);
            }
            catch(e) {
                console.log("problem with " + e + m._layers[i]);
            }
        }
    }
}
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
        
        dat=rest["data"]
        //for (let step = 0; step < 100; step++) {
        //    L.marker([dat[step][0],dat[step][1]]).addTo(map)
        //}
        L.polyline(dat).addTo(m)
        console.log("")
    }
    $("#btn1").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("1")
    })
    $("#btn2").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("12")
    })
    $("#btn3").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("123")
    })
    $("#btn4").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("1234")
    })
    $("#btn5").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("12345")
    })
    $("#btn6").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("123456")
    })
    $("#btn7").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("1234567")
    })
    $("#btn8").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("12345678")
    })
    $("#btn9").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("123456789")
    })
    $("#btn10").click(function(even){
        even.preventDefault();
        clearMap()
        Envio("0123456789")
    })
})