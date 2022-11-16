from flask import Flask, render_template, request
import sqlite3,json
app= Flask(__name__)

@app.route("/")
def index1():
    return render_template("app.html")

#1
k=None
@app.route("/Monitoreo", methods=['GET','POST'])
def Monitoreo():
    if request.method == 'POST':
        global k
        k=request.json
    if k!=None:
        return render_template('1.html',k=k)
    return render_template("error.html")
j=None

@app.route('/gra', methods=['GET'])
def dat():
    global j
    j=k
    return (j)

#2
@app.route("/Envio")
def Envio():
    return render_template("2.html")
#3
f=None
@app.route('/marcadores', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        global f
        f=request.json
    if f!=None:
        return render_template('3.html', f=f)
    return render_template("error.html")
g=None
@app.route('/grafica', methods=['GET'])
def datos():
    global g
    g=f
    return (g)

#4
@app.route("/autos")
def autos():
    return render_template("4.html")

@app.route("/rutas",methods=["POST"])
def rutas():
    #Funcion para poder crear el diccionario con los datos ordenados por fecha y hora
    def Diccionario(id):
        #Ahora nos conectamos a la base de datos y creamos un cursor.
        conex=sqlite3.connect("./datos/gps.db")
        cursor=conex.cursor()
        #Consulta
        consulta="SELECT lat,lon from data WHERE id="+str(id)
        #Se hace la consulta para poder primeramente obtenenr la latitud y longuitud, para los autos con id=1, y que este ordenados por fecha y hora.
        cursor.execute(consulta)
        #Ahora nos devuelve todos los datos que ha encontrado segun la consulta que se realizo, y esto se almacenara en el diccionario de gps.
        #Luego cerramos todas las conexiones y retornamos el diccionario.
        lat=cursor.fetchall()
        gps={'data':lat}
        cursor.close()
        conex.close()
        return gps
    if request.method == 'POST':
        global f
        f=request.content_length
        gps=Diccionario(f)
        return gps


#http://127.0.0.1:8000/

if __name__=='__main__':
    app.run(debug=True ,port=8000)


