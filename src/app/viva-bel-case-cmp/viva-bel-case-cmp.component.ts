import { Component, OnInit } from '@angular/core';
import {VivaMapCmpComponent} from '../viva-map-cmp/viva-map-cmp.component';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {ForAuthService} from '../services/for-auth.service';

@Component({
  selector: 'app-viva-bel-case-cmp',
  templateUrl: './viva-bel-case-cmp.component.html',
  styleUrls: ['./viva-bel-case-cmp.component.scss']
})
export class VivaBelCaseCmpComponent implements OnInit {
  public showUpMap = false;
  public position;
  constructor(private http: HttpClient, private us: ForAuthService) {
  }
  ngOnInit(): void {
      // this.us.dismiseMenu();
  }
  onBelling(): void {
   this.position = new VivaMapCmpComponent().getCustomerCurrentPosition();
   if (this.position !== undefined){
     this.http.post('http://localhost:3000/annoncerUnCas/', this.position).subscribe(value => (status: any) => {
       console.log(this.position + status);
       this.showUpMap = true;
     });
    }else{
     console.log(this.position);
     alert('Impossible d\'acceder à votre position\nVous ne pouvez pas lancer une alerte \nactiver d\'abord votre GPS puis continuer');
    }
   this.showUpMap = true;
  }
}
