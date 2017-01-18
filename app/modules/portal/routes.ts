import { Component } from '@angular/core';

@Component({
  selector: 'home-view',
  template: 'home!'
})
export class HomeView {}

export const routes = [
  {path: 'lazy', loadChildren: 'app/lazy.module#LazyModule'},
  {path: '', component: HomeView}
];
