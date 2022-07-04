import { NgModule } from '@angular/core';
import { ImmediationUsersGqlService } from '../../services/gql/immediation-users-gql.service';
import { ImmediatinonRoutingComponent } from '../immediation-routing-module';

@NgModule({
  declarations: [
    ImmediationUsersGqlService
  ],
  imports: [
    ImmediatinonRoutingComponent
  ],
})
export class ImmediationModule {}
