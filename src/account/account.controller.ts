import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud'
import { AccountService } from './account.service'
import { AccountEntity } from './account.entity'
@Crud({
	model: {
		type: AccountEntity
	},
	params: {
		id: {
			field: 'user_id',
			type: 'uuid',
			primary: true
		}
	}
})
@Controller('account')
export class AccountController {
	constructor (public service: AccountService) {}
}
