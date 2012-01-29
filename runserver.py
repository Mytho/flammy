import markdown, os
from flask import abort, Flask, render_template
app = Flask(__name__)

@app.route('/')
def template():
    return render_template('template.html')

@app.route('/<page>')
def page(page):
    path = './templates/content/' + page + '.md'
    if (os.path.isfile(path)):
        f = open(path)
        html = markdown.markdown(f.read())
        f.close()
        return html
    else:
        abort(404)

if __name__ == "__main__":
    app.run('0.0.0.0')
