import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { ChatComponent } from "./chat/chat.component";
import { DatosComponent } from "./datos/datos.component";

import { Routes, RouterModule } from "@angular/router";

const rutas: Routes = [
  { path: "", component: ContainerComponent },
  { path: "datos", component: DatosComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(rutas)],
  declarations: [
    AppComponent,
    ContainerComponent,
    ChatComponent,
    DatosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
