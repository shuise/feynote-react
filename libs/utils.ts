import Web3 from "web3"

const isSameAddress = (address1, address2) => {
  return address1.toLowerCase() === address2.toLowerCase()
}

const isEvmAddress = (address) => {
  if (address == "" || address == undefined) {
    return false
  }
  const web3 = new Web3()
  const isValid = web3.utils.isAddress(address)
  return isValid
}

const renderAddress = (address) => {
  if (address.startsWith("0x") && address.length > 10) {
    return address.slice(0, 6) + "..." + address.slice(-4)
  }
  return address
}

const objMerge = (obj1, obj2) => {
  let obj = JSON.parse(JSON.stringify(obj1))
  for (var p in obj2) {
    obj[p] = obj2[p]
  }
  return obj
}

export { isSameAddress, isEvmAddress, renderAddress, objMerge }
