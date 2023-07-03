import { Observable } from 'rxjs';
import { Featured } from 'src/app/shared/models/featured';

export interface IFeaturedService {
  getFeatured(): Observable<Featured[]>;
}
