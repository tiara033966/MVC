import sponserInfo from './sponserInfo.js';
import { raceInfo } from './raceInfo.js';
import { applicantInfo } from './applicantInfo.js';
export default function main(){
    const sp=`
        <button id="sponser">主辦方資料</button>
        <button id="race">競賽資料</button>
        <button id="appli">我要報名</button>
        <div id="content"></div>
    `;
    document.getElementById('root').innerHTML=sp;
    document.getElementById('sponser').onclick=function(){
        sponserInfo();
    };
    document.getElementById('race').onclick=function(){
        raceInfo();
    };
    document.getElementById('appli').onclick=function(){
        applicantInfo()
    };
}