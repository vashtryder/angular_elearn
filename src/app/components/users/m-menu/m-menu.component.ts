import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-menu',
  templateUrl: './m-menu.component.html',
  styleUrls: ['./m-menu.component.css']
})
export class MMenuComponent implements OnInit {
  public m_menu_title;

  constructor() {
    this.m_menu_title = 'Ele@rn.com';
  }

  ngOnInit() {
  }

}
