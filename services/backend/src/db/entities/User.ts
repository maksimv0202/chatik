import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from "bcryptjs";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("identity", { type: "bigint", generatedIdentity: "BY DEFAULT" })
  id!: number;

  @Column("varchar", { unique: true, length: 32 })
  username!: string;

  @Column("varchar", { unique: true, length: 128 })
  password!: string;

  @BeforeInsert()
  async hashPasswordBeforeInsert(): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}