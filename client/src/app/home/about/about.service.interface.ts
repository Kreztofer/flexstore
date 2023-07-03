import { Observable } from 'rxjs';
import { About } from 'src/app/shared/models/about';

export interface IAboutService {
  getAbout(): Observable<About[]>;
}
