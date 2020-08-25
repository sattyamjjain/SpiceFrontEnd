import axios from 'axios';

export class AuthAPIService {

    static async signup(values) {
        try {
            const res = await axios.post(`http://localhost:8080/api/auth/signup`,values);
            console.log('res',res)
            return res;
        } catch (err) {
            throw err;
        }
    }

    // static async login(email, password) {
    //     try {
    //         const res = await axios.post('/auth/login', {
    //             password,
    //             username: email,
    //         });
    //         return res;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // static async logout() {
    //     try {
    //         const res = await axios.post('/auth/logout');
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    //   public static async getMe() {
    //     try {
    //       const res = await axios.get('/auth/me');
    //       return res;
    //     } catch (err) {
    //       throw err;
    //     }
    //   }

    //   public static async isAuthenticated() {
    //     try {
    //       const res = await axios.post('/auth/authenticated');
    //       return res.data;
    //     } catch (err) {
    //       throw err;
    //     }
    //   }


    // static async forgotPassword(email) {
    //     try {
    //         const res = await axios.post('/auth/forgotpassword', email);
    //         return res.data;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

}