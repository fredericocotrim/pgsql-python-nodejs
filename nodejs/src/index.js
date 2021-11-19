import './env';
import { decode, encode } from './lib/utils';

const run = async (args) => {
  const module = args[0];

  const arg = args[1];
  const decodedArg = arg && decode(arg);
  const argObject = JSON.parse(decodedArg || '{}');

  const { default: handle} = await import(`./services/${module}`);

  const result = await handle(argObject);

  const jsonResult = JSON.stringify(result);
  const encodedResult = encode(jsonResult);

  if (process.env.NODE_ENV === "development") {
    console.log('module: ', module);
    console.log('');
    console.log('arg: ', arg);
    console.log('decodedArg: ', decodedArg);
    console.log('argObject: ', argObject);
    console.log('');
    console.log('result: ', result);
    console.log('');
    console.log('jsonResult: ', jsonResult);
    console.log('encodedResult: ', encodedResult);
  } else {
    console.log(encodedResult);
  }
};

let args = process.argv.slice(2);

if (process.env.NODE_ENV === "development") {
  args = [
    'httpClient',
    encode('{ "method": "get", "url": "https://brasilapi.com.br/api/cep/v2/14781750" }')
  ];

  // console.log(args);
}

run(args);
