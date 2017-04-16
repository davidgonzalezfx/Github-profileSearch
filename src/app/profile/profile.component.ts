import { Component } from '@angular/core';
import { GithubService } from '../Service/github.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent  {
	user:any
	repo:any[]
	username:string

	constructor(public _github: GithubService) {
		this.user = false
	}

	searchUser(){
		this._github.updateUser(this.username)

		this._github.getUser().subscribe(user => {
			console.log(user);
			this.user = user
		})
		this._github.getRepo().subscribe(repo => {
			console.log(repo);
			this.repo = repo
		})		
	}
	
	

}
