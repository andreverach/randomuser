export interface User {
  gender: string;
  name: Name;
  email: string;
  registered: DateRegister;
  phone: string;
  picture: Picture;
  nat: string;
}

interface Name{
  title: string;
  first: string;
  last:string;
}

interface DateRegister{
  date: string;
  age: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
} 
