import { Component, OnInit } from '@angular/core';
import * as Requests from '../api/requests';
import { faLinkedin, faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  linkedin = faLinkedin;
  google = faGooglePlay;
  apple = faAppStoreIos;

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
