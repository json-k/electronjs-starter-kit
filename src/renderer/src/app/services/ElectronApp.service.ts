import { Injectable } from '@angular/core';
const remote = (<any>window).require('electron').remote;

@Injectable({
  providedIn: 'root'
})
export class ElectronAppService {

  constructor() {
    remote.app.setAboutPanelOptions({
      applicationName: remote.app.getName(),
      applicationVersion: remote.app.getVersion(),
      iconPath: remote.app.isPackaged ? 'resources/app/renderer/assets/icon.png' : 'build/renderer/assets/icon.png',
      credits: 'Jason, Critter, Yum Yum (he was no help)'
    }); 
  }

  /**
   * This would generally tell you if the application is running is dev mode.
   */
  public isPackaged(): boolean {
    return remote.app.isPackaged;
  }

  /**
   * Show the applications about panel.
   */
  public showAboutPanel(): void {
    remote.app.showAboutPanel();
  }

  /**
   * The Electron App name.
   */
  public getName(): string {
    return remote.app.getName();
  }

  /**
   * The version string from the package.
   */
  public getVersion(): string {
    return remote.app.getVersion();
  }

  /**
   * A combination of the Name and Version.
   */
  public getDescriptor(): string {
    return `${this.getName()} : ${this.getVersion()}`;
  }
}
