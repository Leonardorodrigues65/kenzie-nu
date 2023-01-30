import styles from './style.module.css';
import logo from '../../assets/logo.svg';
import Font from 'react-font'

function LandingPage({click}) {
    return (
        <Font family='Nunito'>
            <div className={styles.landingPage}>
            <div className={styles.landingPageContainer}>
                <div className={styles.topContainer}>
                    <img src={logo} alt="Nu Kenzie logo" />
                    <h1>Centralize o controle das suas finanças</h1>
                    <p>de forma rapida e segura</p>
                
                    <button onClick={() => click(true)} type='button'>iniciar</button>
                </div>
                <div className={styles.bottomContainer}>
                
                </div>
            </div>
        </div>
        </Font>
        
      
        
            
       
    )
}

export default LandingPage;