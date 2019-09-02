import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  constructor(private back:BackendService) { }
 public userdata={"ques":'','code':''}
 public code:String
 public user={"name":'','password':''}
 public logins:String
 public p=false
 
  ngOnInit() {
  }
  send()
  {
    this.back.submitentry(this.userdata)
    .subscribe(
      res=>{res.code=this.code;
        console.log(res)
      }
    )
  }
  login()
{
  this.back.login(this.user)
  .subscribe(
    res=>{
      console.log(res)
      this.logins=res.name
      this.p=true
      this.userdata.ques=null
      this.userdata.code=null

    }
  )
  
}
}
