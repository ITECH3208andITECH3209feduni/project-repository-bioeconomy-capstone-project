# File Reader

This is a Python file reader component that allows you to easily read and process CSV files with attention of uploading to a database.

## Containerization 

The file reader component is packaged as a container image for cross platform compatibility.

### Assumptions

The workstation of the developer has the following applications installed:

- docker
- docker-compose

### Building the Docker Image

TODO

### Installing Host Binaries

```bash
#Installing Apt Dependencies
apt install $(cat dependencies/apt.txt)

#Uninstalling Apt Dependencies
apt remove $(cat dependencies/apt.txt)
```

## Python Environment

The file reader component is developed using python as the core programming language.

### Assumptions

The workstation of the developer has the following applications installed:

- python
- python virtualenv

### Developing the Python Application

- Documenting the python module dependencies
- Lint test
- Unit test

### Setting up the Python Virtual Environment

```bash
# Creating the virtual environment
python3 -m venv .venv 

# Activating the virtual environment
source .venv/bin/activate

# Installing dependencies
pip3 install -r dependencies/pip.txt

# Validating current dependencies
pip3 list

# Deactivating virtual environment
deactivate

# Uninstalling dependencies
pip3 uninstall -r dependencies/pip.txt
```

## Prototyping 

Prototyping the file reader python application is performed under `src/prototype.py`. It can be executed using the following command:
```bash
python3 src/prototype.py
```
