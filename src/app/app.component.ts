import {Component, Injectable, OnInit} from '@angular/core';
import {ForAuthService} from './services/for-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isAuth: boolean;
  public initUser: any[];
  public pannel = false;
  whantMenu = false;

constructor(private forAuthService: ForAuthService, private navG: Router) {
  this.isAuth = this.forAuthService.userIsAuth;
}
  // latitude = -1.6572382142948774;
  // longitude = 29.221804601783905;
  // choseLocation = false;
  title = 'vivaRDC';
  // onChoseLocation(event){
  //   console.log(event);
  //   this.latitude = event.coords.lat;
  //   this.longitude = event.coords.lng;
  //   this.choseLocation = true;
  // }
  ngOnInit(): void {
    this.isAuth = this.forAuthService.userIsAuth;
    this.whantMenu = this.forAuthService.IwantMenu;
    // console.log(this.isAuth);
    if (localStorage.getItem('currentSession')) {
      this.isAuth = true;
      // alert(JSON.parse(localStorage.getItem('currentSession')));
      this.initUser = this.forAuthService.userInitialise();
    }
  }
  onSHowUpModal(){
    console.log('je suis ici');
  }
  onAskingForMenu(){
    if (this.whantMenu){
      this.forAuthService.IwantMenu = false;
      this.whantMenu = this.forAuthService.IwantMenu;
    }else{
      this.forAuthService.IwantMenu = true;
      this.whantMenu = this.forAuthService.IwantMenu;
    }
  }
  onInitialize(){
    return this.initUser[0];
  }
  onLookPannel() {
    if (this.pannel === true){
      this.pannel = false;
    }else if (this.pannel === false){
      this.pannel = true;
    }
  }
  onSignOut() {
    this.forAuthService.userSignOut();
    this.pannel = false;
    this.isAuth = this.forAuthService.userIsAuth;
    this.navG.navigate(['/case-cnx-route']);
    console.log(this.isAuth);
  }

  hidden() {
    setTimeout(() => {
      this.whantMenu = false;
    }, 100);
  }
}
