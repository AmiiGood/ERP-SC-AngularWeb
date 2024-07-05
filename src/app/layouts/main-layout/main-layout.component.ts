import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: ['/dashboard'] },
    { label: 'Empleados', icon: 'pi pi-users', routerLink: ['/empleados'] },
    // Añade los demás items del menú
  ];

  pageTitle: string = 'Empleados'; // Actualiza esto dinámicamente
}
