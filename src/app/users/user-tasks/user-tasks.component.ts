import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
 
})
export class UserTasksComponent implements OnInit {

  username: string =''

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next: (params) =>{
        this.username = params.get('name')|| '';
      }
    })
  }
}
