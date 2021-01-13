import { Component, OnInit } from '@angular/core';
import * as Requests from '../api/requests';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user:any= {};
  repos: any= [];
  ngOnInit(): void {

    const loadData = async () => {
      console.log('Getting api data...')
      this.repos = await Requests.getRepos();
      this.user = await Requests.getProfile();
    }

    loadData();
  }

  title = `lorem`;

}
