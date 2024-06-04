import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { SharedComponentModuleModule } from 'src/app/components/shared-component-module.module';

@NgModule({
  imports: [CommonModule, IonicModule, HomePageRoutingModule, SharedComponentModuleModule],
  declarations: [HomePage],
})
export class HomePageModule {}
