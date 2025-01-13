import { Entity, PrimaryKey, Property, t } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

@Entity()
export class Review extends BaseEntity {


  @Property({type: 'string'})
  photo;

  @Property({type: 'string'})
  comment;

  @Property({type: 'number'})
  stars;

  

  constructor(data) {
    this.photo = data.photo;
    this.comment = data.comment;
    this.stars = data.stars;
    
  }

}