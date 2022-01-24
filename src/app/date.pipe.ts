import { Pipe, PipeTransform } from "@angular/core";
import * as dayjs from "dayjs";

@Pipe({
  name: "date",
})
export class DatePipe implements PipeTransform {
  transform(value: Date, format: string): unknown {
    return dayjs(value).format(format);
  }
}
