import { Component, ViewChild, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BehaviorSubject } from 'rxjs';
import { Empleado } from '../../interfaces/empleado';
import { Column } from '../../interfaces/column';
import * as XLSX from 'xlsx';

type ExcelRow = (string | number)[];

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [MessageService],
})
export class EmpleadosComponent implements OnInit {
  //Variables
  //Variables ViewChild
  @ViewChild('dt') dt!: Table;
  @ViewChild('fileInput') fileInput: any;

  //Variables alamcenamiento Empleados
  public empleados$ = new BehaviorSubject<Empleado[]>([]);

  //Variables para exportar
  public cols!: Column[];
  private exportColumns!: any[];

  //Constructor Inicializacion de variables
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

  //Funciones de mensajes Toast
  showSuccessMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Empleado eliminado exitosamente',
    });
  }

  //Funciones de filtrado
  onGlobalFilter(event: Event) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  //Funciones Importar Empleado
  importarEmpleados() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as ExcelRow[];

      if (data.length < 2) {
        this.showAlert(
          'error',
          'El archivo está vacío o no contiene datos válidos'
        );
        return;
      }

      const headers = data[0] as string[];
      const newEmpleados: Empleado[] = [];
      const invalidRows: number[] = [];

      for (let i = 1; i < data.length; i++) {
        const row = data[i] as ExcelRow;
        if (row.length !== headers.length) {
          invalidRows.push(i + 1);
          continue;
        }

        const empleado: Empleado = {
          id: this.parseId(row[headers.indexOf('ID')]),
          nombre: this.parseString(row[headers.indexOf('Nombre')]),
          puesto: this.parseString(row[headers.indexOf('Puesto')]),
          salario: this.parseNumber(row[headers.indexOf('Salario')]),
          estatus: this.parseString(row[headers.indexOf('Estatus')]) as
            | 'ACTIVO'
            | 'INACTIVO',
          correo: this.parseString(row[headers.indexOf('Correo electrónico')]),
        };

        if (this.isValidEmpleado(empleado)) {
          newEmpleados.push(empleado);
        } else {
          invalidRows.push(i + 1);
        }
      }

      this.showImportResult(newEmpleados.length, invalidRows);

      if (newEmpleados.length > 0) {
        const currentEmpleados = this.empleados$.getValue();
        this.empleados$.next([...currentEmpleados, ...newEmpleados]);
      }
    };
    reader.readAsBinaryString(file);
  }

  private showImportResult(importedCount: number, invalidRows: number[]) {
    let message = '';
    let severity: 'success' | 'warn' | 'error';

    if (importedCount > 0) {
      message = `${importedCount} empleados importados.`;
      severity = invalidRows.length > 0 ? 'warn' : 'success';
    } else {
      message = 'No se importaron empleados.';
      severity = 'error';
    }

    if (invalidRows.length > 0) {
      message += ` ${invalidRows.length} filas omitidas.`;
    }

    this.showAlert(severity, message);
  }

  private showAlert(severity: 'success' | 'warn' | 'error', detail: string) {
    this.messageService.add({
      severity,
      summary: severity.charAt(0).toUpperCase() + severity.slice(1),
      detail,
    });
  }

  private parseId(value: string | number): number {
    return typeof value === 'number' ? value : parseInt(value, 10);
  }

  private parseString(value: string | number): string {
    return String(value);
  }

  private parseNumber(value: string | number): number {
    return typeof value === 'number' ? value : parseFloat(value);
  }

  private isValidEmpleado(empleado: Empleado): boolean {
    return (
      empleado.id > 0 &&
      empleado.nombre.trim() !== '' &&
      empleado.puesto.trim() !== '' &&
      empleado.salario > 0 &&
      (empleado.estatus === 'ACTIVO' || empleado.estatus === 'INACTIVO') &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(empleado.correo)
    );
  }
}
