const express = require("express");
const todoRouter = express.Router({
  caseSensitive: false,
});
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "tlsdltkr44",
  database: "dogcorn",
});
const getFormatDate = (date) => {
  var year = date.getFullYear();
  var month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  var day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return year + "-" + month + "-" + day;
};
todoRouter.get("/info", (req, res) => {
  const GET_TODOS_QUERY = `select *  from todos where  userid =  "${req.session.email}";`;
  conn.query(GET_TODOS_QUERY, (err, rows, field) => {
    res.status(200).send(rows);
  });
});

todoRouter.get("/add", (req, res) => {
  const text = req.query.text;
  const today = getFormatDate(new Date(Date.now()));
  const GET_ADD_TODO_QUERY = `insert into todos(userid, text, date, checked) values('${
    req.session.email
  }','${text}', '${today}', ${0})`;
  conn.query(GET_ADD_TODO_QUERY, (err, rows, field) => {
    if (err) throw err;
    console.log(text);
  });
});

todoRouter.get("/check", (req, res) => {
  const id = req.query.id;
  const GET_CHECK_TODO_QUERY = `update todos set checked = 1 where todoid=${id};`;
  conn.query(GET_CHECK_TODO_QUERY, (err, rows, field) => {
    if (err) throw err;
    res.status(200).send(rows);
  });
});

todoRouter.get("/delete", (req, res) => {
  const id = req.query.id;
  const GET_DELETE_TODO_QUERY = `delete from todos  where todoid=${id}`;
  conn.query(GET_DELETE_TODO_QUERY, (err, rows, field) => {
    if (err) throw err;
    res.status(200);
  });
});

module.exports = todoRouter;
