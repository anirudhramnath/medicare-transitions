from flask import Flask

app = Flask(__name__)
from app import views
from flask import render_template
