import { BasicInputProperty } from './BasicProps';

type optionList = {
    value: any,
    label: string,
    icon?: string,
  }
export interface DropDown extends BasicInputProperty {
    options: optionList[];
    defaultOption: string;
    onChange?: (e:any) => any;
    type?: 'primary' | 'secondary' | 'tertiary';
    prefix?: string;
    id?: string;
    name?: string;
    value?: any;
  }
