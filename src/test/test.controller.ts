import { Controller, Get, Param } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    constructor(private service: TestService){}
    
    @Get(':id')
    acao(@Param('id') id): string {
        console.log(id);
        return this.service.metodo();
    }
}
