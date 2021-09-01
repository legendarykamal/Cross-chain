/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Replica, ReplicaInterface } from "../Replica";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    name: "ProcessError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
    ],
    name: "ProcessSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    inputs: [],
    name: "PROCESS_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_GAS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "acceptableRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "canConfirm",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "confirm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "confirmAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_remoteDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_optimisticSeconds",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "messages",
    outputs: [
      {
        internalType: "enum Replica.MessageStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextPending",
    outputs: [
      {
        internalType: "bytes32",
        name: "_pending",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_confirmAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optimisticSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "bool",
        name: "_success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "prove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[32]",
        name: "_proof",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remoteDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516131dc3803806131dc8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff1661317361006960003980610cee5280610d2652506131736000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80638d3638f4116100e3578063ba739a621161008c578063df034cd011610066578063df034cd0146105e9578063e7e7a7b71461061a578063f6d161021461066557610198565b8063ba739a62146105b8578063c19d93fb146105d9578063d88beda2146105e157610198565b8063a3f81d68116100bd578063a3f81d68146104e1578063ab91c7b0146104fe578063b31c01fb1461050657610198565b80638d3638f414610412578063928bc4b214610433578063961681dc146104d957610198565b8063399926681161014557806367a6771d1161011f57806367a6771d146103e55780637022b58e146103ed57806371bfb7b8146103f557610198565b8063399926681461032757806345630b1a1461032f5780636188af0e1461033757610198565b80632bbd59ca116101765780632bbd59ca146102a25780632bef2892146102e0578063371d3071146102fd57610198565b806314cfabb31461019d57806319d9d21a146101b957806325e3beda14610288575b600080fd5b6101a561066d565b604080519115158252519081900360200190f35b610286600480360360a08110156101cf57600080fd5b81359160208101918101906080810160608201356401000000008111156101f557600080fd5b82018360208201111561020757600080fd5b8035906020019184600183028401116401000000008311171561022957600080fd5b91939092909160208101903564010000000081111561024757600080fd5b82018360208201111561025957600080fd5b8035906020019184600183028401116401000000008311171561027b57600080fd5b509092509050610699565b005b6102906108f6565b60408051918252519081900360200190f35b6102bf600480360360208110156102b857600080fd5b50356108fc565b604051808260028111156102cf57fe5b815260200191505060405180910390f35b6101a5600480360360208110156102f657600080fd5b5035610911565b6101a5600480360361044081101561031457600080fd5b5080359060208101906104200135610926565b610290610a46565b610290610a4c565b610286600480360361044081101561034e57600080fd5b81019060208101813564010000000081111561036957600080fd5b82018360208201111561037b57600080fd5b8035906020019184600183028401116401000000008311171561039d57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955092935050506104008201359050610a61565b610290610aed565b610286610af3565b6102906004803603602081101561040b57600080fd5b5035610cda565b61041a610cec565b6040805163ffffffff9092168252519081900360200190f35b6101a56004803603602081101561044957600080fd5b81019060208101813564010000000081111561046457600080fd5b82018360208201111561047657600080fd5b8035906020019184600183028401116401000000008311171561049857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d10945050505050565b61041a6113c2565b6101a5600480360360208110156104f757600080fd5b50356113ce565b6102906113f5565b6102866004803603606081101561051c57600080fd5b81359160208101359181019060608101604082013564010000000081111561054357600080fd5b82018360208201111561055557600080fd5b8035906020019184600183028401116401000000008311171561057757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611401945050505050565b6105c06116e5565b6040805192835260208301919091528051918290030190f35b6102bf611733565b610290611754565b6105f161175b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102866004803603608081101561063057600080fd5b5063ffffffff8135169073ffffffffffffffffffffffffffffffffffffffff6020820135169060408101359060600135611777565b610290611910565b6000610679600161191c565b15801590610694575061069461068f600161195c565b6113ce565b905090565b600260345474010000000000000000000000000000000000000000900460ff1660028111156106c457fe5b141561073157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261077391889188359188908890819084018382808284376000920191909152506119fd92505050565b80156107c257506107c286866001602002013584848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506119fd92505050565b80156107d357508435602086013514155b156108ee576107e0611a8f565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b613a9881565b60696020526000908152604090205460ff1681565b600061091e600183611a99565b90505b919050565b60008060008581526069602052604090205460ff16600281111561094657fe5b146109b257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f214d6573736167655374617475732e4e6f6e6500000000000000000000000000604482015290519081900360640190fd5b60006109e8858560208060200260405190810160405280929190826020800280828437600092019190915250879150611b159050565b90506109f3816113ce565b15610a39575050600083815260696020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155610a3f565b60009150505b9392505050565b60665481565b6065546000906106949063ffffffff16611bc0565b610a7383805190602001208383610926565b610ade57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f2170726f76650000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610ae783610d10565b50505050565b60355481565b600260345474010000000000000000000000000000000000000000900460ff166002811115610b1e57fe5b1415610b8b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610b95600161191c565b610c0057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f2170656e64696e67000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600080610c0d600161191c565b90505b600081118015610c285750610c2861068f600161195c565b15610c6057610c376001611c35565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610c10565b81610ccc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f2174696d65000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b610cd4611a97565b50603555565b60686020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610d1d8382611d6e565b905063ffffffff7f000000000000000000000000000000000000000000000000000000000000000016610d717fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611d92565b63ffffffff1614610de357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2164657374696e6174696f6e0000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610e107fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611dc3565b9050600160008281526069602052604090205460ff166002811115610e3157fe5b14610e9d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f2170726f76656e00000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60675460ff16600114610f1157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f217265656e7472616e7400000000000000000000000000000000000000000000604482015290519081900360640190fd5b606780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00908116909155600082815260696020526040902080549091166002179055620d32e85a1015610fc857604080517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048083019190915260248201527f2167617300000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610ff57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611e02565b9050606073ffffffffffffffffffffffffffffffffffffffff8216620cf85061103f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611e15565b61106a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611e45565b6110bf6110987fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008a16611e76565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016611ee7565b604051602401808463ffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111115781810151838201526020016110f9565b50505050905090810190601f16801561113e5780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f56d5d47500000000000000000000000000000000000000000000000000000000178152905182519297509550859450925090508083835b6020831061120657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016111c9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038160008787f1925050503d8060008114611269576040519150601f19603f3d011682016040523d82523d6000602084013e61126e565b606091505b50909550905084156112aa5760405183907fdc8a2c27342659cbe87c6c49e4515c64faa8c97ba6a2f260cbf33d84d7bd832090600090a261138d565b73ffffffffffffffffffffffffffffffffffffffff82166112ec7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611f2b565b63ffffffff16847fdffcee52db78cb2d1f525b8d7edd630ea062884e733aa26c201d7ce1843eccab846040518080602001828103825283818151815260200191508051906020019080838360005b8381101561135257818101518382015260200161133a565b50505050905090810190601f16801561137f5780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b5050606780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055509092915050565b60655463ffffffff1681565b600081815260686020526040812054806113ec576000915050610921565b42101592915050565b6000610694600161191c565b600260345474010000000000000000000000000000000000000000900460ff16600281111561142c57fe5b141561149957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b60006114a5600161191c565b1115611527576114b56001611f5c565b831461152257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420656e64206f6620717565756500000000000000000000000000000000604482015290519081900360640190fd5b611597565b603554831461159757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f742063757272656e74207570646174650000000000000000000000000000604482015290519081900360640190fd5b6115a28383836119fd565b61160d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b611615611a97565b6066546000838152606860205260409020429091019055611637600183611f99565b5060655460408051602080825284518183015284518694889463ffffffff909116937f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2938893919283929083019185019080838360005b838110156116a657818101518382015260200161168e565b50505050905090810190601f1680156116d35780820380516001836020036101000a031916815260200191505b509250505060405180910390a4505050565b6000806116f2600161191c565b1561171a57611701600161195c565b600081815260686020526040902054909250905061172f565b50506035546000818152606860205260409020545b9091565b60345474010000000000000000000000000000000000000000900460ff1681565b620cf85081565b60345473ffffffffffffffffffffffffffffffffffffffff1681565b600054610100900460ff16806117905750611790612006565b8061179e575060005460ff16155b6117f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061302c602e913960400191505060405180910390fd5b600054610100900460ff1615801561185957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b61186284612017565b6067805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009091168117909155606580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff881617905560358490556000848152606860205260409020556066829055801561190957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050505050565b60006106946001611f5c565b80546000906fffffffffffffffffffffffffffffffff70010000000000000000000000000000000082048116911661195482826121ad565b949350505050565b6000611967826121c7565b156119d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5080546fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b600080611a08610a4c565b8585604051602001808481526020018381526020018281526020019350505050604051602081830303815290604052805190602001209050611a49816121f6565b60345490915073ffffffffffffffffffffffffffffffffffffffff16611a6f8285612247565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b611a976122e1565b565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111611b09576000818152600185016020526040902054831415611b01576001915050611b0f565b600101611ab1565b50600090505b92915050565b8260005b6020811015611bb857600183821c166000858360208110611b3657fe5b602002015190508160011415611b7c5780846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350611bae565b838160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b5050600101611b19565b509392505050565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611c6d82826121ad565b611cd857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611d29576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b815160009060208401611d8964ffffffffff85168284612322565b95945050505050565b600061091e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660286004612378565b600080611dcf83612399565b6bffffffffffffffffffffffff1690506000611dea846123ad565b6bffffffffffffffffffffffff169091209392505050565b600061091e611e10836123c1565b6123f2565b600061091e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826004612378565b600061091e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600460206123f5565b600061091e604c80611ea97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000086166123ad565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861692916bffffffffffffffffffffffff919091160360006125a0565b6060600080611ef5846123ad565b6bffffffffffffffffffffffff1690506040519150819250611f1a8483602001612626565b508181016020016040529052919050565b600061091e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660246004612378565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b81546fffffffffffffffffffffffffffffffff8082167001000000000000000000000000000000009283900482166001019182169092029190911783558115611b0f576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b600061201130612752565b15905090565b600054610100900460ff16806120305750612030612006565b8061203e575060005460ff16155b612093576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061302c602e913960400191505060405180910390fd5b600054610100900460ff161580156120f957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b612101612758565b603480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017905580156121a957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b60019103016fffffffffffffffffffffffffffffffff1690565b546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000909204161090565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b600081516041146122b957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6122d786828585612876565b9695505050505050565b603480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b60008061232f8484612a64565b905060405181111561233f575060005b8061236d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610a3f565b611d89858585612ad6565b60008160200360080260ff1661238f8585856123f5565b901c949350505050565b60781c6bffffffffffffffffffffffff1690565b60181c6bffffffffffffffffffffffff1690565b600061091e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602c60206123f5565b90565b600060ff821661240757506000610a3f565b612410846123ad565b6bffffffffffffffffffffffff1661242b8460ff8516612a64565b111561250a5761246c61243d85612399565b6bffffffffffffffffffffffff16612454866123ad565b6bffffffffffffffffffffffff16858560ff16612ae9565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156124cf5781810151838201526020016124b7565b50505050905090810190601f1680156124fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60208260ff161115612567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a81526020018061307c603a913960400191505060405180910390fd5b60088202600061257686612399565b6bffffffffffffffffffffffff169050600061259183612c44565b91909501511695945050505050565b6000806125ac86612399565b6bffffffffffffffffffffffff1690506125c586612c8d565b6125d9856125d38489612a64565b90612a64565b1115612608577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611954565b6126128186612a64565b90506122d78364ffffffffff168286612322565b600061263183612cb7565b612686576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806130b66028913960400191505060405180910390fd5b61268f83612cc9565b6126e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806130de602b913960400191505060405180910390fd5b60006126ef846123ad565b6bffffffffffffffffffffffff169050600061270a85612399565b6bffffffffffffffffffffffff169050600060405190508481111561272f5760206060fd5b8285848460045afa506122d761274487612d06565b64ffffffffff168685612ad6565b3b151590565b600054610100900460ff16806127715750612771612006565b8061277f575060005460ff16155b6127d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e81526020018061302c602e913960400191505060405180910390fd5b600054610100900460ff1615801561283a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6128446001612d0c565b801561287357600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156128f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612fe96022913960400191505060405180910390fd5b8360ff16601b148061290657508360ff16601c145b61295b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061305a6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156129b7573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611d8957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b81810182811015611b0f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60606000612af686612d50565b9150506000612b0486612d50565b9150506000612b1286612d50565b9150506000612b2086612d50565b915050838383836040516020018080613109603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a820152605001602161300b82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000612c98826123ad565b612ca183612399565b016bffffffffffffffffffffffff169050919050565b6000612cc282612e24565b1592915050565b6000612cd482612d06565b64ffffffffff1664ffffffffff1415612cef57506000610921565b6000612cfa83612c8d565b60405110199392505050565b60d81c90565b80546fffffffffffffffffffffffffffffffff166128735780547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016600117815550565b600080601f5b600f8160ff161115612db85760ff600882021684901c612d7581612e4c565b61ffff16841793508160ff16601014612d9057601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612d56565b50600f5b60ff8160ff161015612e1e5760ff600882021684901c612ddb81612e4c565b61ffff16831792508160ff16600014612df657601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01612dbc565b50915091565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b6000612e5e60048360ff16901c612e7c565b60ff161760081b62ffff0016612e7382612e7c565b60ff1617919050565b600060f08083179060ff82161415612e98576030915050610921565b8060ff1660f11415612eae576031915050610921565b8060ff1660f21415612ec4576032915050610921565b8060ff1660f31415612eda576033915050610921565b8060ff1660f41415612ef0576034915050610921565b8060ff1660f51415612f06576035915050610921565b8060ff1660f61415612f1c576036915050610921565b8060ff1660f71415612f32576037915050610921565b8060ff1660f81415612f48576038915050610921565b8060ff1660f91415612f5e576039915050610921565b8060ff1660fa1415612f74576061915050610921565b8060ff1660fb1415612f8a576062915050610921565b8060ff1660fc1415612fa0576063915050610921565b8060ff1660fd1415612fb6576064915050610921565b8060ff1660fe1415612fcc576065915050610921565b8060ff1660ff1415612fe2576066915050610921565b5091905056fe45434453413a20696e76616c6964207369676e6174757265202773272076616c75652e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c756554797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220925150f4a4d1dd293bc5d1f262d1c60318e117848c9c10331e11474b991f600364736f6c63430007060033";

export class Replica__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Replica> {
    return super.deploy(_localDomain, overrides || {}) as Promise<Replica>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): Replica {
    return super.attach(address) as Replica;
  }
  connect(signer: Signer): Replica__factory {
    return super.connect(signer) as Replica__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReplicaInterface {
    return new utils.Interface(_abi) as ReplicaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Replica {
    return new Contract(address, _abi, signerOrProvider) as Replica;
  }
}
