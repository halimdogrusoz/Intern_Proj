import { AfterViewInit, Component , OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Note } from '../note.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit, AfterViewInit{
  
  notes: any = [];
  allNotesContent: { note: string, date: Date, bmi: Number }[] = [];
  allDates: Date[] = [];
  dates: any = [];
  note: string = "";
  displayedColumns: string[] = ['date', 'bmi', 'note'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public authService : AuthService, public apiService : ApiService, private router: Router){}

  showAll() {

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

  goToMain(){
    this.router.navigate(['/main']);
  }

  goToCatalogue(){
    this.router.navigate(['/catalogue']);
  }

  ngOnInit() {
    
    this.getAllNotes();
    
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      (data) => {
        this.notes = data; // Handle the data here
        console.log(this.notes); // This will log the data from the API call

        this.allNotesContent = this.notes.map((note: Note) => {
          const dateObj = new Date(note.date);
          return { date: dateObj, note: note.future, bmi: note.bmi };
        });

        this.allNotesContent.sort((a, b) => b.date.getTime() - a.date.getTime());
        
        this.dataSource = new MatTableDataSource(this.allNotesContent);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        console.log("All Notes Content:", this.allNotesContent);
        this.allNotesContent.forEach((item) => {
          console.log(typeof item);
        });
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }


   
  getAllDates() {
    this.apiService.getAllNotes().subscribe(
      (data) => {
        this.notes = data; // Handle the data here
        console.log(this.notes); // This will log the data from the API call

        this.allNotesContent = this.notes.map((note: any) => note.future);
        console.log("All Notes Content:", this.allNotesContent);
        this.allNotesContent.forEach((item) => {
          console.log(typeof item);
        });
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  


}


