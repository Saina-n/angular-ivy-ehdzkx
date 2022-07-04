import { Injectable } from '@angular/core';
import {Apollo, gql, Query} from 'apollo-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImmediationUsersGqlService extends Query {
  client = 'worker'
  document = gql `
    query immediationUsers($clientId: Int!){
      immediationUsers(clientId: $clientId){
        firstName
        LastName
      }
    }  
  `;
  constructor(apollo: Apollo){
    super(apollo)
  }

  $getimmediationUsers(clientId): Observable<any> {
    return this.watch({
      clientId: clientId
    }).valueChanges.pipe(
      map(result => result)
    )
  }
}


