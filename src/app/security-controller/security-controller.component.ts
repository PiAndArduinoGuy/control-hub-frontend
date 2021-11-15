import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-controller',
  templateUrl: './security-controller.component.html',
  styleUrls: ['./security-controller.component.scss']
})
export class SecurityControllerComponent implements OnInit {
  securityBreached = false

  constructor() { }

  ngOnInit(): void {
  }

  armSecurity() {
    console.log("Arm security call here.")
  }

}
