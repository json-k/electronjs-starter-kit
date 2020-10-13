import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StartUpComponent } from './components/start-up/start-up.component';
import { MainComponent } from './components/main/main.component';
import { ElectronAppService } from './services/electron-app.service';

@NgModule({
  declarations: [
    AppComponent,
    StartUpComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [ElectronAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
