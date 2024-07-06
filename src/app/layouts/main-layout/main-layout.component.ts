import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large',
      routerLink: ['/dashboard'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Empleados',
      icon: 'pi pi-users',
      routerLink: ['/empleados'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Clientes',
      icon: 'pi pi-user',
      routerLink: ['/clientes'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Productos',
      icon: 'pi pi-tag',
      routerLink: ['/productos'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Ventas',
      icon: 'pi pi-shopping-cart',
      routerLink: ['/ventas'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Compras',
      icon: 'pi pi-cart-plus',
      routerLink: ['/compras'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Inventario',
      icon: 'pi pi-box',
      routerLink: ['/inventario'],
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Sucursal',
      icon: 'pi pi-building',
      routerLink: ['/sucursal'],
      routerLinkActiveOptions: { exact: true },
    },
  ];

  pageTitle: string = 'Empleados';
}
