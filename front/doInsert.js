import Request from "./Request.js";
function sdoInsert(){
    let data = {
         "sname": document.getElementById("sname").value,
         "organiser": document.getElementById("organiser").value,
         "phone": document.getElementById("phone").value,
         "email": document.getElementById("email").value
     };
     Request().post("http://localhost/MVC_final/public/index.php?action=newSponser",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML=response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }
function rdoInsert(){
    let data = {
         "rid": document.getElementById("rid").value,
         "rname": document.getElementById("rname").value,
         "rloc": document.getElementById("rloc").value,
         "plimit": document.getElementById("plimit").value,
         "date": document.getElementById("date").value,
         "category": document.getElementById("category").value
     };
     Request().post("http://localhost/MVC_final/public/index.php?action=newRaceinfo",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML=response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }

function idoInsert(){
    let data = {
         "id": document.getElementById("id").value,
         "password": document.getElementById("password").value,
       

     };
     Request().post("http://localhost/MVC_final/public/index.php?action=newIdentity",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML=response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }

 function adoInsert(){
    let data = {
         "name": document.getElementById("name").value,
         "age": document.getElementById("age").value,
         "phone": document.getElementById("phone").value,
         "email": document.getElementById("email").value,
         "category": document.getElementById("category").value,
         "catenum": document.getElementById("catenum").value,
       

     };
     Request().post("http://localhost/MVC_final/public/index.php?action=newApplicant",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         document.getElementById("content").innerHTML=response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }
 export {sdoInsert,rdoInsert,idoInsert,adoInsert};
