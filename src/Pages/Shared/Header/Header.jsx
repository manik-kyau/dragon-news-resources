import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='my-12'>
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>
            <h2 className='text-lg font-normal text-center'>Journalism Without Fear or Favour</h2>
            <h3 className='text-xl font-medium text-center'>{moment().format("dddd, MMMM D, YYYY, h:mm A")}</h3>
        </div>
    );
};

export default Header;