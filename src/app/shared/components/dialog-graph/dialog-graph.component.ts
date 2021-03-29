import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-graph',
  templateUrl: './dialog-graph.component.html',
  styleUrls: ['./dialog-graph.component.scss']
})
export class DialogGraphComponent implements OnInit {
  public view: any[] = [700, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel: 'Years';
  public showYAxisLabel = true;
  public yAxisLabel: 'Salary';
  public graphDataChart: any[];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    public dialogRef: MatDialogRef<DialogGraphComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {

  }

}
