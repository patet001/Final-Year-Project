import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Marketplace from '../abis/Marketplace.json'
import Main from './Main';
import Navbar from './Navbar';

class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockChainData()
    //console.log(window.web3)
  }
  //Check for blockchain enabled browser  
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert("Browser is not blockchain enabled")
    }
  }

  //load blockchain account data
  async loadBlockChainData(){
    const web3 = window.web3
    //load acc
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData){
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
      console.log(marketplace)
      this.setState({marketplace: marketplace})
      const postCount = await marketplace.methods.postCount().call()
      //Load Posts from blockchain
      for(var i = 1; i <= postCount; i++){
        const post = await marketplace.methods.posts(i).call()
        this.setState({posts:[...this.state.posts, post]})
      }
      this.setState({loading:false})
      
    }
    else{
      window.alert("Contract not deployed on main network")
    }
    console.log(networkId)

  }

  constructor(props){
    super(props)
    this.state = {
      account: '',
      postCount: 0,
      posts: [],
      loading: true
    }
    this.createPost = this.createPost.bind(this)
  }
  
  createPost(name, content){
    this.setState({loading:true})
    this.state.marketplace.methods.createPost(name, content).send({from:this.state.account}).once('receipt',(receipt)=>{this.setState({loading : false})})
  }
    
  render() {
    return (
      <div>
        <Navbar account={this.state.account} />        
        <div className = "container-fluid mt-5">
          <div className = "row">
            <main role="main" className="col-lg-12 d-flex">
              {this.state.loading ? <div id="loader" className='text-center'><p className='text-center'>Loading...</p></div>
              : <Main 
                posts={this.state.posts}
                createPost={this.createPost}/>}
            </main> 
          </div>

        </div>

      </div>
    );
  }
}

export default App;