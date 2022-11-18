export interface INavigation {
  path: string;
  title: string;
  nested: INavigation[];
  component: () => JSX.Element;
  isProtected?: boolean;
}
