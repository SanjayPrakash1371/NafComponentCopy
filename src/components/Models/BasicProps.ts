export interface BasicInputProperty {
    value?:string;
    className?: string;
    onChange?(e: any): any;
    onClick?(e: any): any;
    readOnly?:boolean;
    disabled?:boolean;
    id?:string;
    name?:string;
  }
