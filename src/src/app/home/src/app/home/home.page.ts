import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  quetzales: number | null = null;
  dolares: number | null = null;
  readonly tasaCambio: number = 8;

  convertir(): void {
    if (this.quetzales == null) {
      this.dolares = null;
      return;
    }

    this.dolares = this.quetzales / this.tasaCambio;
  }

  limpiar(): void {
    this.quetzales = null;
    this.dolares = null;
  }
}
