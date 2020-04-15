import {Citoyen} from '../citoyen';

export class CitoyenClasse {
  constructor() {
  }
  public getMyCurrentSession(){
    if (localStorage.getItem('currentSession')){
      const my = new Citoyen(JSON.parse(localStorage.getItem('currentSession')));
      return my;
    }
  }
}
