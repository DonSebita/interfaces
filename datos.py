import random as ra,requests as req, time as ti

sURL = 'http://127.0.0.1:8000/datos'

def Generate():
    dData = {
        '01': ra.randit(+5,+20),
        '25': ra.randit(+5,+20),
        '10': ra.randit(+5,+20),
        'te': ra.randit(-10,+10)
    }
    return dData
while 1:
    dData = Generate()
    MyCnx = req.post(sURL,json=dData)
    ti.sleep(5)
MyCnx.close()
