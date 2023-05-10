import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-edu-exp-add',
  templateUrl: './edu-exp-add.component.html',
  styleUrls: ['./edu-exp-add.component.css']
})
export class EduExpAddComponent {

  @Input() esEduc : string ="";

  @Input() nombre:string =""
  @Input() institucion:string =""
  @Input() fechaDesde:string =""
  @Input() fechaHasta:string =""
  @Input() descripcion:string =""

}
