const nodeJsSampleModule = require('nodejs-sample-module');

const main = () => {
  const logger = nodeJsSampleModule.Log.logger
  const utils = nodeJsSampleModule.Utils;
  
  logger.info('### START APPLICATION ###')
  try {
    const arguments = process.argv.slice(2); // removing node & path to index.js file
    logger.info(`arguments: ${JSON.stringify(arguments)}`)
    if (arguments.length === 0 || arguments.length !== 2) {
      throw new Error('Input arguments array is empty or length different than required (2). Use two numbers - example: node index.js 1 2')
    }

    const a = arguments[0];
    const b = arguments[1];
    if (isNaN(a) || isNaN(b)) {
      throw new Error('Input arguments are not numbers. Use numbers as input arguments!');
    }
    const parsedA = eval(a);
    const parsedB = eval(b)

    const result = utils.sum(parsedA,parsedB);
    logger.info(`result: ${result}`)

  } catch (error) {
    logger.error(error);
  
  } 
  logger.info('### END APPLICATION ###')
}

main();
