import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Account } from "../account";
import { Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { LoginService } from "../login.service";
@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  name: string = "Login";
  accounts: any = [];
  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.loginService
      .getAccounts()
      .subscribe(accounts1 => (this.accounts = accounts1));
  }
  onClick(): void {
    if (
      typeof this.accounts !== "undefined" &&
      this.accounts.filter(
        account =>
          this.username === account.username &&
          this.password === account.password
      ).length > 0
    ) {
      alert(`Success! Welcome ${this.username}`);
    } else alert("Failed");
  }
}
