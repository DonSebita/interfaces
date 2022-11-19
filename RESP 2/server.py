from flask import Flask, render_template, request
import telepot
bot = telepot.Bot('5611589923:AAGeCSPFiBntHVCJS-qLRpbUoZ1BL0pH6Bo')

#bot.sendMessage(1702050781,'Hola')

#bot.sendPhoto(1702050781,'./Prueba.jpg')
f = open(r'./Prueba.jpg')
bot.sendPhoto(1702050781,f)
"""
app= Flask(__name__)
    
f=None
@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        global f
        f=request.json
    if f!=None:
        return render_template('index2.html', f=f)
    return render_template("get.html")

g=None
@app.route('/datos', methods=['GET'])
def datos():
    global g
    g=f
    return (g)



if __name__=='__main__':
    app.run(debug=True, port=5000)
"""