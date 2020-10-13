import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ElectronAppService } from './services/electron-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(title:Title,app: ElectronAppService){
    // This sets the title of the window; NOTE: when running outside the distrubution package this will be the name 
    // and version of Electron, NOT your actual application.
    title.setTitle(app.getDescriptor());
  }
}
