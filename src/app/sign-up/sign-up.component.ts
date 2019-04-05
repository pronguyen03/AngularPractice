import { Component, OnInit, Input } from "@angular/core";
import { LoginService } from "../login.service";
import { Account } from "../account";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  notify: string;
  isNotifyHidden: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private location: Location
  ) {}

  ngOnInit() {}

  onSignUp(username: string, password: string): void {
    if (!username || !password) {
      this.isNotifyHidden = false;
      return;
    }
    username = username.trim();
    password = password.trim();

    let account = { username: "", password: "" };
    account.username = username;
    account.password = password;
    this.loginService.addAccount(account).subscribe();
    this.location.back();
  }

  onBack(): void {
    this.location.back();
  }
}
