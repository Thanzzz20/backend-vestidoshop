import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class BankAccount extends BaseEntity {


  @Property({type: 'string'})
  name;

  @Property({type: 'string'})
  accountNumber;

  

  constructor(data) {
    this.name = data.name;
    this.accountNumber = data.accountNumber;
    
  }

}