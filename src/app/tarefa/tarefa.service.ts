import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TarefaService {

  constructor(private http: HttpClient) {}

  listar(): Promise<any> {
    return this.http.get('http://localhost:3000/tarefas').toPromise();
  }

  buscar(id: number): Promise<any> {
    return this.http.get(`http://localhost:3000/tarefas/${id}`).toPromise();
  }

  salvar(tarefa: any): Promise<any> {
    return this.http.post('http://localhost:3000/tarefas', tarefa).toPromise();
  }

  autalizar(tarefa: any): Promise<any> {
    return this.http.put(`http://localhost:3000/tarefas/${tarefa.id}`, tarefa).toPromise();
  }

  excluir(id: number): Promise<any> {
    return this.http.delete(`http://localhost:3000/tarefas/${id}`).toPromise();
  }

}
