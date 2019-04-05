import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  result: string;
  onClick(username: string, password: string): void {
    if (username.trim() === "nghien" && password.trim() === "123") {
      alert("Success");
    } else {
      alert("Failed");
    }
  }
}
