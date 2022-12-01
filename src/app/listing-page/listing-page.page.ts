import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.page.html',
  styleUrls: ['./listing-page.page.scss'],
})
export class ListingPagePage implements OnInit {
  
  CarInfoArr:(string|number)[][]=[
    [2569,"Lamborghini","Lamborghini Huracan",2001,"25698 Km","Automatic","Hatch",69000,"Yes"],
    [2899,"Rolls Royce","Phantom Custom",2009,"98562 Km","Automatic","Sedan",12000,"No"],
    [1250,"Toyota","Highlander",2000,"78526 Km","Automatic","SUV",9500,"Yes"],
    [5054,"Ford","Falcon UTE",2005,"12369 Km","Manual","UTE",12500,"No"],
    [2698,"Tata","Nexon Auto",2020,"89741 Km","Automatic","SUV",850,"No"]
  ]
  constructor() { }

  ngOnInit() {
  }

}
