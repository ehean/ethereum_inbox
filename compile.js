const path = require('path');   // path is the pathname library
const fs = require('fs');       // fs is the file i/o library
const solc = require('solc');   // solc is the solidity compiler library


// get the path name of the contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// read in the solidity code
const source = fs.readFileSync(inboxPath, 'utf8');

// compile the contract, which is contained in source,
// set to 1 because there is only 1 contracts
// and export the contract itself, which is in the ':Inbox' key
compiledContract = solc.compile(source, 1);
//console.log(compiledContract);

module.exports = compiledContract.contracts[':Inbox'];
