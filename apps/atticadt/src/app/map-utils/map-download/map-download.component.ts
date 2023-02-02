import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'uwmh-map-download',
  templateUrl: './map-download.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDownloadComponent implements AfterViewInit {
  @ViewChild('map')
  map!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;

  ngAfterViewInit() {
    // html2canvas(this.map.nativeElement).then((canvas) => {
    //   this.canvas.nativeElement.src = canvas.toDataURL();
    //   this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
    //   this.downloadLink.nativeElement.download = 'marble-diagram.png';
    //   this.downloadLink.nativeElement.click();
    // });
    const img = new Image();
    const mapCanvas = document.querySelector(
      '.mapboxgl-canvas'
    ) as HTMLCanvasElement;
    if (mapCanvas) {
      img.src = mapCanvas.toDataURL();
      window.document.body.appendChild(img);
    }
  }
}
