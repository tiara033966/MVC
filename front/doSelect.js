import Request from "./Request.js";
function sdoSelect(){
    Request().get("http://localhost/MVC_final/public/index.php?action=getSponsers")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<table align="center">`;
                rows.forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['sname'] + "</td>";
                    str += "<td>" + element['organiser'] + "</td>";
                    str += "<td>" + element['phone'] + "</td>";
                    str += "<td>" + element['email'] + "</td>";
                    str += "</tr>";
                });
                str += `</table>`;
                document.getElementById("content").innerHTML=str;
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
}

function rdoSelect(){
    Request().get("http://localhost/MVC_final/public/index.php?action=getRaceinfo")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<table align="center">`;
                rows.forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['rid'] + "</td>";
                    str += "<td>" + element['rname'] + "</td>";
                    str += "<td>" + element['rloc'] + "</td>";
                    str += "<td>" + element['plimit'] + "</td>";
                    str += "<td>" + element['date'] + "</td>";
                    str += "<td>" + element['category'] + "</td>";
                    str += "</tr>";
                });
                str += `</table>`;
                document.getElementById("content").innerHTML=str;
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
}

function idoSelect(){
    Request().get("http://localhost/MVC_final/public/index.php?action=getIdentitys")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = '<table align="center">';
                //str += "<tr><td>編號</td><td>姓名/td><td>密碼/td></tr>"
                rows.forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['id'] + "</td>";
                    str += "<td>" + element['password'] + "</td>";
                    str += "</tr>";
                });
                str += '</table>';
                document.getElementById("content").innerHTML=str;
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
}
function adoSelect(){
    Request().get("http://localhost/MVC_final/public/index.php?action=getApplicants")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<table align="center">`;
                rows.forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['name'] + "</td>";
                    str += "<td>" + element['age'] + "</td>";
                    str += "<td>" + element['phone'] + "</td>";
                    str += "<td>" + element['email'] + "</td>";
                    str += "<td>" + element['category'] + "</td>";
                    str += "<td>" + element['catenum'] + "</td>";
                    str += "</tr>";
                });
                str += `</table>`;
                document.getElementById("content").innerHTML=str;
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
}
export{sdoSelect,rdoSelect,idoSelect,adoSelect};