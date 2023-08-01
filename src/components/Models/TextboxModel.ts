import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { menuList } from "../menuListInterFace";
import { BasicInputProperty } from "./BasicProps";
import { DropDown } from "./DropDown";

export interface TextBoxModel extends BasicInputProperty {
  placeholder: string;
  errorMessage?: any;
  maxLength?: number;
}
export interface Example {
  onIconClick?(e: any): any;
  isIconPointer?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  icon?: IconDefinition;
}
export class Sample implements TextBoxModel, Example {
  placeholder = "";
  errorMessage?: any;
  maxLength?: number | undefined;
  value?: string | undefined;
  className?: string | undefined;
  onChange?(e: any) {
    console.log("Sample");
    throw new Error("Method not implemented.");
  }
  onClick?(e: any) {
    console.log("Sample");
    throw new Error("Method not implemented.");
  }
  readOnly?: boolean;
  disabled?: boolean;

  id?: string;
  name?: string;

  icon?: IconDefinition;
  isIconPointer?: boolean;
  onIconClick?(e: any) {
    console.log("Sample");
  }
}
