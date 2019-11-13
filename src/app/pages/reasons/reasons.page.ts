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

  messageSubject: string = "Subject";
  messageBody: string = "Message";

  constructor(private appLauncher: AppLauncher, private platform: Platform, private emailComposer: EmailComposer) {
    this.reasonsPageTitle = "Whats your reason?";
   }

  ngOnInit() {
  }

  generateEmail(){

     let email = {
       to: '',
       cc: '',
       bcc: [],
       attachments: [
         
       ],
       subject: 'Sick Leave',
       body: "<!DOCTYPE html> <html> <head> </head> <body> <p>Hello Sir/Madam,</p> <p>I&rsquo;m emailing to inform you that I can&rsquo;t make it to work today, as I&rsquo;ve come down with cold. I'll be available to answer emails if you need urgent help.</p> <p>Thank you.</p> </body> </html>",
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
