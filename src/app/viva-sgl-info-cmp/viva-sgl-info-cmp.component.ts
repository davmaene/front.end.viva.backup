import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viva-sgl-info-cmp',
  templateUrl: './viva-sgl-info-cmp.component.html',
  styleUrls: ['./viva-sgl-info-cmp.component.scss']
})
export class VivaSglInfoCmpComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.target);
  }

}
