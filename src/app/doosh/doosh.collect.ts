import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'doosh-collect',
  template: `
   <form name="form" (ngSubmit)="f.form.valid && submitdouche()" #f="ngForm" novalidate>
    <div class="form-horizontal" id="formpage">
    <div class="form-group">
        <label class="control-label " for="comp">Company</label>
        <div class=""><input type="name" class="form-control input-lg" id="company" name="company"  [(ngModel)]="model.company" #company="ngModel"
          placeholder="Company Name or Stock Code"></div>
    </div>
    <div class="form-group">
        <label class="control-label" for="desg"> Designation</label>
        <div class=""><input type="name" class="form-control input-lg" id="desgn" name="desgn"  [(ngModel)]="model.desgn" #desgn="ngModel"
        placeholder="Person's Designation or Name">
        </div>
    </div>
    <div class="form-group">
        <label for="doucherating" class="control-label">Douche Star Rating</label>
        
        <!--<input id="doucherating" name="doucherating" class="rating-loading" value="0" data-min="0" data-max="10" data-step="1">-->
    </div>
    <div class="form-group" style="text-align: center;">
        <button type="submit" class="btn btn-default btn-lg" id="submitdouche">See Results</button>
    </div>
    </div>
  </form>
  `
})
export class DooshCollectComponent {
  model: any = {};

  constructor(private route: ActivatedRoute, private router: Router) { }
  submitdouche(){
      console.log('company name - ' + this.model.company);
      console.log('designation - ' + this.model.desgn);
      this.router.navigate(['/result']);
  }
}
