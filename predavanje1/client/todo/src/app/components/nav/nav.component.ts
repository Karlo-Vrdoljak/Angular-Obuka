import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navigationItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navigationItems = [
      {
        label: 'home',
      },
      {
        label: 'todo list',
      },
      {
        label: 'settings',
      },
    ];
  }
}
