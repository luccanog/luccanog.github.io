import { getRepos } from './../api/requests';
import { Component, OnInit } from '@angular/core';
import { Repos, User } from 'src/interfaces';
import * as Requests from '../api/requests';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {

    let user: User;
    let repos: Array<Repos>

    const loadData = async () => {
      console.log('Getting api data...')
      repos = await Requests.getRepos();
      user = await Requests.getProfile();
    }

    loadData();
  }
  title = 'luccanog';

}
