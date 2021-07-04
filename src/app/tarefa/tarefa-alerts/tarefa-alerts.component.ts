import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa-alerts',
  templateUrl: './tarefa-alerts.component.html',
  styleUrls: ['./tarefa-alerts.component.css']
})
export class TarefaAlertsComponent implements OnInit {

  @Input() tipoAlerta: string = "";
  @Input() alertaSucesso: boolean = false;
  @Input() alertaErro: boolean = false;
  @Output() fecharAlertaSucesso = new EventEmitter();
  @Output() fecharAlertaErro = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeSuccessAlert(){
    this.fecharAlertaSucesso.emit();
  }

  closeErrorAlert(){
    this.fecharAlertaErro.emit();
  }

}
