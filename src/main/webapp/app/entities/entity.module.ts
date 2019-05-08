import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhipsterRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhipsterCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhipsterLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhipsterDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhipsterTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhipsterEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhipsterJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhipsterJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
