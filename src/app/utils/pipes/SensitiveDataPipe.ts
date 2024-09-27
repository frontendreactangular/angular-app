import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sensitive',
    standalone: true
})
export class SensitiveDataPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (!value) return "";
        const size = value.length - 3;
        const newText = value.slice(0, 3);

        return `${newText}${repeat("*", size)}`;
    }
}

function repeat(char: string, times: number) {
    if (!char || times < 1) return "";

    let text = "";
    for (let index = 0; index < times && index < 5; index++) {
        text = text.concat(char)
    }

    return text;
}