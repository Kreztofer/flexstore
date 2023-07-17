import { Observable } from 'rxjs';
import { Featured } from 'src/app/shared/models/featured';

export interface ILatestService {
  getLatest(): Observable<Featured[]>;
}
