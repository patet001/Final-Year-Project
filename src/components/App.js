import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.png';
import './App.css';
import Marketplace from '../abis/Marketplace.json'

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
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web 3 Network
          </a>
        <ul className='navbar-nav px-3'>
          <li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
            <small className='text-white'><span id="account">Current User - {this.state.account}</span></small>
          </li>
        </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>Starter Page</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
