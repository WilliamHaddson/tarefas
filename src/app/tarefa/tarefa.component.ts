import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Tarefa } from '../model/tarefa.model';
import { TarefaService } from './tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  
  alertaSucesso: boolean = false;
  alertaErro: boolean = false;
  tipoAlerta: string = "";
  tarefaNova: boolean = false;
  buscarTodos: boolean = false;
  tarefas: Tarefa[] = [];
  tarefa: Tarefa = new Tarefa();

  alterarCaixaTexto: Subject<void> = new Subject<void>();

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar()  {
    this.service.listar()
      .then(tarefas => {
        this.tarefas = tarefas;
      })
  }

  buscar(id: number) {
    if(id !== undefined && id !== null){
      this.service.buscar(id)
        .then(tarefa => {
          this.tarefas = [];
          this.tarefas.push(tarefa);
          this.tarefa = new Tarefa();
          this.buscarTodos = true;
          this.alterarCaixaPesquisa();
        }).catch(error => {
          this.alertarErro();
        });
    }
  }

  salvar(tarefa: any) {
    this.service.salvar(tarefa)
      .then(tarefa => {
        this.tipoAlerta = "inserida";
        this.tarefaNova = false;
        this.tarefa = new Tarefa();
        this.alertarSucesso();

        this.listar();
      })
  }

  atualizar(tarefa: any) {
    this.service.autalizar(tarefa)
      .then(tarefa => {
        this.tipoAlerta = "atualizada";
        this.alertarSucesso();
      })
  }

  excluir(id: number) {
    this.service.excluir(id)
      .then(() => {
        this.tipoAlerta = "excluída";
        this.alertarSucesso();

        this.listar();
      })
  }

  abrirModal(){
    this.tarefaNova = true;
  }

  clearModal(){
    this.tarefaNova = false
    this.tarefa = new Tarefa();
  }

  resetSearch(){
    this.buscarTodos = false;
    this.alterarCaixaPesquisa();
    this.listar();
  }

  alertarSucesso(){
    this.alertaSucesso = true;
    setTimeout(() => {this.alertaSucesso = false}, 3*1000);
  }

  fecharAlertaSucesso(){
    this.alertaSucesso = false;
  }

  alertarErro(){
    this.alertaErro = true;
    setTimeout(() => {this.alertaErro = false}, 3*1000);
  }

  fecharAlertaErro(){
    this.alertaErro = false;
  }

  alterarCaixaPesquisa(){
    this.alterarCaixaTexto.next();
  }

}
