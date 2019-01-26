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

  constructor(private data: DataService) {
      this.data.getAccounts().subscribe( (res) => {
        this.accounts = res.data;
      });
   }

  ngOnInit() {

  }

}
