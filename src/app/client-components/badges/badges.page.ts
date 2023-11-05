import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {
  isModalOpen = false;

  constructor() { }

  ngOnInit() {
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
