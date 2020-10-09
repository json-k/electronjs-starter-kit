import { ipcMain } from 'electron';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { electron } from 'process';
const ipcRenderer = (<any>window).require('electron').ipcRenderer;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  osinfo: any = ipcRenderer.sendSync("getOsInfo");

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  gotoBack():void {
    this.router.navigate([""]);
  }

}
