import { Component, OnDestroy, OnInit } from "@angular/core";
import { filter } from "rxjs";
import { ImmediationUsersGqlService } from "../services/gql/immediation-users-gql.service";

@Component({
  selector: 'app-immediation',
  templateUrl: './immediation.htm',
  styleUrls:['./immediation.scss']
})

export class ImmediationComponrnt implements OnInit, OnDestroy {
[x: string]: any;
  variable1: [{
    firstName
    lastName
  }];
  variable2: boolean;
  private subs = new SubSink();

  constructor(immediationUsersGqlService: ImmediationUsersGqlService) {
  
  }

  ngOnInit(): void {
    this.subs.add(this.immediationUsersGqlService.$getimmediationUsers.pipe(
      filter(result => !! result)
    ).subscribe(result => this.variable1 = result))

  }

  onclick(){
    return;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe;

  }
}