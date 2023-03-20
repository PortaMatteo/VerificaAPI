import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import { GuerreStellariService } from '../guerre-stellari.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  id: any;
  item: any;
  GuerreStellariObs!: Observable<Object>;
  constructor(
    private route: ActivatedRoute,
    private service: GuerreStellariService,
    private location: Location
    ){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id')?.toString();
        if (this.id != null) {
          this.GuerreStellariObs = this.service.getItem(this.id);
          this.GuerreStellariObs.subscribe((data) => {this.item = data; console.log(this.item)})
        }
      });
    }
    back() : void
    {
      this.location.back();
    }
}
