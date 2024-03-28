from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/save-demo-request",methods=['POST'])
def saveDemoRequest():
    date=request.form["date",""]
    time=request.form["time"]
    name=request.form["name",""]
    phone=request.form["phone"]

    return {
        "success": True,
        "message": "Saved the message successfully !"
    }


if __name__ == "__main__":
    app.run(debug=True)