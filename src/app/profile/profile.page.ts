import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isChecked: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toggleCheckbox(event: any): void {
    this.isChecked = event.detail.checked;

    if (this.isChecked) {
      this.router.navigate(['/buyer']); 
    }
  }

}
