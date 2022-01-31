import fetch from "node-fetch";
let url = 'https://vas-vendors.myfela.ng/staging/electricity/v2/validateMeterNo';
let body = {
  disco:"IKEDC",
  account_type: "prepaid",
  meter_number: "54150131982"
  }
let options = {
  method : "POST", 
  headers: {
    'Content-Type' : 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTY2ZTU2NzIyYWU2NTA2NGZiNGJlOCIsImlhdCI6MTYwNzEwNTk5OCwiZXhwIjozMTcxNTE1NDgzOTh9.-1ZVCt99jk6a4KTOch4dH3mZaIDSu79ojO0P6QPf_Go'
  },
  body : JSON.stringify(body)
};

fetch(url, options) 
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));