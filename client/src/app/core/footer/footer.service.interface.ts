import { Observable } from 'rxjs';
import { Footer } from 'src/app/shared/models/footer';

export interface IFooterService {
  getFooter(): Observable<Footer[]>;
}
