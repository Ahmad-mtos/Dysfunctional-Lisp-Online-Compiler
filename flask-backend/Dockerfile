FROM python:3.10

WORKDIR /app
# install dependencies  
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . . 

# entry point
CMD ["python3", "app.py"]