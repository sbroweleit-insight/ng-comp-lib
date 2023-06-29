import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "transferFilter" })
export class TransferFilterPipe implements PipeTransform {
  public transform(transferItem: any[], searchText: any): any {
    if (searchText == null || transferItem == null) {
      return transferItem;
    }
    return transferItem.filter(
      (transferItem) =>
        transferItem.title.toLowerCase().indexOf(searchText.toLowerCase()) !==
        -1
    );
  }
}
