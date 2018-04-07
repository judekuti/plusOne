import { Component } from '@angular/core';
import { ModelsService } from './models.service';
import { Model } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  models: Model[]=[];
  constructor(private modelsService: ModelsService){

  }
  ngOnInit(){
      this.models = this.modelsService.getAll();
  }
}
