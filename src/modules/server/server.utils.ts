import { string } from "@hapi/joi";

export enum billingTypeEnum  {
    "fixed",
    "on-demand"
}

export enum typeEnum {
    "baremetal",
    "kvm",
    "openvz",
    "azure",
    "aws"
}