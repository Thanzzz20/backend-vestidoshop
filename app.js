import generator from "./src/api/index.js";

// Import the express module
import express from 'express';
import cors from "cors";
import { MikroORM} from '@mikro-orm/postgresql'
// Create an instance of the express application
const app=express();
// Specify a port number for the server
const port=5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', generator());
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

MikroORM.init({
    user: 'postgres',
    password: '123',
    dbName: 'vestidoshop',
    host: 'localhost',
    port: '5432',
    entities: ['./dist/entities']
}).then(()=>{
    console.log('db connected')
})

const data = [
    {
        name: 'salwa',
        umur: 20
    },
    {
        name: 'arkan',
        umur: 18
    },
    {
        name: 'hanif',
        umur: 17
    },
    {
        name: 'keefa',
        umur: 25
    },
] 


app.get("/data", (req, res) => {
const name = req.params.name
})

app.get("/data/:name", (req, res) => {
    // mengambil data dari url menggunakan req.params
    const name = req.params.name
    console.log(name)
    // mencari data dengan nama yang sama dengan di url
    const dataSpecific = data.filter((x)=> x.nama == name)
    res.status(200).json(dataSpecific);
  });

  app.post("/data", (req, res) => {
    const dataDariUser = req.body
    res.status(201).json(`nama saya ${dataDariUser.name}, umur saya ${dataDariUser.umur}`);
   });


   app.put("/data/:name", (req, res) => {
    const name = req.params.name
    

    const index = data.findIndex((val)=> val.name == name)

    if(index < 0){
        res.status(404).json({message: 'data tidak ada'})
    }

    console.log(dataDariUser, name);

    data[index].name = dataDariUser.name


    res.status(201).json(data[index]);
   });

   app.delete("/data/:name", (req, res) => {
    const name = req.params.name
    const dataDariUser = req.body

    const index = data.findIndex((val)=> val.name == name)

    if(index < 0){
        res.status(404).json({message: 'data tidak ada'})
    }

   data.splice(index,1)

    res.status(200).json(data);
   });





   