import { Component, ViewChild, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BehaviorSubject } from 'rxjs';
import { Empleado } from '../../interfaces/empleado';
import { Column } from '../../interfaces/column';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [MessageService],
})
export class EmpleadosComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  empleados$ = new BehaviorSubject<Empleado[]>([]);

  cols!: Column[];
  exportColumns!: any[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.empleados$.next([
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
    ]);

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'puesto', header: 'Puesto' },
      { field: 'salario', header: 'Salario' },
      { field: 'estatus', header: 'Estatus' },
      { field: 'correo', header: 'Correo electrónico' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  showSuccessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Empleado eliminado exitosamente',
    });
  }

  onGlobalFilter(event: Event) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
