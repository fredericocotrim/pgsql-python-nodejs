# pgsql-python-nodejs

PostgreSQL - Python - Node.js

Environment Variables:
- PYTHONHOME=C:\Python\Python37
- PYTHONPATH=C:\Python\Python37
- Path=...;%PYTHONPATH%;%PYTHONPATH%\Scripts

Files:

- python\MyFunctions.py - the file (MyFunctions.py) must be placed inside the indicated directory in the environment variable PYTHONPATH;
- nodejs - the directory (nodejs) must be placed inside the indicated directory in the environment variable PYTHONPATH; inside the directory %PYTHONPATH%\nodejs execute the command "yarn" to download/install the packages locally (node_modules) and after that execute the command "yarn build" to compile the files;
- pgsql\MyFunctions.sql - the contents of the file (MyFunctions.sql) must be executed in PostgreSQL;

References:
- https://pt.slideshare.net/spjuliano/plpython-programando-em-python-no-postgresql-92426076
- http://sweetme.at/2014/02/17/a-simple-approach-to-execute-a-node.js-script-from-python/
