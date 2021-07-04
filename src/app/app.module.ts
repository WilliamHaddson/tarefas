import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefaService } from './tarefa/tarefa.service';
import { HttpClientModule } from '@angular/common/http';
import { TarefaComponent } from './tarefa/tarefa.component';
import { FormsModule } from '@angular/forms';
import { TarefaCardComponent } from './tarefa/tarefa-card/tarefa-card.component';
import { TarefaModalComponent } from './tarefa/tarefa-modal/tarefa-modal.component';
import { TarefaButtonsComponent } from './tarefa/tarefa-buttons/tarefa-buttons.component';
import { TarefaAlertsComponent } from './tarefa/tarefa-alerts/tarefa-alerts.component';
import { TarefaMenuComponent } from './tarefa/tarefa-menu/tarefa-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefaComponent,
    TarefaCardComponent,
    TarefaModalComponent,
    TarefaButtonsComponent,
    TarefaAlertsComponent,
    TarefaMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
