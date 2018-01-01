import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, limit?: number): string {
        if (!value) {
            return null;
        }
        limit = ! limit ? 20 : limit;
        return value.substr(0, limit) + '...';
    }

}
