import './env';
import { decode, encode } from './lib/utils';
import path from 'path';

let args = process.argv.slice(2);

if (process.env.NODE_ENV === "development") {
  const module = 'httpClient';
  const arg = '{ "method": "get", "url": "https://brasilapi.com.br/api/cep/v2/14770000" }';
  const encodedArg = encode(arg);

  args = [module, encodedArg];
  // console.log(args);
}

const run = async (args) => {
  let output = {};

  try {
    const module = args[0];

    if (!module) {
      throw new Error(`Invalid module: ${module}`);
    }

    const encodedArg = args[1];
    const decodedArg = encodedArg && decode(encodedArg);
    const arg = JSON.parse(decodedArg || '{}');

    const { default: moduleHandler} = await import(path.resolve(__dirname, 'services', module));
    const result = await moduleHandler(arg);

    output = {data: result};
  } catch (e) {
    // throw e;
    output = {error: e.message};
  }

  const jsonOutput = JSON.stringify(output);
  const encodedOutput = encode(jsonOutput);

  if (process.env.NODE_ENV === "development") {
    /*console.log('module: ', module);
    console.log('');
    console.log('arg: ', arg);
    console.log('decodedArg: ', decodedArg);
    console.log('argObject: ', argObject);*/
    console.log('');
    console.log('output: ', output);
    console.log('');
    console.log('jsonOutput: ', jsonOutput);
    console.log('');
    console.log('encodedOutput: ', encodedOutput);
    return;
  }

  console.log(encodedOutput);
};

run(args);
