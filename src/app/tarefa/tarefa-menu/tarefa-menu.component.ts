import { Component, OnInit, Output, EventEmitter, Input, OnDestroy  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tarefa-menu',
  templateUrl: './tarefa-menu.component.html',
  styleUrls: ['./tarefa-menu.component.css']
})
export class TarefaMenuComponent implements OnInit {

  private alterarCaixaPesquisa!: Subscription;

  id: any;
  @Output() buscarTarefa = new EventEmitter();
  @Input() evento!: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.alterarCaixaPesquisa = this.evento.subscribe(() => {this.id = null;});
  }

  ngOnDestroy(){
    this.alterarCaixaPesquisa.unsubscribe();
  }

  buscar() {
    this.buscarTarefa.emit(this.id);
  }

}
