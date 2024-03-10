import { useState } from 'react'
import MenuBtn from '../components/MenuBtn/MenuBtn'
import style from './HomePage.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.webp'
import MiddleSec from '../components/MiddleSec'
import Footer from '../components/Footer/Footer'

function HomePage() {
    const [isopen, setIsopen] = useState(false)
    const navigate = useNavigate()
    return (
        // <div className={style.parent}>
        //     <div className={isopen ? `${style.sideNav} ${style.slide}` : style.sideNav}>
        //         <nav>
        //             <ul className={style.tabs}>
        //                 <li onClick={() => {
        //                     navigate('/login')
        //                 }}><span></span> Login</li>
        //                 <li onClick={() => {
        //                     navigate('/signup')
        //                 }}><span></span> SignUp</li>
        //                 <li onClick={() => {
        //                     navigate('/')
        //                 }}><span></span> Free Trial</li>
        //             </ul>
        //         </nav>
        //     </div>
        //     <div className={style.menuBtn} >
        //         <MenuBtn func={() => {
        // setIsopen(!isopen)
        //         }} />
        //     </div>
        //     <div className={style.banner}>
        //         <img src={logo} className={style.logo} alt="" />
        //         <div className={style.bannerText}>
        //             <h1>Book a free trail</h1>
        //             <p>Explore the Quran in your house</p>
        //             <div className={style.bannerBtn}>
        //                 <p > <span></span> Book Free Trial</p>
        //                 <p > <span></span>Join Us</p>
        //             </div>
        //         </div>
        //     </div>
        // <MiddleSec />
        // <Footer />
        // </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', flexDirection: 'column', position: 'relative' }}>
            <h1>Coming Soon...</h1>
            <h5>Under Construction...</h5>
            <div style={{ position: 'absolute', top: '1rem', left: 0, display: 'flex', flexDirection: 'column' , alignItems:'center' , width:'100%' ,  }}>
                <p style={{ fontWeight: 'bold' }}>For more Info plz contact Admin</p>
                <p style={{ fontWeight: 'bold' }}>{`Harry => 03266874194 [Whatsapp only]`}</p>
            </div>
        </div>
    )
}

export default HomePage
