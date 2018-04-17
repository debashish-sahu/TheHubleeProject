import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'doosh-result',
  template: `
   <div  id="resultpage" >
        <h4>The award for biggest Douchebag goes to ...</h4>

        <div style="text-align: center"><img src="assets/ds.gif" ></div>
        <div class="form-group" style="text-align: center;">
          <button type="button" class="btn btn-default btn-lg" id="doucheagain" [routerLink]="['/collect']">One More Douche</button>
        </div>
      </div>
  `
})
export class DooshResultComponent {
  model: any = {};

  constructor(private route: ActivatedRoute, private router: Router) { }
  
}
