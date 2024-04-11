import {sdoUpdate} from './doUpdate.js';
import {rdoUpdate} from './doUpdate.js';
import {adoUpdate} from './doUpdate.js';
//import {SdoUpdate} from './doUpdate.js';
import Request from "./Request.js";

function sshowUpdatePage(sname){
    let data = {
        "sname": sname,
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=getSponsers",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `主辦方名稱：<text id="sname">` + row['sname'] + `</text><br>`;
                str += `主辦人：<input type="text" id="organiser" value="` + row['organiser'] + `"><br>`;
                str += `電話：<input type="text" id="phone" value="` + row['phone'] + `"><br>`;
                str += `email：<input type="text" id="email" value="` + row['email'] + `"><br>`;
                str += `<button id="doupdate">修改</button>`;


                document.getElementById("content").innerHTML = str;
                document.getElementById("doupdate").onclick = function(){
                    sdoUpdate();
                };
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

function rshowUpdatePage(rid){
    let data = {
        "rid": rid,
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=getRaceinfo",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `競賽編號：<text id="rid">` + row['rid'] + `</text><br>`;
                str += `競賽名稱：<input type="text" id="rname" value="` + row['rname'] + `"><br>`;
                str += `競賽地點：<input type="text" id="rloc" value="` + row['rloc'] + `"><br>`;
                str += `人數限制：<input type="text" id="plimit" value="` + row['plimit'] + `"><br>`;
                str += `日期：<input type="text" id="date" value="` + row['date'] + `"><br>`;
                str += `競賽類別：<input type="text" id="category" value="` + row['category'] + `"><br>`;
                str += `<button id="doupdate">修改</button>`;


                document.getElementById("content").innerHTML = str;
                document.getElementById("doupdate").onclick = function(){
                    rdoUpdate();
                };
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

function ashowUpdatePage(name){
    let data = {
        "name": name,
    };
    Request().post("http://localhost/MVC_final/public/index.php?action=getApplicants",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `名稱：<text id="name">` + row['name'] + `</text><br>`;
                str += `年齡：<input type="text" id="age" value="` + row['age'] + `"><br>`;
                str += `電話：<input type="text" id="phone" value="` + row['phone'] + `"><br>`;
                str += `email：<input type="text" id="email" value="` + row['email'] + `"><br>`;
                str += `報名類別：<input type="text" id="category" value="` + row['category'] + `"><br>`;
                str += `報名人數：<input type="text" id="catenum" value="` + row['catenum'] + `"><br>`;
                str += `<button id="doupdate">修改</button>`;


                document.getElementById("content").innerHTML = str;
                document.getElementById("doupdate").onclick = function(){
                    adoUpdate();
                };
                break;
            default:
                document.getElementById("content").innerHTML=response['message'];
                
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err;  
    })          
}
export{sshowUpdatePage,rshowUpdatePage,ashowUpdatePage};
