import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
@Component({
  selector: "app-accounts",
  templateUrl: "./accounts.component.html",
  styleUrls: ["./accounts.component.css"]
})
export class AccountsComponent implements OnInit {
  accounts: any = [];
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getAccounts();
  }
  getAccounts() {
    return this.loginService
      .getAccounts()
      .subscribe(accounts => (this.accounts = accounts));
  }
}
