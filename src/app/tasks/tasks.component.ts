import { Component, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { Task } from './task/task.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent implements OnInit {
  userTasks: Task[] = [];



  username: string = '';



  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params)=>{
      this.username = params.get('name') || '';
    })
  }
}
