/* tslint:disable */
/* eslint-disable */
/**
* Type used on the JS side to convert screen coordinates to chart
* coordinates.
*/
export class Chart {
  free(): void;
/**
* Draw provided power function on the canvas element using it's id.
* Return `Chart` struct suitable for coordinate conversion.
* @param {string} canvas_id
* @param {number} power
* @returns {Chart}
*/
  static power(canvas_id: string, power: number): Chart;
/**
* Draw Mandelbrot set on the provided canvas element.
* Return `Chart` struct suitable for coordinate conversion.
* @param {HTMLCanvasElement} canvas
* @returns {Chart}
*/
  static mandelbrot(canvas: HTMLCanvasElement): Chart;
/**
* @param {HTMLCanvasElement} canvas
* @param {number} pitch
* @param {number} yaw
*/
  static plot3d(canvas: HTMLCanvasElement, pitch: number, yaw: number): void;
/**
* This function can be used to convert screen coordinates to
* chart coordinates.
* @param {number} x
* @param {number} y
* @returns {Point | undefined}
*/
  coord(x: number, y: number): Point | undefined;
}
/**
* Result of screen to chart coordinates conversion.
*/
export class Point {
  free(): void;
/**
*/
  x: number;
/**
*/
  y: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_chart_free: (a: number) => void;
  readonly __wbg_point_free: (a: number) => void;
  readonly __wbg_get_point_x: (a: number) => number;
  readonly __wbg_set_point_x: (a: number, b: number) => void;
  readonly __wbg_get_point_y: (a: number) => number;
  readonly __wbg_set_point_y: (a: number, b: number) => void;
  readonly chart_power: (a: number, b: number, c: number, d: number) => void;
  readonly chart_mandelbrot: (a: number, b: number) => void;
  readonly chart_plot3d: (a: number, b: number, c: number, d: number) => void;
  readonly chart_coord: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
