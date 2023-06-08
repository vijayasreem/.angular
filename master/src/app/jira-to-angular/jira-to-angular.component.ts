import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jira-to-angular',
  templateUrl: './jira-to-angular.component.html',
  styleUrls: ['./jira-to-angular.component.css']
})
export class JiraToAngularComponent implements OnInit {

  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.errorMessage = '\'NoneType\' object has no attribute \'replace\'';
  }

}