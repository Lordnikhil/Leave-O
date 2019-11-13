import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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

  constructor(public navCtrl: NavController, private statusBar: StatusBar, private platform: Platform) {
    this.homePageTitle = "Leave - O";
    this.statusBarColor = "#C0C0C0"; //white #ffffff
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

  goToReasonsPage(reason){
    console.log(reason);
    if(reason == "sl"){
      //nav.push(ReasonsPage,{reason : 'sick'});
    }

    else if(reason == "cl"){

    }

    else{

    }
  }

}
