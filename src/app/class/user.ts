import { City } from "./city";
export class User {
    constructor(
        public id: Number,
        public username: string,
        public email: string,
        public city: City
      ) {}
    }
    // id!: Number;
    // username!: string;
    // email!: string;
    // city!: {
    //     id: Number;
    //     cityName:string;};
   // };

