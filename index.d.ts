export type HashOptions = {
  blocksize?:number,
  cost?:number,
  parallelism?:number,
  saltSize?:number,

}

export function hash(password: string, options?: HashOptions): Promise<string>;
export function verify(hash:string, password: string): Promise<boolean>;

