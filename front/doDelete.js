import Request from "./Request.js";
function sdoDelete(sname){
    let data = {
        "sname": sname,
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=removeSponser",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}
function rdoDelete(rid){
    let data = {
        "rid": rid,
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=removeRaceinfo",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

function idoDelete(id){
    let data = {
        "id": id,
    };
    Request().post("http://localhost/MVC_final/index.php?action=removeIdentity",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

function adoDelete(name){
    let data = {
        "name": name,
    };
    Request().post("http://localhost/MVC_final/index.php?action=removeApplicant",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        document.getElementById("content").innerHTML = err;
    })          
}

export{sdoDelete,rdoDelete,idoDelete,adoDelete};
