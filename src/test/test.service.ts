import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    metodo() {
        return 'service test';
    }
}
