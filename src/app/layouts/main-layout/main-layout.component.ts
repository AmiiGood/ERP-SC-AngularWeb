import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements OnInit {
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

  pageTitle: string = 'Dashboard';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute | null = this.activatedRoute.firstChild;
          while (route && route.firstChild) {
            route = route.firstChild;
          }
          return route?.snapshot.data['title'];
        })
      )
      .subscribe((title: string | undefined) => {
        if (title) {
          this.pageTitle = title;
        }
      });
  }
}
