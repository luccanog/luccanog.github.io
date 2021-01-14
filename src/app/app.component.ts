import { Component, OnInit } from '@angular/core';
import * as Requests from '../api/requests';
import { faLinkedin, faAppStoreIos, faGooglePlay, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  /** Icons */
  linkedin = faLinkedin;
  google = faGooglePlay;
  apple = faAppStoreIos;
  github = faGithub;
  right = faArrowRight;

  /** Data */
  user: any = {};
  repos: any = [];

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
