import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertComponent } from 'src/app/components/alert/alert.component';

const nav = document.querySelector('ion-nav');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  homePageTitle: string;
  statusBarColor: string;
  subscription: any;

  constructor(public navCtrl: NavController, private statusBar: StatusBar, private platform: Platform, private alrtCtrl: AlertComponent) {
    this.homePageTitle = "";
    this.statusBarColor = "#ffffff"; //white #ffffff
    this.statusBar.backgroundColorByHexString(this.statusBarColor);
  }

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
  }

  ionViewWillLeave(){
      this.subscription.unsubscribe();
  }

  ionViewDidload(){
    
  }

  showAlert(){
    this.alrtCtrl.presentAlert("Please select the other option");
  }

}
