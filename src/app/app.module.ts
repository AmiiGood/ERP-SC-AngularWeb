import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarModule } from 'primeng/sidebar';
import { EmpleadosComponent } from './features/empleados/empleados.component';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ClientesComponent } from './features/clientes/clientes.component';
import { ProductosComponent } from './features/productos/productos.component';
import { VentasComponent } from './features/ventas/ventas.component';
import { ComprasComponent } from './features/compras/compras.component';
import { InventarioComponent } from './features/inventario/inventario.component';
import { SucursalComponent } from './features/sucursal/sucursal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    EmpleadosComponent,
    ClientesComponent,
    ProductosComponent,
    VentasComponent,
    ComprasComponent,
    InventarioComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    MenuModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    ToastModule,
    TableModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
