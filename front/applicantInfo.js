import {ashowInsertPage} from "./showInsertPage.js";
import {ashowUpdatePage} from "./showUpdatePage.js";
import {adoDelete} from "./doDelete.js";
import Request from "./Request.js";
import loginPage from './doLogin.js';


export default function  applicantInfo(){
    Request().get("http://localhost/MVC_final/public/index.php?action=getApplicants")
    .then(res => {
        let response = res['data'];
        console.log(response['status']);
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<table align="center">`;
                str += `<tr><td>姓名</td><td>年齡</td><td>電話</td><td>email</td><td>報名類別</td><td>報名人數</td><td><button id='newApplicant'>新增報名者</button></td></tr>`;
                rows.forEach(element => {
                    str += `<tr>`;
                    str += `<td name='name'>` + element['name'] + `</td>`;
                    str += `<td>` + element['age'] + `</td>`;
                    str += `<td>` + element['phone'] + `</td>`;
                    str += `<td>` + element['email'] + `</td>`;
                    str += `<td>` + element['category'] + `</td>`;
                    str += `<td>` + element['catenum'] + `</td>`;
                    str += `<td><button name='updateApplicant'>修改</button> <button name='removeApplicant'>刪除</button></td>`;
                    str += `</tr>`;
                });
                str += `</table>`;
                document.getElementById("content").innerHTML=str;

                document.getElementById("newApplicant").onclick = function(){ 
                    ashowInsertPage();
                };
                const names = document.getElementsByName("name");
                
                const updateButtons = document.getElementsByName("updateApplicant");
                for(let i=0; i<updateButtons.length; i++){
                    updateButtons[i].onclick = function(){
                        ashowUpdatePage(names[i].innerText);
                    };
                }
                
                const deleteButtons = document.getElementsByName("removeApplicant");
                for(let i=0; i<deleteButtons.length; i++){
                    deleteButtons[i].onclick = function(){
                        adoDelete(names[i].innerText);
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
export {applicantInfo}