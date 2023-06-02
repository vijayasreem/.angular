import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jira-to-angular',
  template: `
    <div class="error-message">
      {{error}}
    </div>
  `,
  styleUrls: ['./jira-to-angular.component.css']
})
export class JiraToAngularComponent implements OnInit {

  @Input() error: string;

  constructor() { }

  ngOnInit(): void {
  }

}