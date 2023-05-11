import logo from './media/img/logo.png'

const Logo = () => {
  return (<div className="flex flex-col items-center">
      <img src={logo} className="w-1/2 rounded-md"/>
    </div>);
};

export default Logo;

