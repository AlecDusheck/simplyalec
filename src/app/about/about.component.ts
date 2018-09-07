import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(
      "%cI really am interested in any intern opportunity. In fact, it would mean the WORLD to me.\n" +
      "\n" +
      "Please reach out to alec <at> simplyalec.com\n" +
      "You will receive a response shortly. Mention this!", 'background: #222; color: #bada55');


    particlesJS.load('particles-js', 'assets/pjs-config.json', null);
  }

}
