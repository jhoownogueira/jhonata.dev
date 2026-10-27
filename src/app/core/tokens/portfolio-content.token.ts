import { InjectionToken } from '@angular/core';
import { PortfolioContent } from '../models/portfolio.models';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

export const PORTFOLIO_CONTENT = new InjectionToken<PortfolioContent>('PORTFOLIO_CONTENT', {
  providedIn: 'root',
  factory: () => PORTFOLIO_DATA,
});
