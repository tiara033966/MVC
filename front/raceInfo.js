import {rshowInsertPage} from "./showInsertPage.js";
import {rshowUpdatePage} from "./showUpdatePage.js";
import {rdoDelete} from "./doDelete.js";
import loginPage from './doLogin.js';
import Request from "./Request.js";


function raceInfo() {
    Request().get("http://localhost/MVC_final/public/index.php?action=getRaceinfo")
        .then(res => {
            let response = res['data'];
            switch (response['status']) {
                case 200:
                    const rows = response['result'];
                    let str = `<table align="center">`;
                    str += `<tr><td>競賽編號</td><td>競賽名稱</td><td>競賽地點</td><td>人數限制</td><td>日期</td><td>競賽類別</td><td><button id='newRaceinfo'>新增競賽資訊</button></td></tr>`;
                    rows.forEach(element => {
                        str += `<tr>`;
                        str += `<td name='rid'>` + element['rid'] + `</td>`;
                        str += `<td>` + element['rname'] + `</td>`;
                        str += `<td>` + element['rloc'] + `</td>`;
                        str += `<td>` + element['plimit'] + `</td>`;
                        str += `<td>` + element['date'] + `</td>`;
                        str += `<td>` + element['category'] + `</td>`;
                        str += `<td><button class='updateRaceinfo'>修改</button><button class='deleteRaceinfo'>刪除</button></td>`;
                        str += `</tr>`;
                    });
                    str += `</table>`;
                    document.getElementById("content").innerHTML = str;

                    document.getElementById("newRaceinfo").onclick = function () {
                        rshowInsertPage();
                    };

                    const rids = document.getElementsByName("rid");
                    const updateButtons = document.querySelectorAll(".updateRaceinfo");
                    const deleteButtons = document.querySelectorAll(".deleteRaceinfo");

                    updateButtons.forEach((button, index) => {
                        button.onclick = function () {
                            rshowUpdatePage(rids[index].innerText);
                        };
                    });

                    deleteButtons.forEach((button, index) => {
                        button.onclick = function () {
                            rdoDelete(rids[index].innerText);
                        };
                    });

                    if (window.localStorage) {
                        window.localStorage.setItem('jwtToken', response['token']);
                    }
                    break;
                case 401:
                    loginPage();
                    break;
                case 403:
                    alert('權限不足');
                    break;
                default:
                    alert(response['message']);
                    break;
            }
        })
        .catch(err => {
            alert('發生錯誤，請稍後再試！');
            console.error(err);
        });
}

export { raceInfo };
