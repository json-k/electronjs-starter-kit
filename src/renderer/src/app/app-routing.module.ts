import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartUpComponent } from './components/start-up/start-up.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '**', component: StartUpComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
