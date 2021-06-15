/**
 * MPA Plugin options.
 */

export interface MpaOptions {
  /**
   * where to scan
   * @default 'src/pages'
   */
  scanDir: string
  /**
   * scanFile
   * @default 'main.{js,ts,jsx,tsx}'
   */
  scanFile: string
  /**
   * html filename, yarn crate @vitejs/app => projectRoot/index.html or MPA projectRoot/pages/${pageName}/index.html
   * @default 'index.html'
   */
  filename: string
  /**
   * default included entry
   * @optional
   */
  defaultEntries: string | string[]
}

export type UserOptions = Partial<MpaOptions>
