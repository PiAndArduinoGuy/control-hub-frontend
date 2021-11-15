import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-options',
  templateUrl: './security-options.component.html',
  styleUrls: ['./security-options.component.scss']
})
export class SecurityOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  armSecurity() {
    console.log('Send request to arm security.')
  }

  viewBreachImage() {
    console.log('Send request to get annotated image here. Maybe rather use a new component that only holds an image and when this button is clicked take the user to this new component.')
  }

  silenceAlarm() {
    console.log('Send request to silence alarm here.')
  }

}
