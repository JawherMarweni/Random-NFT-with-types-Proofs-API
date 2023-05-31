# Random-NFT-with-types-Proofs-API

You can use the following test requests to check the functionality of the API:

```http
1. Test with an existing address and NFT type 0:
GET http://localhost:3000/checkAddress?address=0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

2. Test with an existing address and NFT type 1:
GET http://localhost:3000/checkAddress?address=0x70997970C51812dc3A010C7d01b50e0d17dc79C8

3. Test with an existing address and NFT type 2:
GET http://localhost:3000/checkAddress?address=0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC

4. Test with an existing address and NFT type 1 (different discount):
GET http://localhost:3000/checkAddress?address=0x90F79bf6EB2c4f870365E785982E1f101E93b906

5. Test with a non-existing address:
GET http://localhost:3000/checkAddress?address=0x1234567890

```
