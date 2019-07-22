import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PetService } from 'src/app/services/pet/pet.service';
import { ErrorStateMatcher } from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {

  petForm: FormGroup;
  // tslint:disable-next-line: variable-name
  _id = '';
  name = '';
  color = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService, private formBuilder: FormBuilder) { }

  getPet(id: any) {
    this.petService.getPet(id).subscribe((data: any) => {
      this._id = data._id;
      this.petForm.setValue({
        prod_name: data.prod_name,
        prod_desc: data.prod_desc,
        prod_price: data.prod_price
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.petService.updatePet(this._id, this.petForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/pet-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  petDetails() {
    this.router.navigate(['/pet-details', this._id]);
  }

  ngOnInit() {
    this.getPet(this.route.snapshot.params.id);
    this.petForm = this.formBuilder.group({
      name : [null, Validators.required],
      color : [null, Validators.required],
    });
  }

}
