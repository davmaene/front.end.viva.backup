import { Component, OnInit } from '@angular/core';
import {ForAuthService} from '../services/for-auth.service';

@Component({
  selector: 'app-viva-modal-cmp',
  templateUrl: './viva-modal-cmp.component.html',
  styleUrls: ['./viva-modal-cmp.component.scss']
})
export class VivaModalCmpComponent implements OnInit {
  whantMenu: boolean;
  intName: any;
  isAuth: boolean;
  constructor(private forAuthService: ForAuthService) { }
  ngOnInit(): void {
    this.whantMenu = this.forAuthService.IwantMenu;
    if (localStorage.getItem('currentSession')){
      this.intName = this.forAuthService.userInitialise();
      this.isAuth = true;
    }
  }
  closeMenu() {
    this.whantMenu = false;
  }

  hidd() {
    setTimeout(() => {
    // this.forAuthService.IwantMenu = false;
    }, 400);
  }

  onLogOut() {
    this.isAuth = false;
    this.forAuthService.userSignOut();
  }
}
