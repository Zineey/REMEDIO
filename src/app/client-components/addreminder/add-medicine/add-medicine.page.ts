import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.page.html',
  styleUrls: ['./add-medicine.page.scss'],
})
export class AddMedicinePage implements OnInit {
  meds_name: any;
  meds_dosage: any;
  meds_type: any;
  meds_interval: any;
  meds_start_time: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigateByUrl("client/addreminder")
  }
  add_med_reminder(){
    
  }
}
