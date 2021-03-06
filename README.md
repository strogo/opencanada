# OpenCanada Website
[![Build Status](https://www.travis-ci.org/CIGIHub/opencanada.svg?branch=staging)](https://www.travis-ci.org/CIGIHub/opencanada)
[![Coverage Status](https://coveralls.io/repos/github/CIGIHub/opencanada/badge.svg?branch=staging)](https://coveralls.io/github/CIGIHub/opencanada?branch=staging)

The opencanada.org website source.

Use Python 3.6+ and Django 1.11.x for best results.

## Setup
  -  Set up a virtualenv for the project (python3 -m venv opencanada)
  -  Install the appropriate requirements
    -  for development: `pip install -r requirements/dev.txt`

## Required Environment Variables
SECRET_KEY - The django SECRET_KEY setting.
Set environment variable in bash

BASE_URL - Base URL to use when referring to full URLs within the
Wagtail admin backend. e.g. in notification emails. Don't include '/admin' or
a trailing slash.

You can put them in a `.env` file beside manage.py. We use
[django-dotenv](https://pypi.python.org/pypi/django-dotenv/1.4.1).

## Migrations
Run any migrations required

## Git Hooks
Git hooks are provided in the hooks folder.

To install the hooks:

  -  navigate to the .git/hooks/ directory
  -  run `ln -s ../../hooks/<hookfile> <hookname>`  
    -  for example `ln -s ../../hooks/pre-commit.py pre-commit`

### Pre-Commit Hook
Performs flake8 and isort checks before allowing commit.

## Running Tests
To run the unit tests:

  -  run `./manage.py test --settings=opencanada.settings.test`
