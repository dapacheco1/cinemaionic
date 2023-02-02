import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cartelera', url: '/folder/Cartelera', icon: 'videocam' },
    { title: 'Salas', url: '/folder/Salas', icon: 'pin' },
    { title: 'Tickets', url: '/folder/Tickets', icon: 'cart' },
    { title: 'Mi Cuenta', url: '/folder/Cuenta', icon: 'person' },
       
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
