import Request from "./Request.js";
function sdoUpdate(){
    let data={
        "sname":document.getElementById("sname").innerHTML,
        "organiser":document.getElementById("organiser").value,
        "phone":document.getElementById("phone").value,
        "email":document.getElementById("email").value
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=updateSponser",Qs.stringify(data))
    .then(res => {
        let response=res['data'];
        document.getElementById("content").innerHTML=response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    })
}

function rdoUpdate(){
    let data={
        "rid":document.getElementById("rid").innerHTML,
        "rname":document.getElementById("rname").value,
        "rloc":document.getElementById("rloc").value,
        "plimit":document.getElementById("plimit").value,
        "date":document.getElementById("date").value,
        "category":document.getElementById("category").value
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=updateRaceinfo",Qs.stringify(data))
    .then(res => {
        let response=res['data'];
        document.getElementById("content").innerHTML=response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    })
}

function idoUpdate(){
    let data={
        "id": document.getElementById("id").innerHTML,
        "password": document.getElementById("password").value,


    };
    Request().post("http://localhost/MVC_final/public/index.php?action=updateIdentity",Qs.stringify(data))
    .then(res => {
        let response=res['data'];
        document.getElementById("content").innerHTML=response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    })
}

function adoUpdate(){
    let data={
        "name":document.getElementById("name").innerHTML,
        "age":document.getElementById("age").value,
        "phone":document.getElementById("phone").value,
        "email":document.getElementById("email").value,
        "category":document.getElementById("category").value,
        "catenum":document.getElementById("catenum").value
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=updateApplicant",Qs.stringify(data))
    .then(res => {
        let response=res['data'];
        document.getElementById("content").innerHTML=response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    })
}
export{sdoUpdate,rdoUpdate,idoUpdate,adoUpdate};

