import { TodoItem } from './todo-item';

export class TodoList {
  constructor(public user: string, public todoItems: TodoItem[] = []) {

  }

  get items(): readonly TodoItem[] {
    return this.todoItems;
  }

  addItem(title: string): void {
    this.todoItems.push(new TodoItem(title));
  }
}
