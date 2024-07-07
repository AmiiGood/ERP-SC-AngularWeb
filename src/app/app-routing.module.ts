import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EmpleadosComponent } from './features/empleados/empleados.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ClientesComponent } from './features/clientes/clientes.component';
import { ProductosComponent } from './features/productos/productos.component';
import { VentasComponent } from './features/ventas/ventas.component';
import { ComprasComponent } from './features/compras/compras.component';
import { InventarioComponent } from './features/inventario/inventario.component';
import { SucursalComponent } from './features/sucursal/sucursal.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data:{title:'Dashboard'} },
      { path: 'empleados', component: EmpleadosComponent, data:{title:'Empleados'} },
      { path: 'clientes', component: ClientesComponent, data:{title:'Clientes'} },
      { path: 'productos', component: ProductosComponent, data:{title:'Productos'} },
      { path: 'ventas', component: VentasComponent, data:{title:'Ventas'} },
      { path: 'compras', component: ComprasComponent, data:{title:'Compras'} },
      { path: 'inventario', component: InventarioComponent, data:{title:'Inventario'} },
      { path: 'sucursal', component: SucursalComponent, data:{title:'Sucursal'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
