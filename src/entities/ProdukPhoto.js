import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class ProdukPhoto extends BaseEntity {


  @Property({type: 'string'})
  name;

  
  constructor(data) {
    this.name = data.name;
    

  }

}