import {CitoyenClasse} from './citoyen-classe';
import {Citoyen} from '../citoyen';

export class ForAuthService {
  IwantMenu = false;
  userIsAuth = false;
  currentSession: CitoyenClasse = new CitoyenClasse();
  initName: any[];
  constructor() {
  }
  public defaultUsers: any[] = [
    {
      id: 1,
      name: 'david',
      postNom: 'maene',
      prenom: 'dar',
      genre: 'M',
      number: '+243970284772',
      email: 'davidmened@gmail.com',
      password: 'davidmaene.me'
    },
    {
      id: 2,
      name: 'jean',
      postNom: 'zelote',
      prenom: 'dar',
      number: '+243970284772',
      genre: 'M',
      email: 'jean.z@gmail.com',
      password: 'jeanze.me'
    },
    {
      id: 3,
      name: 'styve',
      postNom: 'bikanaba',
      prenom: 'dar',
      number: '+243970284772',
      genre: 'M',
      email: 'vieu.mbayo@gmail.com',
      password: 'styvemb.me'
    }
  ];
  userInitialise(){
    if (localStorage.getItem('currentSession')){
      this.initName = JSON.parse(localStorage.getItem('currentSession'));
      const init = new Citoyen(JSON.parse(localStorage.getItem('currentSession')));
      const n = init.name.toString();
      const p = init.postNom.toString();
      // console.log(p);
      return n.substring(0, 1) + p.substring(0, 1);
    }
  }
  userSignUp(Newcitoyen){
    // this.currentSession = Newcitoyen;
    if (this.defaultUsers.push(Newcitoyen)) {
      localStorage.setItem('currentSession', JSON.stringify(Newcitoyen));
      this.userIsAuth = true;
      return true;
    }
  }
  userSignIn({ident, password}){
    // this.currentSession = citoyen;
    // this.userIsAuth = true;
    const cit = this.defaultUsers.find((objUser) => {
      return objUser.email === ident && objUser.password === password;
    });
    return cit;
    // let user;
    // for (user of this.defaultUsers) {
    //   if (user.email === emOrPhone || user.number){
    //     if (user.password === pwd){
    //      // this.currentSession = new CitoyenClasse();
    //      this.currentSession.uNom = user.name;
    //      this.currentSession.uPostnom = user.postNom;
    //      this.currentSession.uEmail = user.email;
    //      this.userIsAuth = true;
    //      console.log(this.userIsAuth);
    //      return true;
    //     }else{
    //       return false;
    //     }
    //   }else {
    //     return false;
    //   }
    // }
  }
//   new Promise(
// (resolve, reject) => {
//   setTimeout(() => {
//   this.userIsAuth = false;
//   resolve(true);
// }, 100);
// }
// );
  userSignOut(){
    localStorage.removeItem('currentSession');
    this.userIsAuth = false;
    // return true;
    // console.log()
  }
  dismiseMenu(){
    this.IwantMenu = false;
  }
}
