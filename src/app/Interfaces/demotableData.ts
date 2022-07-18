export interface studentInterface {
  avatar: string;
  first_name: string;
  last_name: string;
  id: number;
  email: string;
}

export interface studentInterfaceResposnse {
  message: string;
  totalRecord: number;
  Records: studentInterface[];
}
