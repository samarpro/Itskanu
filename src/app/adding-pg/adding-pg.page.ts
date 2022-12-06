import { Component, OnInit, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { State } from 'ionicons/dist/types/stencil-public-runtime';


export let DbArr: (number | string | boolean)[][] = []

@Component({
  selector: 'app-adding-pg',
  templateUrl: './adding-pg.page.html',
  styleUrls: ['./adding-pg.page.scss'],
})
export class AddingPgPage implements OnInit {
  constructor(private alertController:AlertController){}

  async error(statement:string){
    const alert = await this.alertController.create({
      header:'Alert',
      subHeader:'Important Message',
      message: statement,
      buttons:["OK"]
    })
    await alert.present()
  }
  AddValue() {
    let RegNum: HTMLInputElement = (document.getElementById("RegNum") as HTMLInputElement)
    let carMaker: HTMLInputElement = document.getElementById("carMaker") as HTMLInputElement
    let CarModel: HTMLInputElement = document.getElementById("CarModel") as HTMLInputElement
    let year: HTMLInputElement = document.getElementById("year") as HTMLInputElement
    let Odometer: HTMLInputElement = document.getElementById("Odometer") as HTMLInputElement
    let transmission: HTMLInputElement = document.getElementById("transmission") as HTMLInputElement
    let body: HTMLInputElement = document.getElementById("body") as HTMLInputElement
    let RentPrice: HTMLInputElement = document.getElementById("RentPrice") as HTMLInputElement
    let avaiable: HTMLInputElement = document.getElementById("avaiable") as HTMLInputElement

    let arrOfinputs: HTMLInputElement[] =
      [RegNum, carMaker, CarModel, year, Odometer, transmission, body, RentPrice, avaiable]

    let subArr: (string | number | boolean)[] = []
    let lenght_of_DbArr = DbArr.length
    // login to fed a value in main arr

    //checks wheather the Registration number is empty or not
    if(RegNum?.value==""){
      // message to be given
      this.error("Registration Number must be entered.")
      return
    }

    // If lenght of the main array is 0 then no need to check 
    // any condition , simply add subarr
    if (lenght_of_DbArr == 0) {
      arrOfinputs.forEach((e, i) => {
        subArr.push(e?.value)
      });
    }
    // if not 0 then check for repetition
    else {
      for(let i:number =0;i<lenght_of_DbArr;i++){
        if (DbArr[i][0] == RegNum?.value) {
          this.error("Value already Exists.")
          return  
        }
      }
      // if condition gets satisfied then this gets executed
      arrOfinputs.forEach(e => {
        subArr.push(e?.value)
      })
      this.error("Success!")
    }

    DbArr.push(subArr)
    console.log(DbArr)
  }

  ngOnInit() {
  }

}