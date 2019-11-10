import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  active: Array<string>;


  constructor(
  ) {
    this.active = ["active", "", ""];
  }

  ngOnInit() {
    
  }

  selectRoute(i: number) {
    console.log(i);
    this.active = ["", "", ""];
    
    this.active[i] = "active";
  }

}
