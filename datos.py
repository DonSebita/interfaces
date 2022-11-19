import random as ra,requests as req, time as ti
#1
sURL = 'http://127.0.0.1:8000/Monitoreo'
#3
sURL2 = 'http://127.0.0.1:8000/marcadores'
def Generate():
    dData = {
        '01': ra.randint(+5,+20),
        '25': ra.randint(+5,+20),
        '10': ra.randint(+5,+20),
        'te': ra.randint(-10,+10)
    }
    return dData
while 1:
    dData = Generate()
    MyCnx = req.post(sURL,json=dData)
    MyCnx2 = req.post(sURL2,json=dData)
    ti.sleep(5)
MyCnx.close()
MyCnx2.close()
