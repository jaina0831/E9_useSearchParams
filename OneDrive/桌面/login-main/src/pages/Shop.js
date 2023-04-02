import { useContext,useState ,useEffect} from "react";
import { Layout } from 'antd';
import WeverseHeader from "../components/Header";
import WeverseNavbar from "../components/Navbar/Navbar";
import MainArea from "../components/Shop/MainArea";
import NavbarPhone from "../components/Navbar/NavbarPhone";

import { StoreContext } from "../store"
import {setPage} from "../actions"
import {getTitle} from "../utils"
import {getArtistJSON} from "../api"


const { Header, Content, Footer } = Layout;

function Shop() {
  const { state: { page: { title, products } } , dispatch} = useContext(StoreContext);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch,url, getTitle(url));
  }, []);// eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <Layout className="container main-layout">
      <NavbarPhone isNavBarVisible={!isNavBarVisible}/>
      <WeverseHeader setIsNavBarVisible={setIsNavBarVisible} isNavBarVisible={isNavBarVisible}/>
      <Layout className="layout-content">
          <WeverseNavbar isNavBarVisible={isNavBarVisible}/>
          <MainArea isNavBarVisible={isNavBarVisible}/>
      </Layout>
      
    </Layout>
  );
}

export default Shop;
