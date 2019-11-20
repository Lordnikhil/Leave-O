import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

const nav = document.querySelector('ion-nav');

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "Leave - O";
  ifHomePage:boolean ;

  constructor(public navCtrl: NavController, public routes: Router) {
    console.log(this.title);
    this.ifHomePage = this.routes.isActive("/home",this.ifHomePage);
   }

  ngOnInit() {}

  goBack(){
    this.navCtrl.back();
  }

}
