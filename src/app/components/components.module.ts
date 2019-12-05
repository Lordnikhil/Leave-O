import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    AlertComponent
  ],
  exports: [
    HeaderComponent,
    AlertComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
