import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
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
    
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

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
      this.setState({loading:false})
    }
    else{
      window.alert("Marketplace contract not deployed on main network")
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
  }
    
    
  render() {
    return (
      <div>
        <Navbar account={this.state.account} />        
        <div className = "container-fluid mt-5">
          <div className = "row">
            <main role="main" className="col-lg-12 d-flex">
              {this.state.loading ? <div id="loader" className='text-center'><p className='text-center'>Loading...</p></div>: <Main/>}
            </main> 
          </div>

        </div>

      </div>
    );
  }
}

export default App;
