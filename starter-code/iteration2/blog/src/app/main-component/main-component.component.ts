import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <h1>Learn how to cook brisket meat</h1>
    <div>
    <img src="./img/meat.jpg">
    <p>"Brisket is a cut of meat from the breast or lower chest of beef or veal. The beef brisket is one of the nine beef primal cuts, though the precise definition of the cut differs internationally. The brisket muscles include the superficial and deep pectorals. As cattle do not have collar bones, these muscles support about 60% of the body weight of standing/moving cattle. This requires a significant amount of connective tissue, so the resulting meat must be cooked correctly to tenderize the connective tissue.According to the Random House Dictionary of the English Language, Second Edition, the term derives from the Middle English brusket which comes from the earlier Old Norse brjósk, meaning cartilage. The cut overlies the sternum, ribs, and connecting costal cartilages."</p>
    </div>

  `,
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
