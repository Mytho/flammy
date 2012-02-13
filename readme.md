# Readme

This repository relies on [Flask](https://github.com/mitsuhiko/flask) and [Python-Markdown](https://github.com/waylan/Python-Markdown). Flask in it's turn relies on [Werkzeug](https://github.com/mitsuhiko/werkzeug) and [Jinja2](https://github.com/mitsuhiko/jinja2).

Once you have these packages installed (or available as a module), you can easily build a webpage by creating new markdown files in the `templates/content/` folder.

The menu of the page will be constructed 'auto-magically' using just the files in the `templates/content` folder, while leaving the home-button the first in line.
