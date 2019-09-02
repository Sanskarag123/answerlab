import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor(private back:BackendService) { }
  public requested={'ques':''}
  public code=" ";

  ngOnInit() {
  }
  request()
  {
    this.back.codeback(this.requested)
    .subscribe(
      res=>{console.log(res);
        this.code=res.code;
      }
    )
    
    
  }

}
