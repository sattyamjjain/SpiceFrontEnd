import {
    action,
    computed,
    observable,
    decorate
} from 'mobx';
import {
    AuthAPIService
} from '../../app/APIService/AuthAPIService';

class AuthStore {
    //   @action
    //    async isLoggedin() {
    //     try {
    //       const res = await AuthAPIService.isAuthenticated();
    //       this.isAuthenticated = res === true ? true : false;

    //       if (this.isAuthenticated) {
    //         this.getUser();
    //       }

    //       return this.isAuthenticated;
    //     } catch (err) {
    //       this.logger.error('AuthStore.isLoggedin() ', err);
    //       return false;
    //     }
    //   }

    async signup(values) {
        try {
            console.log('storevalues',values)
            const res = await AuthAPIService.signup(values);
            if (!res || res.error) {
                throw res.error;
            }
        } catch (err) {
            throw err;
        }
    }

    //   @action
    //    async getUser() {
    //     try {
    //       const res = await AuthAPIService.getMe();
    //       this._me = get(res, 'data', {});
    //       return res;
    //     } catch (err) {
    //       return false;
    //     }
    //   }

    //   @action
    //    async login(email, password) {
    //     try {
    //       const res = await AuthAPIService.login(email, password);
    //       if (!res || res.error) {
    //         throw res.error;
    //       }

    //       localStorage.removeItem('sidebar');

    //       this.rootStore.sidebarStore.initialise();

    //       this.isAuthenticated = true;
    //     } catch (err) {
    //       throw err;
    //     }
    //   }

    //   @action
    //    async logout() {
    //     try {
    //       const res = await AuthAPIService.logout();
    //       this.isAuthenticated = false;
    //     } catch (err) {
    //       this.logger.error('AuthStore.logout()', err);
    //     }
    //   }

}

decorate(AuthStore, {
    signup: action
  });

export default new AuthStore();
