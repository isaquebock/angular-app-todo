import { Component, DoCheck, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, DoCheck {
  constructor() { }

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]')

  public deleItemTaskList(event: any) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja apagar tudo?")
    if(confirm == true)
      this.taskList = []
  }

  public setEmitTaskList(event: string) {
    this.taskList.push(
      {
        task: event,
        checked: false
      }
    )
  }

  private setLocalStorage(list: any) {
    localStorage.setItem('list', JSON.stringify(list))
  }

  public validateInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Task vazia, deseja deletar?")

      if(confirm) {
        this.deleItemTaskList(index)
      }
    }
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
    this.setLocalStorage(this.taskList)
  }

}
