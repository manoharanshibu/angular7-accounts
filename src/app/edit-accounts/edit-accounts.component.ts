import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit-accounts',
  templateUrl: './edit-accounts.component.html',
  styleUrls: ['./edit-accounts.component.scss']
})
export class EditAccountsComponent implements OnInit {

  accounts: Array<Object>;
  showDialog: false;
  selectedItem: Object = {name:'', day:'', month:'', year:''};  

  constructor(private data: DataService) {
      this.data.getAccounts().subscribe( (res) => {
        this.accounts = res.data;
      });
   }

  ngOnInit() {

  }

  onEdit(account) {
    const {name, dob} = account;
    const dtArr = dob.split("/");
    this.selectedItem = { name, day:dtArr[0], month:dtArr[1], year:dtArr[2]};
    this.showDialog = !this.showDialog;
  }

}
