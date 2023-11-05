import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreminder',
  templateUrl: './addreminder.page.html',
  styleUrls: ['./addreminder.page.scss'],
})
export class AddreminderPage implements OnInit {
  presentingElement: any;
  meds_name: any;
  meds_dosage: any; //mg unit
  meds_type: any; //tablet, bottle, naka-syringe
  meds_interval: any; //temp yung any
  medicine_desc: any; //if may preset record tayo sa cloud
  med_start_time: any;
  isModalOpen = false;


  constructor(
    private router: Router,
    
  ) { }

  ngOnInit() {
  }


  ionViewWillEnter(){
    this.get_medicines();
  }

  get_medicines(){

  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  view_add_medicine_form(){
    this.router.navigateByUrl("client/addreminder/add-medicine")
  }

  update_medicine(){

  }

  delete_medicine(){

  }


}
