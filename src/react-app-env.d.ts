declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}

declare module "*.bmp" {
  const content: string;
  export default content;
}

declare module "*.tiff" {
  const content: string;
  export default content;
}
