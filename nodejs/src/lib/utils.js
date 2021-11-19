const encode = decodedStr => {
  const encodedStr = Buffer.from(decodedStr).toString('base64');
  return encodedStr;
};

const decode = encodedStr => {
  //const encoding = 'ascii';
  const encoding = 'utf-8';
  const decodedStr = Buffer.from(encodedStr, 'base64').toString(encoding);
  return decodedStr;
};

// console.log(encode("abc123!?$*&()'-=@~"));
// console.log(decode('YWJjMTIzIT8kKiYoKSctPUB+'));

export { encode, decode };
