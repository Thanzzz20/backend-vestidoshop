import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class User extends BaseEntity {


  @Property({type: 'string'})
  name;

  @Property({type: 'string'})
  region;

  @Property({type: 'number'})
  rating;

  @Property({type: 'number'})
  phoneNumber;

  @Property({type: 'number'})
  password;

  @Property({type: 'string'})
  email;

  @Property({type: 'string'})
  image;

  constructor(data) {
    this.name = data.name;
    this.region = data.region;
    this.rating = data.rating;
    this.phoneNumber = data.phoneNumber;
    this.password = data.passwor;
    this.email = data.email;
    this.image=data.image

  }

}

