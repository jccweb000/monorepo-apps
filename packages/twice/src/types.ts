import { LoadableComponent } from '@loadable/component';

export interface RouteItem {
  key: string;
  path: string;
  component: LoadableComponent<any>;
  name?: string;
  children?: RouteItem[];
  inMenu?: boolean;
  icon?: any;
}
