import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  constructor(meta: Meta, title: Title, @Inject(PLATFORM_ID) private platformId: Object) {
    title.setTitle('Kinesiology Session Rates- The time and cost of each type of session');
    meta.addTags([
      { name: 'author', content: 'kinesiologyPractice.co.za' },
      { name: 'keywords', content: 'Kinesiology Practice, Kinesiology rates, Kinesiology Prices' },
      { name: 'description', content: 'The rates of each session are available here, ' }
    ])
  }

  ngOnInit() {
  }

  priceSearch() {
    if (isPlatformBrowser(this.platformId)) {
      let input, filter, table, tbody;
      input = document.getElementById("priceInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("priceTable");
      tbody = table.getElementsByTagName("tbody");
      for (let i = 0; i < tbody.length; i++) {
        let td = tbody[i].getElementsByTagName("td")[0];
        //let id = document.getElementById("therapy");
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tbody[i].style.display = "";
          } else {
            tbody[i].style.display = "none";
          }
        }
      }
    }
  }
}