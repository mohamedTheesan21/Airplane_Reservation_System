import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST, //local host name
    user: process.env.MYSQL_USER, //username
    password: process.env.MYSQL_PASSWORD, // mysql password of your computer
    database: process.env.MYSQL_DATABASE, //database name
  })
  .promise();

export async function getFlightSchedule() {
  const [row] = await pool.query(`
  select Flight_ID,origin,destination,Departure_Date_Time,Arrival_Date_Time
  from flight
  `);
  return row;
}
const flightData = await getFlightSchedule();
console.log(flightData);

export async function getAirplanes() {
  const [row] = await pool.query("select * from airplane");
  return row;
}

const result = await getAirplanes();

export async function getAirplane(plane_ID) {
  const [row] = await pool.query(
    `
  select * 
  from airplane
  where plane_ID = ?`,
    [plane_ID]
  );
  return row[0];
}

export async function createUser(Passport_ID, User_type) {
  const result = await pool.query(
    `
  insert into user(Passport_ID,User_type)
  values(?,?)`,
    [Passport_ID, User_type]
  );
  return result;
}

//const result = await createUser("PassportID5", "Guest");
//console.log(result);
//const airplane = await getAirplane(100);
//console.log(airplane);
