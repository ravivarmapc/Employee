import { Component, OnInit, Input } from '@angular/core';
import { Iemp } from '../empDetails';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
showEmp:boolean;
showEmpDetails:boolean;
noList:boolean;
empDetails:Iemp[]= [
  {"id":101,"name":"Ravi","companyName":"Tavant Technologies","role":"Senior UI Developer"},
  {"id":102,"name":"Vimal","companyName":"Tavant Technologies","role":"Senior UI Developer"},
  {"id":103,"name":"Shibi","companyName":"Tavant Technologies","role":"Senior UI Developer"},
  {"id":104,"name":"Vel","companyName":"Tavant Technologies","role":"Senior UI Developer"},
  {"id":105,"name":"Ganesh Pandi","companyName":"Tavant Technologies","role":"Senior UI Developer"}

]
selectedEmp = {"name":"","companyName":"","role":""};
empVal;
  constructor() { }

  ngOnInit() {
  }
  showDetails(){
    this.showEmpDetails = true;
    this.showEmp = false;
  }
  saveUpdatedDetails(selectedEmp){
    this.empDetails.map((v,i) => {
      if (this.empDetails[i]["id"]== this.empVal) {
        this.empDetails[i]["name"] = selectedEmp["name"];
        this.empDetails[i]["companyName"] = selectedEmp["companyName"];
        this.empDetails[i]["role"]= selectedEmp["role"];
      }
    })
    this.showEmp = true;
    this.showEmpDetails =false;
  }
  showemployee(e) {
     this.empVal=e.currentTarget.value;
    if(this.empVal=="" || this.empVal>105 || this.empVal<101){
      this.showEmp = false;
      this.noList = true;
    }
    else {
      this.showEmp = true;
      this.noList = false;

      this.empDetails.map((v,i) => {
        if (this.empDetails[i]["id"]==this.empVal) {
          this.selectedEmp["name"] = this.empDetails[i]["name"];
          this.selectedEmp["companyName"] = this.empDetails[i]["companyName"];
          this.selectedEmp["role"]= this.empDetails[i]["role"];
        }
      })

      // for (var i=0 ; i< this.empDetails.length ; i++) {
      //   if (this.empDetails[i]["id"]==empVal) {
      //     this.selectedEmp["name"] = this.empDetails[i]["name"];
      //     this.selectedEmp["companyName"] = this.empDetails[i]["companyName"];
      //     this.selectedEmp["role"]= this.empDetails[i]["role"];
      //   }
      // }
      
    }
  
  }

  

}
