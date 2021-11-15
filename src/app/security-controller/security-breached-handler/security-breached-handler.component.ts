import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-breached-handler',
  templateUrl: './security-breached-handler.component.html',
  styleUrls: ['./security-breached-handler.component.scss']
})
export class SecurityBreachedHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getBreachImage() {
    console.log('Send request to get annotated image here.')
  }

  silenceAlarm() {
    console.log('Send request to silence alarm here.')
  }

}
