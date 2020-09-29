import { Module } from '@nestjs/common';
import { AccountEntity } from './account.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
	imports: [ TypeOrmModule.forFeature([ AccountEntity ]) ],
	providers: [AccountService],
	controllers: [AccountController]
})
export class AccountModule {}
