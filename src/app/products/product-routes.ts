import { RouterModule } from '@angular/router';

import { ResultComponent } from './result/result.component';
import { CreateComponent } from './create/create.component';

const PROD_ROUTES = [
    { path: '', component: ResultComponent },
    { path: 'create', component: CreateComponent },
]

export const prodRouting = RouterModule.forChild(PROD_ROUTES);