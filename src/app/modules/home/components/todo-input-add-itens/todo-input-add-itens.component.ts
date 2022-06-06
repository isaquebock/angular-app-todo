import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter()

  public addItemTaskList: string = ''

  public submitItemTaskList() {
    console.log(this.addItemTaskList)

    this.addItemTaskList = this.addItemTaskList.trim()

    if(this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
