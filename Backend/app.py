from flask import Flask, request, jsonify
import yagmail
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/submit", methods=["POST"])

def submit():
    data = request.json  # React sends JSON
    # print(data)
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    try:
        yag = yagmail.SMTP("surge@iitpkd.ac.in", "lpqzbhhitkeamwum")
        yag.send(
            to="surge@iitpkd.ac.in",   # who should receive
            subject=f"New message from {name} \n\n Email:{email}",
            contents=f"Sender: {email}\n\nMessage:\n{message}"
        )
        return jsonify({"status": "success", "msg": "Email sent!"})
    except Exception as e:
        return jsonify({"status": "error", "msg": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5174, debug=True)
