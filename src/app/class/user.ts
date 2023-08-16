import { City } from "./city";
export class User {
 



  constructor(
  public id: Number,
  public username: string,
  public email: string,
  public dob:Date|null,
  public isMarried:Boolean,
  public city: City
      
      ) {


      }

      // getMarriedStatus(): string {
      //   return this.isMarried ? 'Yes' : 'No';
      // }
    }
    // id!: Number;
    // username!: string;
    // email!: string;
    // city!: {
    //     id: Number;
    //     cityName:string;};
   // };

