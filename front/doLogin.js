import Request from './Request.js';
export default function doLogin(){
    const sp = `
        帳號:<input type="text" id="id"><br>
        密碼:<input type="password" id="password"><br>
        <button id="login">登入</button>
        <div id="content"></div>
    `;
    document.getElementById("root").innerHTML = sp;
    document.getElementById("login").onclick = function(){
        const data={
            "id": document.getElementById("id").value,
            "password": document.getElementById("password").value,
        };
        Request().post('/index.php?action=doLogin', Qs.stringify(data))
        .then(function(resp){
            let response = resp['data'];
            console.log(response);
            if(response['status'] == 200){
                if(window.localStorage){ 
                    window.localStorage.setItem("jwtToken", response['token']);
                }
                location.reload();
            }
            else{
                alert('帳號密碼錯誤!');
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
}

