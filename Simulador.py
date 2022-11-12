import random as ra,requests as req, time as ti

sURL = 'http://127.0.0.1:8000/marcadores'

def Generate():
    dData = {

        '01': [ra.randint(+5,+20),ra.randint(+5,+20),ra.randint(+5,+20),ra.randint(+5,+20)],
        '25': [ra.randint(+5,+20),ra.randint(+5,+20),ra.randint(+5,+20),ra.randint(+5,+20)],
        '10': [ra.randint(+5,+20),ra.randint(+5,+20),ra.randint(+5,+20),ra.randint(+5,+20)]
    }
    return dData
while 1:
    dData = Generate()
    MyCnx = req.post(sURL,json=dData)
    ti.sleep(5)
MyCnx.close()
        