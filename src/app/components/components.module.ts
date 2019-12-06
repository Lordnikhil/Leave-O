import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent
  ],
  providers:[AlertComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    AlertComponent
  ]
})
export class ComponentsModule {}
