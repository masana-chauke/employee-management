import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  
/*
    id: any;
    employee: iemployee;
    constructor(private route: ActivatedRoute, private service: ServiceService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.employee = new Employee();
      this.service.getEmployeeById(this.id).subscribe( data => {
        this.employee = data;
      });
    }
  }
  
    */
}
