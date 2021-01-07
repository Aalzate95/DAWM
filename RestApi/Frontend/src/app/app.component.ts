import { Component } from '@angular/core';
import { MaestroserviceService } from "./maestroservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ["id", "titulo", "fecha"];
  dataSource;

  constructor(private maestroService: MaestroserviceService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.dataSource = this.maestroService.getMaestros();
  }
}
