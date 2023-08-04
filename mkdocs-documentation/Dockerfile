FROM python:3.10

WORKDIR /app  
RUN pip install --upgrade pip
RUN pip install mkdocs-pymdownx-material-extras

COPY . . 

CMD ["mkdocs", "build"]