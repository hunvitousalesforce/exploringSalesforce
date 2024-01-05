import { LightningElement, track } from "lwc";
import getAccount from "@salesforce/apex/AccountClass.getAccount";

const columns = [
  { label: "Name", fieldName: "Name", type: "text" },
  {
    label: "Fax",
    fieldName: "Fax",
    type: "number"
  },
  {
    label: "ShippingAddress",
    fieldName: "ShippingAddress",
    type: "Address"
  },
  { label: "Phone", fieldName: "Phone", type: "phone" }
];
// const data = [
//   {
//     Id: "a",
//     Name: "Cloudhub",
//     Fax: 25000,
//     ShippingAddress: "jrogers@cloudhub.com",
//     Phone: "2352235235"
//   },
//   // Account:{Name=Burlington Textiles Corp of America, Phone=(336) 222-7000, Fax=(336) 222-8000, ShippingAddress=null, Id=0015j00001PdH5DAAV}
//   {
//     Id: "a",
//     Name: "Cloudhub",
//     Fax: 25000,
//     ShippingAddress: "jrogers@cloudhub.com",
//     Phone: "2352235235"
//   }
// ];
export default class Accounttable extends LightningElement {
  @track accountInfo = {
    Name: "",
    Fax: "",
    Phone: "",
    ShippingAddress: ""
  };

  accountId = "0015j00001PdH5DAAV";

  data;
  columns = columns;

  connectedCallback() {
    getAccount({ accountId: this.accountId })
      .then((d) => (this.data = { ...d }))
      .catch((e) => console.error(e));
  }
}
