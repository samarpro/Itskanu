import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbArr } from '../adding-pg/adding-pg.page';

@Component({
  selector: 'app-manipulate-db-pg',
  templateUrl: './manipulate-db-pg.page.html',
  styleUrls: ['./manipulate-db-pg.page.scss'],
})
export class ManipulateDbPgPage implements OnInit {

  confirm = '';
  constructor(private alertController: AlertController) { }
  // code for alert msg box
  async error(statement: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: statement,
      buttons: ['OK'],
    });

    await alert.present();
  }
  // msg for deletion process
  async presentAlert(num: number) {
    const alert = await this.alertController.create({
      header: 'Deletion Alert',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.confirm = 'true';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.confirm = "false";
          },
        },
      ],
    });


    (await alert).present();

    const {role}  = await alert.onDidDismiss();
    this.confirm = role!;
    if (await this.confirm == "confirm") {
      DbArr.splice(num, 1)
      this.error("Database changed.")
    }
    else {
      this.error("Database not changed.")
    }
  }

  editDB(type: string) {
    let RegNum: HTMLInputElement = (document.getElementById("RegNum-a") as HTMLInputElement)
    let carMaker: HTMLInputElement = document.getElementById("carMaker-a") as HTMLInputElement
    let CarModel: HTMLInputElement = document.getElementById("CarModel-a") as HTMLInputElement
    let year: HTMLInputElement = document.getElementById("year-a") as HTMLInputElement
    let Odometer: HTMLInputElement = document.getElementById("Odometer-a") as HTMLInputElement
    let transmission: HTMLInputElement = document.getElementById("transmission-a") as HTMLInputElement
    let body: HTMLInputElement = document.getElementById("body-a") as HTMLInputElement
    let RentPrice: HTMLInputElement = document.getElementById("RentPrice-a") as HTMLInputElement
    let avaiable: HTMLInputElement = document.getElementById("avaiable-a") as HTMLInputElement

    let arrOfinputs: HTMLInputElement[] =
      [RegNum, carMaker, CarModel, year, Odometer, transmission, body, RentPrice, avaiable]

    if (RegNum?.value == "") {
      // message to be given
      this.error("Registration Number must be provided")
      return
    }

    for (let j: number = 0; j < DbArr.length; j++) {
      if (DbArr[j][0] == RegNum.value) {
        if (type == "edit") {
          for (let i: number = 0; i < 9; i++) {
            DbArr[j][i] = arrOfinputs[i].value
          }
          this.error("Updated.")
        }
        else {
          this.presentAlert(j)
          // if( this.confirm=="true"){
          //   DbArr.splice(j,1)
          // }
          // else{
          //   this.error("Database not changed.")
        }
      }
    }
  }
  ngOnInit() {
  }
}
