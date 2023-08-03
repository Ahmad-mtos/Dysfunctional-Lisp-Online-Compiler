# Dysfunctional Lisp Online Compiler

Welcome to the Dysfunctional Lisp Online Compiler repository. This project serves as an extensive online documentation for <a href="https://github.com/thecarrot123/Compiler"> Dysfunctional Lisp </a>, providing a comprehensive platform to learn and explore the language. With the online compiler, you can test Dysfunctional Lisp code snippets directly in your web browser, facilitating a seamless and interactive learning experience.

# How to Run

To run the project on a local machine, use one of these methods:

## Using Docker

> ### Requirements
> 
> - Docker version 20.10.21
> - docker-compose version 1.29.2

1. Clone the repository:

```bash
    git clone https://github.com/Ahmad-mtos/Dysfunctional-Lisp-Online-Compiler.git
```

2. Navigate to the project directory:

```bash
    cd Dysfunctional-Lisp-Online-Compiler
```

3. Build the docker compose:

```bash
    docker-compose build --no-cache 
```

4. Run the docker:

```bash
    docker-compose up
```

5. Open your web browser and visit http://localhost:3030 to access the Dysfunctional Lisp Online Compiler.

## Manually

> ### Requirements
>
> - npm 9.5.1
> - Node v18.16.1
> - Python 3.10.6

1. Clone the repository:

```bash
    git clone https://github.com/Ahmad-mtos/Dysfunctional-Lisp-Online-Compiler.git
```

2. Navigate to the backend directory:

```bash
    cd Dysfunctional-Lisp-Online-Compiler/flask-backend
```

3. Install the requirements:

```bash
    pip install -r requirements.txt
```

4. Set the environment variable and start the Flask server: 
 - For Linux:

```bash
    export FLASK_RUN=app.py && flask run
```

5. navigate to the frontend directory:

```bash
    cd ../frontend
```

6. Install the required dependencies:

```bash
    npm install
```

7. Start the frontend development server:

```bash
    npm start
```

8. Open your web browser and visit http://localhost:3000 to access the Dysfunctional Lisp Online Compiler.

# Features

- An interactive compiler
- An appealing code editor

# Planned Features

- A full documentation of the language
- A deployed version of the project
- A section where one can solve some problems 
- Add marcos to the language
