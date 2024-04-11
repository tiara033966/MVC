export default function Request(){
    const req=axios.create({
        baseURL: "http://localhost/MVC_final/public",
        headers: {'Authorization':window.localStorage.getItem('jwtToken')}
    })
    return req;
}