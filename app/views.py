from app import app
from flask import render_template
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
    return render_template('index.html')
