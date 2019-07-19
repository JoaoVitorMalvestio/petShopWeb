import { PetService } from './../../../services/pet/pet.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/services/pet/pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss']
})
export class PetDetailComponent implements OnInit {
  pet: Pet = { id: '', name: '', color: '', updatedAt: null };

  isLoadingResults = true;

  constructor( private route: ActivatedRoute, private petService: PetService, private router: Router ) { }

  getPetDetails(id: any) {
    this.petService.getPet(id)
      .subscribe((data: any) => {
        this.pet = data;
        console.log(this.pet);
        this.isLoadingResults = false;
      });
  }

  deletePet(id: any) {
    this.isLoadingResults = true;
    this.petService.deletePet(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/pets']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  ngOnInit() {
    this.getPetDetails(this.route.snapshot.params.id);
  }

}
