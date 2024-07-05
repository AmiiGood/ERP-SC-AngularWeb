import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [MessageService],
})
export class EmpleadosComponent {
  @ViewChild('dt2') dt2!: Table;

  empleados = [
    {
      id: 1,
      nombre: 'Alexis Ramos',
      puesto: 'Gerente',
      salario: 50000.0,
      estatus: 'ACTIVO',
      correo: 'alexisalvarez123456@outlook.com',
    },
    {
      id: 2,
      nombre: 'Maria Garcia',
      puesto: 'Analista',
      salario: 35000.0,
      estatus: 'ACTIVO',
      correo: 'maria.garcia@example.com',
    },
    {
      id: 3,
      nombre: 'Juan Perez',
      puesto: 'Desarrollador',
      salario: 40000.0,
      estatus: 'INACTIVO',
      correo: 'juan.perez@example.com',
    },
  ];

  constructor(private messageService: MessageService) {}

  showSuccessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Empleado eliminado exitosamente',
    });
  }

  // Add this new method
  onGlobalFilter(event: Event) {
    this.dt2.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
