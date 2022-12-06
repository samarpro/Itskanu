import { Component, OnInit } from '@angular/core';
import { DbArr } from '../adding-pg/adding-pg.page';


@Component({
  selector: 'app-searching-pg',
  templateUrl: './searching-pg.page.html',
  styleUrls: ['./searching-pg.page.scss'],
})
export class SearchingPgPage implements OnInit {
  constructor() { }
  arrOfText: string[] = ["Regist-No", "Car Maker", "Car Model", "Year", "Odometer", "Transmission", "Body Type", "Rental Price", "Rental Status"]

  SearchingFunc() {
    let SearchBar: HTMLInputElement = (document.getElementById("searchBar")! as HTMLInputElement)
    let table:HTMLTableElement = document.getElementById("table") as HTMLTableElement
    table.innerHTML=' '
    for (let j: number = 0; j < DbArr.length; j++) {
      if (DbArr[j][0] == SearchBar?.value) {
        for (let i: number = 0; i < 9; i++) {
          let tr = document.createElement("tr");
          if (i % 2 == 0) {
            tr.style.backgroundColor = "#059679"
            tr.style.color = "black";
            tr.style.margin="20px 0px"
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
        table.appendChild(document.createElement("br"))
        table.style.backgroundColor="green"
        table.style.width="100%"
        return;
      }
    }
    
  }
  ngOnInit() {
  }
}

