import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

    getCursos(): string[] {
        return ['Angular 2', 'Java', 'PhoneGap'];
    }
}