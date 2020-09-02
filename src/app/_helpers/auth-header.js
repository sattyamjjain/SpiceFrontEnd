export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    //let admin = localStorage.getItem('admin')

    // console.log('user',user)
    //console.log('admin',admin)

    // if(admin  !==null && admin.roles.includes('ROLE_ADMIN')){
    //     if (admin && admin.accessToken) {
    //         console.log('admin token',admin.accessToken)
    //         return { 'Authorization': 'Bearer ' + admin.accessToken };
    //     } else {
    //         return {};
    //     }
    // }else{
        if (user && user.accessToken) {
            console.log(' user token',user.accessToken)
            return { 'Authorization': 'Bearer ' + user.accessToken };
        } else {
            return {};
        }
    // }
}