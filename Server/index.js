const express = require('express');
const path = require('path');
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');

const dbPath = path.join(__dirname,"employee.db");
let db = null;

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const cors = require('cors');




app.use(cors())

app.get('/', (request, response) =>{
    response.send("Server is Running");
})

app.get('/check', (request , response) =>{
    response.json("server is running");
})

app.post('/profile' , async (request , response) =>{

    const employee_id = request.body
    const {em_id} = employee_id
   
    const getEmployDetails = `SELECT * FROM employee WHERE employee_id = ${em_id}`

    const result =await db.all(getEmployDetails);
    response.json(result)
})

app.post('/login' , async (request, response) =>{

    const {userName , password} = request.body
    
    const getPassword = `
    SELECT employee_id , PASSWORD FROM employee WHERE employee_id == ${userName};
    `
    const result = await db.all(getPassword)
    const key = result[0].PASSWORD
    
   

    if (key === password){
        response.json({message : "success"});
    }else{
        response.json({message : 'userName and password did not match '})
    }
})

app.post('/addemployee', async(request, response) =>{
    const userDetails = request.body
    const {employId ,firstName , lastName , department,role ,gender ,username,password} = userDetails;
    
    const insertQuery = `
    INSERT INTO
  employee(
    employee_id,
    first_name,
    last_name,
    department,
    role,
    gender,
    user_name,
    PASSWORD,
    in_time,
    out_time,
    payroll
  )
VALUES
  (
    ?,?,?,?,?,?,?,?,?,?,?
  );
    `
const parms = [employId ,firstName , lastName , department,role ,gender ,username,password]

await db.run(insertQuery, parms, (error) =>{
    if (error) {
        console.log(error.message)
        response.json(error.message)
    }
    console.log("success");
    response.json("inserted successfully");
})
    response.json(userDetails)
})


app.get("/createtable" , async(request , response)=>{
    
    const createtable = `
        CREATE TABLE employee (
        employee_id integer PRIMARY KEY NOT NULL,
        first_name varchar(100),
        last_name varchar(100),
        department varchar(100),
        role varchar(100),
        gender varchar(100),
        user_name varchar(100),
        PASSWORD varchar(100),
        in_time time,
        out_time time,
        payroll integer
        );
    `
    await db.run(createtable);
    response.send("Table created successfully");
})
;

app.get("/getTable" , async(request , response) =>{
    const selectQuary = `
    SELECT * FROM  employee;
    `
    const result = await db.all(selectQuary);
    const data = JSON.stringify(result);
    console.log(data);
    response.send("success");
})

app.get("/insert" , async(request, response) =>{
    const insterQuery = `
    INSERT INTO
  employee(
    employee_id,
    first_name,
    last_name,
    department,
    role,
    gender,
    user_name,
    PASSWORD,
    in_time,
    out_time,
    payroll
  )
VALUES
  (
    000000001,
    "Shashidhar",
    "Berelly",
    "App - developer",
    "Front-End-Developer",
    "M",
    "Shashidhar",
    "Shashi@08",
    "9 :00",
    "6 :00",
    100
  );
    `
    await db.run(insterQuery);
    response.send("success")
    console.log("success");
})

const initilizeDbAndServer = async() =>{
    try {
        db = await open({
            filename : dbPath,
            driver : sqlite3.Database,
        });

        app.listen(5000, () =>{
            console.log("Server is running at localhost:5000")
        });

    } catch (error) {
        console.log(error.message);
        
    }
}


initilizeDbAndServer();
