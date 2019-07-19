import { PetService } from './../../../services/pet/pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/services/pet/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'color'];
  data: Pet[] = [];
  isLoadingResults = true;

  constructor( private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
