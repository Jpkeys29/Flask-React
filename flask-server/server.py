from flask import Flask

app = Flask(__name__)

# Students API route

@app.route("/students")
def students():
    return {"students": ["Student1", "Student2", "Student3"]}

if __name__ == "__main__":
    app.run(debug=True, port=3000)


