import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa.model';

@Component({
  selector: 'app-tarefa-modal',
  templateUrl: './tarefa-modal.component.html',
  styleUrls: ['./tarefa-modal.component.css']
})
export class TarefaModalComponent implements OnInit {
  
  tarefa: Tarefa = new Tarefa();
  @Output() closeModal = new EventEmitter();
  @Output() salvarTarefa = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clearModal(){
    this.closeModal.emit();
  }

  salvar(tarefa: any){
    this.salvarTarefa.emit(tarefa);
  }

}
