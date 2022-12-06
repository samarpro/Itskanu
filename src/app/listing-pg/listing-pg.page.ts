import { Component, OnInit } from '@angular/core';
import { DbArr } from '../adding-pg/adding-pg.page';
@Component({
  selector: 'app-listing-pg',
  templateUrl: './listing-pg.page.html',
  styleUrls: ['./listing-pg.page.scss'],
})
export class ListingPgPage implements OnInit {

  constructor() { }
  arrOfText: string[] = ["Regist-No", "Car Maker", "Car Model", "Year", "Odometer", "Transmission", "Body Type", "Rental Price", "Rental Status"]
  n = 1;
  createTable() {
    this.n = 1
    let parent: HTMLElement = document.getElementById("parent")!
    // creating ion-accordion
    parent.innerHTML=' '
    // formation of table
    if (DbArr.length == 0) {
      return
    }
    for (let j = 0; j < DbArr.length; j++) {
      let ion_accor = document.createElement("ion-accordion")
      ion_accor.setAttribute("value", "first")
      parent.appendChild(ion_accor);
      // creating ion-items
      let ion_items = document.createElement("ion-item");
      ion_items.setAttribute("slot", "header")
      ion_items.setAttribute("color", "light")
      ion_accor.appendChild(ion_items)
      // creating label inside of item
      // to be changed dynamically
      let label = document.createElement("ion-label");
      label.textContent = "Car " + (this.n++)
      ion_items.appendChild(label)

      // creating a table for showing up database
      // div which contents tabel
      let main_div = document.createElement("div")
      main_div.setAttribute("class", "ion-padding")
      main_div.setAttribute("slot", "content")
      ion_accor.appendChild(main_div)
      // creating table tag
      let table = document.createElement("table");
      table.style.width = "100%"
      main_div.appendChild(table)
      // table ccreation completed
      for (let i: number = 0; i < 9; i++) {
        let tr = document.createElement("tr");
        if (i % 2 == 0) {
          tr.style.backgroundColor = "#059679"
          tr.style.color = "black";
        }
        table.appendChild(tr)
        // creating heading table tag
        let th = document.createElement("th");
        th.textContent = this.arrOfText[i];
        tr.appendChild(th);
        // creation of td
        let td = document.createElement("td");
        td.textContent = String(DbArr[j][i])
        tr.appendChild(td)

      }
    }
  }


  // checking wheather if arr is empty of not


  ngOnInit() {
  }

}
