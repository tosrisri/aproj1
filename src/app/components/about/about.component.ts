import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

about = {}
bpoints:string[] = [
  'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit.',
  'Limor auetor imundet in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
]

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.about = this.getAbout();
  }

  getAbout(){
    return this.config.getConfig().about;
  }

}
