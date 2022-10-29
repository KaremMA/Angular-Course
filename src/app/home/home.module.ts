import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbLayoutModule, NbMenuModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule
  ]
})
export class HomeModule { }
