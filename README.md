# JSON-Mock-Server
An example JSON-Server project with some useful customizations.

## Introduction

JSON Server is a simple project that helps you to setup a REST API with CRUD operations very fast. The project can be found at https://github.com/typicode/json-server.

It's very easy to get started. 

First you need to create db.json file. (file containing JSON data).

e.g db.json

```
{
 "employees" : [{
    "id": 1,
    "name": "Stefan Anderson",
    "email": "Flossie.Bailey73@gmail.com",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
    "gender": "female",
    "address": {
      "city": "Trishamouth",
      "country": "Croatia"
    },
    "age": 29,
    "departmentID": 3,
    "hireDate": "2018-08-15T20:56:16.673Z"
  }...
  ]
}

```

Then you can start JSON server with this command. 

```
$ json-server --watch db.json
```

It will create these HTTP endpoints automatically:

```
  GET    /employees
  GET    /employees/{id}
  POST   /employees
  PUT    /employees/{id}
  PATCH  /employees/{id}
  DELETE /employees/{id}

```
## Customizarion Examples

This is great for experimentation. But as you start using it for real projects, you will neep more customization on top of these REST APIs.

These are some of customizations we needed in our project. 

#### Get custom response with total count and success flag. 

```
 e.g.  {
    "success": true,
    "total": 50,
    "data": [
      {
      "id": 1,
      "name": "Stefan Anderson",
      "email": "Flossie.Bailey73@gmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
      "gender": "female",
      "address": {
        "city": "Trishamouth",
        "country": "Croatia"
      },
      "age": 29,
      "departmentID": 3,
      "hireDate": "2018-08-15T20:56:16.673Z"
    },...
  ]
  }
```

#### Create different db.json file per module. 

e.g There are 2 modules - *Employees* and *Departments*. 

```
  /employees
  /departments
```
It's very difficult to maintain single *db.json* file for all data. So you will need different *db.json* per module.

#### Validate mandatory fields. 

By default, JSON server doesn't mandate any fields when you create new resource.  

e.g. It is possible to create new Employee record without any fields using this API. 

```
 POST /employees
```

But you might want to make Employee Name as mandatory field and throw 400 error if its missing. 

#### Mock large amount of data with Faker.js

If you need a larger amount of data the manual way can be cumbersome. An easy solution to this problem is to use the Faker.js (https://github.com/marak/Faker.js/) library to generate fake data. 

#### Rewrite URL

e.g. To get employees list where age > 40, 

instead of writing

```
  /employees?age_gte=40
```

you want to write 

```
  /employees?age>=40
```

## Set up

Install npm dependencies. 

```
npm install 
```

Start server.

```
npm start 
```

##  Endpoints

The following HTTP endpoints are created:

```
  http://localhost:8080/employees
  http://localhost:8080/departments

```

