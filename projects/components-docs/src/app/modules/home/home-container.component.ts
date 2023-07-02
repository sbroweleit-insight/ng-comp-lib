import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TransferListModule } from "projects/components-lib/src/public_api";

@Component({
  selector: "app-home-container",
  templateUrl: "./home-container.component.html",
  styleUrls: ["./home-container.component.scss"],
})
export class HomeContainerComponent {
  leftItems = [
    { title: "Hennessey Venom" },
    { title: "Bugatti Chiron" },
    { title: "Bugatti Veyron Super Sport" },
    { title: "SSC Ultimate Aero" },
    { title: "Koenigsegg CCR" },
    { title: "McLaren F1" },
    { title: "Jaguar XJ220" },
    { title: "McLaren P1" },
    { title: "Ferrari LaFerrari" },
    { title: "Accord" },
    { title: "Pinto" },
    { title: "X5" },
    { title: "Z1" },
    { title: "Audi" },
    { title: "Aston Martin One- 77" },
  ];

  selected = [];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: { leftItems: this.leftItems },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);
      this.selected = result;
    });
  }

  handleTransfer(_items: any) {
    this.selected = _items;
  }
}

@Component({
  selector: "dialog-data-example-dialog",
  templateUrl: "dialog-data-example-dialog.html",
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    TransferListModule,
  ],
})
export class DialogDataExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  handleTransfer(_items: any) {
    this.data = _items;
  }
}
