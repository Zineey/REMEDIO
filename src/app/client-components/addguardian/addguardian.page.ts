import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addguardian',
  templateUrl: './addguardian.page.html',
  styleUrls: ['./addguardian.page.scss'],
})
export class AddguardianPage implements OnInit {

  isModalOpen = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  view_guardian_details(){
    this.router.navigateByUrl("..")
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
