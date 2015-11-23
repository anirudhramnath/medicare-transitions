from app import app
from flask import render_template
from flask import request
import os, json
import MySQLdb
from flask import Flask, session

PATH_TO_DATA = os.getcwd()+'/app/static/data'
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

num_patients = 0
patient_id_single_page = 1

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

@app.route('/bfilters/',methods=['POST'])
def vitals():
    global patient_id_single_page

    if request.method == 'POST':
        plist = request.form['pids']
        plist = plist.split(',')
        num_patients = request.form['alignment']
        num_patients = len(num_patients.split(","))
        if num_patients == 1:
            patient_id_single_page = int(request.form['alignment'])
    patient_image = []
    for patient in plist:
        patient_image.append(('../'+patient))
    return render_template('chooseOptions.html', patient_image=patient_image)


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

    global num_patients

    if num_patients > 1:
        return render_template('show_two.html', body_system = body_system)
    else:
        global patient_id_single_page
        # fetch value for resident plan
        patient_id = patient_id_single_page

        plan_results = {}

        # Open database connection
        db = MySQLdb.connect("52.33.170.186","hciuser","hciproject","hci" )

        # prepare a cursor object using cursor() method
        cursor = db.cursor()

        # execute SQL query using execute() method.
        cursor.execute("SELECT body_system,plan1 from body_systems where patient_id="+ str(patient_id))

        # Fetch a single row using fetchone() method.
        data = cursor.fetchall()

        for row in data:
            plan_results[row[0]] = row[1].split('^')

        # disconnect from server
        db.close()

        print plan_results
        return render_template('index.html', body_system = body_system, vitals_list = vitals_list,
            plan_results = plan_results)

@app.route('/updateResidentPlan',methods=['POST'])
def updateResidentPlan():

    global patient_id_single_page

    new_plan = request.form['residentplan']
    body_system = request.form['body_system']
    new_plan = '^'.join(new_plan.split("\n"))

    db = MySQLdb.connect("52.33.170.186","hciuser","hciproject","hci" )

    # prepare a cursor object using cursor() method
    cursor = db.cursor()

    q = "UPDATE body_systems set plan1='%s' WHERE body_system='%s' AND patient_id='%s'" % (
        new_plan, body_system, patient_id_single_page)
    cursor.execute(q)
    db.commit()

    # disconnect from server
    db.close()

    return json.dumps({'status':'OK'})
