import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [ ];
  }

  ngOnInit() : void {

    this.listarEntradas();

  }

  private listarEntradas(): void {

    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  public mostrarTitulo(titulo: String): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }

}
