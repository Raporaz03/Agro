
import Log from '../../Components/log/Log';
import Sign from '../../Components/sign/sign';
import './login.css';

export default function Login() {
    const logi = window.location.href.indexOf("login") !== -1;
    const onClick= ()=>{
        let loginContainer = document.getElementById("loginCon");
        let loginBox = document.getElementById("loginIt");
        // if(logi){
        //     loginContainer.style.animation = 'switch1 1s ease-in-out 1';
        //     loginBox.style.animation = 'switchReverse1 1s ease-in-out 1';
        //     setTimeout(()=>{
        //         loginContainer.style.left = "50%";
        //         loginBox.style.right = "50%";
        //     }, 1000);
        // }
        // else{
        //     loginContainer.style.animation = 'switch2 1s ease-in-out 1';
        //     loginBox.style.animation = 'switchReverse2 1s ease-in-out 1';
        //     setTimeout(()=>{
        //         loginContainer.style.left = "0%";
        //         loginBox.style.right = "0%";
        //     }, 1000);
        // }
    }

    return (
        <div className='loginWrapper'>
            <div className='loginContainer' >
                <div id='loginCon' ><img src={"https://img.freepik.com/premium-vector/indian-farmer-with-crops-hand-illustration_635702-11.jpg?w=2000"} alt="" /></div>
                <div className='loginBox' id='loginIt'>
                    {logi ? <Log click={onClick}/> : <Sign click={onClick} />}
                </div>
            </div>
        </div>
    )
}
