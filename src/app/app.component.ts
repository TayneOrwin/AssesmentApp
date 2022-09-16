import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Employees', url: '/employee', icon:'people'},
    {title: 'Employee Structure', url: '/employee-structure', icon:'id-card'}
  ];

  constructor() {}
}
