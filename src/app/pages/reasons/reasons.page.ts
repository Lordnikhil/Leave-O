import { Component, OnInit } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.page.html',
  styleUrls: ['./reasons.page.scss'],
})
export class ReasonsPage implements OnInit {

  reasonsPageTitle: string = "";

  messageSubject: string = "Sick Leave";
  messageBody: string = "<!DOCTYPE html> <html> <head> </head> <body> <p>Hello Sir/Madam,</p> <p>I&rsquo;m emailing to inform you that I can&rsquo;t make it to work today, as I&rsquo;ve come down with cold. I'll be available to answer emails if you need urgent help.</p> <p>Thank you.</p> </body> </html>";
  IsCalling: boolean;

  constructor(private appLauncher: AppLauncher, private platform: Platform, private emailComposer: EmailComposer) {
    this.reasonsPageTitle = "";
   }

  ngOnInit() {
    this.IsCalling = false;
  }

  async buttonClick(){
    this.IsCalling = true;
    await this.generateEmail().catch((msg) => {
      alert(msg);
    });
    this.IsCalling = false;
  }

  generateEmail(){

     let email = {
       to: '',
       cc: '',
       bcc: [],
       attachments: [
         
       ],
       subject: this.messageSubject,
       body: this.messageBody ,
       isHtml: true
     }
     
     // Send a text message using default options
     return this.emailComposer.open(email);
  }

}
