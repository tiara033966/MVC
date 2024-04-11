import {sdoInsert} from "./doInsert.js";
import {rdoInsert} from "./doInsert.js";
import {adoInsert} from "./doInsert.js";
//import {SdoInsert} from "./doInsert.js";

function sshowInsertPage(){
    let str=`主辦方名稱:<input type="text" id="sname"><br>`;
    str+=`主辦人:<input type="text" id="organiser"><br>`;
    str+=`電話:<input type="text" id="phone"><br>`;
    str+=`email:<input type="text" id="email"><br>`;
    str+=`<button id="doinsert">新增</button>`;
    document.getElementById('content').innerHTML=str;
    document.getElementById('doinsert').onclick=function(){
        sdoInsert();
    };
}

function rshowInsertPage(){
    let str=`競賽編號:<input type="text" id="rid"><br>`;
    str+=`競賽名稱:<input type="text" id="rname"><br>`;
    str+=`競賽地點:<input type="text" id="rloc"><br>`;
    str+=`人數限制:<input type="text" id="plimit"><br>`;
    str+=`日期:<input type="text" id="date"><br>`;
    str+=`競賽類別:<input type="text" id="category"><br>`;
    str+=`<button id="doinsert">新增</button>`;
    document.getElementById('content').innerHTML=str;
    document.getElementById('doinsert').onclick=function(){
        rdoInsert();
    };
}

function ashowInsertPage(){
    let str=`名稱:<input type="text" id="name"><br>`;
    str+=`年齡:<input type="text" id="age"><br>`;
    str+=`電話:<input type="text" id="phone"><br>`;
    str+=`email:<input type="text" id="email"><br>`;
    str+=`報名類別:<input type="text" id="category"><br>`;
    str+=`報名人數:<input type="text" id="catenum"><br>`;
    str+=`<button id="doinsert">新增</button>`;
    document.getElementById('content').innerHTML=str;
    document.getElementById('doinsert').onclick=function(){
        adoInsert();
    };
}

export{sshowInsertPage,rshowInsertPage,ashowInsertPage};