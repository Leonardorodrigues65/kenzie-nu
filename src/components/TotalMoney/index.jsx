import styles from './style.module.css';
import Font from 'react-font';

function TotalMoney({list}){

    function balance(list){
        
        const totalDeposits = list.filter((transc) => transc.type === 'deposit').reduce((acc, currentValue) => acc + currentValue.amount, 0);

        const totalExpenses = list.filter((transc) => transc.type === 'expense').reduce((acc, currentValue) => acc + currentValue.amount, 0);

        const totalMoney = (totalDeposits - totalExpenses).toFixed(2)

        return totalMoney;
    }

    return  (
        <Font family='Nunito'>
            <section className={styles.totalMoneyContainer}>
                <div className={styles.topContainer}>
                    <h3>Valor Total:</h3>
                    <p>O valor se refere ao saldo</p>
                </div>
                <span>R$ {balance(list)}</span>
            </section>
        </Font>
    )
}

export default TotalMoney;