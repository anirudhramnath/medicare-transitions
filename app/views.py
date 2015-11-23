from app import app
from flask import render_template
from flask import request
from flask import Flask, session
import os

PATH_TO_DATA = os.getcwd()+'/app/static/data'
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

@app.route('/')
def index():
	patient_image = []
	id = 1
	patients = os.listdir(PATH_TO_DATA)
	for patient in patients:
		patient_image.append( ('static/data/'+patient+'/image.png', patient,id) )
		id+=1
	print patient_image
	return render_template('choosePatient.html', patient_image=patient_image)

@app.route('/vitals/',methods=['POST'])
def vitals():
	if request.method == 'POST':
		print request.form['alignment']
		plist = request.form['alignment']
		plist = plist.split(',')
	patient_image = []
	for patient in plist:
		patient_image.append(('../'+patient))
	return render_template('chooseOptions.html', patient_image=patient_image)
   # return render_template('index.html')

@app.route('/showVitals', methods=['POST'])
def showVitals():
	body_system = request.form.getlist("bodySystem")
	if body_system == []:
		body_system = session['tmp']
		vitals_list = []
		vitals_list = request.form.getlist("vitals")
	else:
		session['tmp'] = body_system
		vitals_list = ['1','2','3','4','5','6']
	return render_template('index.html', body_system = body_system,vitals_list = vitals_list)

