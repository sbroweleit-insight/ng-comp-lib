import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from "lodash-es";

@Pipe({
  name: "orderBy",
})
export class OrderByPipe implements PipeTransform {
  transform(
    array: any,
    sortBy: string,
    order?: boolean | "asc" | "desc"
  ): any[] {
    const sortOrder = order ? order : "asc"; // setting default ascending order
    return orderBy(array, [sortBy], [sortOrder]);
  }
}
