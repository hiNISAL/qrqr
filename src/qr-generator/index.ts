import QRCodeGenerator from 'qrcode-generator';

/**
 * *********************************************************************
 * type start
 *
 */

type TypeNumber =
  | 0
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
  | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
  | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
  ;

type Mode = 'Numeric' | 'Alphanumeric' | 'Byte' /* Default */ | 'Kanji';

interface IOptions {
  // 版本
  version?: TypeNumber,
  // 容错率
  level?: 'L'|'M'|'Q'|'H',
  // 码内容
  content: string,
  // 编码
  mode?: Mode,
  // 尺寸
  size?: number,
}

/**
 *
 * type end
 * *********************************************************************
 */

class QRSupporter {
  private qr;

  private size: number = 128;

  constructor(
    private readonly options: IOptions|string,
  ) {
    const defOpts: IOptions = {
      version: 0,
      level: 'H',
      content: '',
      mode: 'Byte',
      size: 128,
    };

    if (typeof options === 'string') {
      options = {
        content: options,
      };
    }

    Object.assign(defOpts, options);

    const qr = QRCodeGenerator(defOpts.version!, defOpts.level!);

    qr.addData(defOpts.content);

    qr.make();

    this.qr = qr;

    this.size = defOpts.size!;
  }

  private getCellSize(cellSize): number {
    if (!cellSize) {
      cellSize = Math.floor(this.size / this.qr.getModuleCount());
    }

    return cellSize;
  }

  public setSize(size: number) {
    this.size = size;

    return this;
  }

  public table(margin: number = 0, cellSize?: number): string {
    cellSize = this.getCellSize(cellSize);

    return this.qr.createTableTag(cellSize, margin);
  }

  public img(margin: number = 0, cellSize?: number): HTMLImageElement {
    cellSize = this.getCellSize(cellSize);

    const el = document.createElement('div');

    el.innerHTML = this.qr.createImgTag(cellSize, margin);

    return el.querySelector('img')!;
  }

  public base64(margin: number = 0, cellSize?: number): string {
    cellSize = this.getCellSize(cellSize);

    return this.qr.createDataURL(cellSize, margin);
  }

  public ascii(margin: number = 0, cellSize?: number): string {
    cellSize = this.getCellSize(cellSize);

    return this.qr.createASCII(cellSize, margin);
  }
}

export default QRSupporter;
