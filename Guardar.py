import sqlite3,csv,json

#Funcion para poder guardar los datos de "rutas.csv" en la base de datos
def Guardar():
    #Hacemos el llamdo para poder entrar a la base de datos
    conex=sqlite3.connect("./datos/gps.DB")
    
    #Abrimos el archivo csv, y lo ponemos en modo lectura. Y luego usamos "csv", para saber de que leemos un archivo csv.
    ar=open('./datos/rutas.csv','r') 
    Dat=csv.reader(ar)

    #Creamos un arreglo y agregamos todos los datos de nuestro archivo csv en el arreglo. y luego cerramos dicho archivo.
    DATOS=[]
    DATOS.clear() 
    for guar in Dat: 
        DATOS.append(guar) 
    ar.close()

    #Ahora primero hacemos una consulta borrando todos datos que tenga la tabla que se a creado.
    cont=0
    conex.execute("DELETE FROM data")

    #Ahora recorremos el arreglo con los datos anteriormente mencionados, en donde guardamos los datos que tiene este arreglo en nuestra base de datos, 
    # especificamente en nuestra tabla rutas y luego ya cerramos la conexion y se guardan todos los datos.

    for guar in DATOS:
        cont=cont+1
        if(cont>1):
            conex.execute("Insert into data(npk,id,lat,lon,velo,angu,fecha,hora,onoff,nsat) values (?,?,?,?,?,?,?,?,?,?)",(guar))     
    conex.commit()
    print("Se almacenaron los datos")
    conex.close()
Guardar()


