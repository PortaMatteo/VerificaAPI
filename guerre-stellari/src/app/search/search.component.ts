import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { GuerreStellariService } from '../guerre-stellari.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  obsGuerreStellari!: Observable<Object>;
  items!: any;

  constructor(public GuerreStellariService: GuerreStellariService){}

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsGuerreStellari = this.GuerreStellariService.searchItems(this.query);
    this.obsGuerreStellari.subscribe((data) => { this.items = data; console.log(this.items) });
  }

}
