import mysql from 'mysql';

export const db = async () => {
    try{
        await mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "",
          database: "internacional"
        });
        console.log("Database on"); 
    } catch (error) {
        console.log(error); 
    }
}