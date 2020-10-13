import { Router } from '@angular/router';
import { ElectronAppService } from '../../services/electron-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-up',
  templateUrl: './start-up.component.html',
  styleUrls: ['./start-up.component.scss']
})
export class StartUpComponent implements OnInit {

  constructor(public app: ElectronAppService,public router: Router) { }

  ngOnInit(): void {
  }

  showAbout(): void {
    this.app.showAboutPanel();
  }

  gotoMain():void {
    this.router.navigate(["main"]);
  }

}
