const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('Marketplace', ([deployer, OP, viewer]) => {
  let marketplace

  before(async () => {
    marketplace = await Marketplace.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await marketplace.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await marketplace.name()
      assert.equal(name, 'Dapp University Marketplace')
    })

  })
  
  
  
  describe('posts', async () => {
      let result, postCount
      before(async () => {
          result = await marketplace.createPost('test Post','Hello World',{from : OP}); 
          postCount = await marketplace.postCount()
      })
      
      it('creates posts', async ()=> {
          //Success
          assert.equal(postCount, 1)
          const event = result.logs[0].args
          assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
          assert.equal(event.name, 'test Post' , 'name is correct')
          assert.equal(event.content, 'Hello World' , 'content is correct')
          assert.equal(event.poster, OP , 'poster is correct')
          //assert.equal(event.likes, 'Hello World' , 'content is correct')
          
          //FAIL
          await await marketplace.createPost('','Hello World',{from : OP}).should.be.rejected;
          
      })
      
        it('lists posts', async () => {
            const posts = await marketplace.posts(postCount)  
            assert.equal(post.id.toNumber(), postCount.toNumber(), 'id is correct')
            assert.equal(post.name, 'test Post' , 'name is correct')
            assert.equal(post.content, 'Hello World' , 'content is correct')
            assert.equal(post.poster, OP , 'poster is correct')
        })
      
      
  })
})
  
