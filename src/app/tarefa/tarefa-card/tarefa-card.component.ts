import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/model/tarefa.model';
import { TarefaComponent } from '../tarefa.component';

@Component({
  selector: 'app-tarefa-card',
  templateUrl: './tarefa-card.component.html',
  styleUrls: ['./tarefa-card.component.css']
})
export class TarefaCardComponent implements OnInit {

  @Input() tarefa: Tarefa = new Tarefa();
  @Output() excluirTarefa = new EventEmitter();
  @Output() atualizarTarefa = new EventEmitter();

  constructor(private component: TarefaComponent) { }

  ngOnInit(): void {
  }

  excluir(id: number){
    this.excluirTarefa.emit(id);
  }

  atualizar(tarefa: any){
    this.atualizarTarefa.emit(tarefa);
  }

}
