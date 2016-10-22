import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    templateUrl: 'app/components/profile.component.html'
})
export class ProfileComponent {
  user: any = new Array();
  repos: any = new Array();
  username: any;

  constructor(private _githubService: GithubService){
    this.user = false;
  }

  searchUser(){
    // Update Username
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }
 }
