# pgsql-python-nodejs

PostgreSQL - Python - Node.js

Is it the best way? I don't think so, but it works!

Verisons:
- PostgreSQL 15.2-1, compiled by Visual C++ build 1914, 64-bit
- Python 3.10.7 (EDB Language Pack v3.0-3)
- Node.js 18.14.0

Environment Variables:
- PYTHONHOME=C:\edb\languagepack\v3\Python-3.10
- PYTHONPATH=C:\edb\languagepack\v3\Python-3.10
- Path=...;%PYTHONPATH%;%PYTHONPATH%\Scripts

Files:
- nodejs - the directory (nodejs) must be placed inside the indicated directory in the environment variable PYTHONPATH; inside the directory %PYTHONPATH%\nodejs execute the command "yarn" to download/install the packages locally (node_modules) and after that execute the command "yarn build" to compile the files;
- python\MyFunctions.py - the file (MyFunctions.py) must be placed inside the indicated directory in the environment variable PYTHONPATH;
- pgsql\MyFunctions.sql - the contents of the file (MyFunctions.sql) must be executed in PostgreSQL;

References:
- https://pt.slideshare.net/spjuliano/plpython-programando-em-python-no-postgresql-92426076
- https://levelup.gitconnected.com/how-to-execute-shell-commands-properly-in-python-5b90c1a9213f
- https://docs.python.org/pt-br/dev/library/subprocess.html#subprocess.run
- https://csatlas.com/python-subprocess-run-exit-code/