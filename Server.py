from flask import Flask, render_template, request

app= Flask(__name__)

@app.route("/")
def index1():
    return render_template("app.html")

#1
@app.route("/Monitoreo")
def Monitoreo():
    return render_template("1.html")

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

#http://127.0.0.1:8000/

if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0' ,port=8000)