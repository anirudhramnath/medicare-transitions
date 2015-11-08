from app import app
from flask import render_template
from flask import request
import os

PATH_TO_DATA = os.getcwd()+'/app/static/data'

@app.route('/')
def index():
        patient_image = []

        patients = os.listdir(PATH_TO_DATA)
        for patient in patients:
            patient_image.append( ('static/data/'+patient+'/image.png', patient) )

        print patient_image
        return render_template('choosePatient.html', patient_image=patient_image)

@app.route('/vitals/')
def vitals():
    return render_template('chooseOptions.html')
   # return render_template('index.html')

@app.route('/showVitals', methods=['POST'])
def showVitals():
    body_system = request.form.getlist("bodySystem")
    return render_template('index.html', body_system = body_system)
