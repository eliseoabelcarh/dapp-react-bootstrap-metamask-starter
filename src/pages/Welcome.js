import Header from '../components/Header'
import Meta from '../components/Meta'
import * as Icon from 'react-bootstrap-icons';

const Welcome = (props) => {
 
  // page content
  const pageTitle = 'Welcome'
  const pageDescription = 'welcome to react bootstrap template'
  
  const reduceWallet =(str) => {
    var result = ""
    if(str.length >= 40){
      result = ` ${str.substring(0,2)}...${str.slice(-4)}`
    }
    return result
  }
  return (
    <div style={{color:"whitesmoke"}}>
      {/* <Meta title={pageTitle}/> */}
      {/* <Header head={pageTitle} description={pageDescription} /> */}
      <Icon.Wallet2 color="royalblue" size={25} /> {!props.currentAccount? "": reduceWallet(props.currentAccount)}
    </div>
  )
}

export default Welcome