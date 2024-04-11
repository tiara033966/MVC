import {sshowInsertPage} from "./showInsertPage.js";
import {sshowUpdatePage} from "./showUpdatePage.js";
import {sdoDelete} from "./doDelete.js";
import Request from "./Request.js";
import loginPage from './doLogin.js';


export default function sponserInfo(){
    Request().get("http://localhost/MVC_final/public/index.php?action=getSponsers")
    .then(res => {
        let response = res['data'];
        console.log(response['status']);
        switch(response['status'])
        {
            case 200:
                const rows = response['result'];
                let str = `<table align="center">`;
                str += `<tr><td>主辦方名稱</td><td>主辦人</td><td>電話</td><td>email</td><td><button id='newSponser'>新增主辦方</button></td></tr>`;
                rows.forEach(element => {
                    str += `<tr>`;
                    str += `<td name='sname'>` + element['sname'] + `</td>`;
                    str += `<td>` + element['organiser'] + `</td>`;
                    str += `<td>` + element['phone'] + `</td>`;
                    str += `<td>` + element['email'] + `</td>`;
                    str += `<td><button name='updateSponser'>修改</button> <button name='deleteSponser'>刪除</button></td>`;
                    str += `</tr>`;
                });
                str += `</table>`;
                document.getElementById("content").innerHTML=str;

                document.getElementById("newSponser").onclick = function(){ 
                    sshowInsertPage();
                };
                const snames = document.getElementsByName("sname");
                
                const updateButtons = document.getElementsByName("updateSponser");
                for(let i=0; i<updateButtons.length; i++){
                    updateButtons[i].onclick = function(){
                        sshowUpdatePage(snames[i].innerText);
                    };
                }
                
                const deleteButtons = document.getElementsByName("deleteSponser");
                for(let i=0; i<deleteButtons.length; i++){
                    deleteButtons[i].onclick = function(){
                        sdoDelete(snames[i].innerText);
                    };
                }
                if(window.localStorage){
                    window.localStorage.setItem('jwtToken',response['token']);
                }
                break;
            case 401:
                loginPage();
                break;

            case 403:
                alert('權限不足');
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
