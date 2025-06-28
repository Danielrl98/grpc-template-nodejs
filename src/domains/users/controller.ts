export function MyMethod(call: any, callback: any) {
  callback(null, { message: JSON.stringify(call) });
}
