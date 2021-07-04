import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa-buttons',
  templateUrl: './tarefa-buttons.component.html',
  styleUrls: ['./tarefa-buttons.component.css']
})
export class TarefaButtonsComponent implements OnInit {

  @Input() buscarTodos: boolean = false;
  @Output() resetarPesquisa = new EventEmitter();
  @Output() abrirModal = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  resetSearch(){
    this.resetarPesquisa.emit();
  }

  tarefaNova(){
    this.abrirModal.emit();
  }

}
