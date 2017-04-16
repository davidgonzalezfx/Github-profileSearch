import { Component } from '@angular/core';
import { GithubService } from './Service/github.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [GithubService]
})
export class AppComponent  {}
