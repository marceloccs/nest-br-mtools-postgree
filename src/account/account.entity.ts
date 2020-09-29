import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('account')
export class AccountEntity {
	@PrimaryGeneratedColumn('uuid') user_id: string

    @Column('varchar', { length: 500})
    username: string

    @Column('varchar', { length: 500 })
    password: string

    @Column('varchar', { length: 500 })
    email: string

    @Column('timestamp')
    created_on: Date
}