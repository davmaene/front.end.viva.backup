import { Component, OnInit } from '@angular/core';
import {CitoyenClasse} from '../services/citoyen-classe';
import {ForAuthService} from '../services/for-auth.service';

@Component({
  selector: 'app-viva-forum-cmp',
  templateUrl: './viva-forum-cmp.component.html',
  styleUrls: ['./viva-forum-cmp.component.scss']
})
export class VivaForumCmpComponent implements OnInit {
    public me;
  initname: any;
  constructor(private citoyenClasse: CitoyenClasse, private forAuthService: ForAuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentSession')){
      this.me = this.citoyenClasse.getMyCurrentSession();
      this.initname = this.forAuthService.userInitialise();
    }
  }

}
