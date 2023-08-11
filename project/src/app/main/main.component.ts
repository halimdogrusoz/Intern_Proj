import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Note } from '../note.model';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'project';
  weight: number = 0;
  height: number = 0;
  date: Date = new Date();
  bmi: number = 0;
  future: string = "";
  sex: String = "male";
  age: number = 0;
  caloricMaintenance: number = 0;
  caloricDeficit: number = 0;
  caloricSurplus: number = 0;

  notes: any = [];


  constructor(public authService : AuthService, public apiService : ApiService, private router: Router){}

  calculateBMI(){
    return 10000*(this.weight / (this.height * this.height));
  }

  calculateBMR(){
    if (this.sex === "male") {
      return 88.362 + 13.397 * this.weight + 4.799 * this.height - 5.677 * this.age;
    } else if (this.sex === "female") {
      return 447.593 + 9.247 * this.weight + 3.098 * this.height - 4.330 * this.age;
    } else {
      throw new Error("Invalid sex. Please specify 'male' or 'female'.");
    }
  }

  calculateCaloricMaintenance(activity_factor = 1.2) {
    const bmr = this.calculateBMR();
    return bmr * activity_factor;
  }

  calculateCaloricDeficit(deficit_factor = 0.85) {
    const caloric_maintenance = this.calculateCaloricMaintenance();
    return caloric_maintenance * deficit_factor;
  }

  calculateCaloricSurplus(surplus_factor = 1.15) {
    const caloric_maintenance = this.calculateCaloricMaintenance();
    return caloric_maintenance * surplus_factor;
  }

  showAll() {
    this.caloricMaintenance = this.calculateCaloricMaintenance();
    this.caloricDeficit = this.calculateCaloricDeficit();
    this.caloricSurplus = this.calculateCaloricSurplus();
    this.bmi = this.calculateBMI();

    this.date = new Date();

    console.log("BMI:", this.bmi);
    console.log("Caloric Maintenance:", this.caloricMaintenance.toFixed(2), "calories");
    console.log("Caloric Deficit:", this.caloricDeficit.toFixed(2), "calories");
    console.log("Caloric Surplus:", this.caloricSurplus.toFixed(2), "calories");
    
    console.log(this.notes)
  }

  save(): void{
    
  }

  logout(): void{
    this.authService.logout()
  }

  goToAbout(){
    this.router.navigate(['/about']);
  }

  goToCatalogue(){
    this.router.navigate(['/catalogue']);
  }

  goToMain(){
    this.router.navigate(['/main']);
  }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      (data) => {
        this.notes = data; // Handle the data here
        console.log(this.notes); // This will log the data from the API call

        if (this.notes.length > 0) {
          const firstNote = this.notes[0];
          console.log("First Note:", firstNote.notes); // Access the 'notes' property of the first note
        }
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }

  saveNotes(){
    const createdNote = new Note(this.future, this.height, this.weight, this.date, this.bmi)

    this.apiService.createNote(createdNote).subscribe();
  }
   
  

  


}

