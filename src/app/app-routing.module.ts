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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'ventas', component: VentasComponent },
      { path: 'compras', component: ComprasComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: 'sucursal', component: SucursalComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
