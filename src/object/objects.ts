import { defaultCipherList } from "constants";

export default interface Text {
  en?: string;
  fr?: string;
}

export default interface Field {
  input: string;
  property?: string;
  label: Text;
}
