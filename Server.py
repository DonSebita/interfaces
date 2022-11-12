from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
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
@app.route("/marcadores")
def marcadores():
    return render_template("3.html")
#4
@app.route("/autos")
def autos():
    return render_template("4.html")


if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0' ,port=8000)