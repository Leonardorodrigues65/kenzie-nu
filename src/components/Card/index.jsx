import styles from './style.module.css';
import { MdDelete } from 'react-icons/md';
import Font from 'react-font'

function Card({transaction, amount, id, type, setList, list, setFilter}){

    function deleteTransaction (transactionId){
        setList((oldValues) => [...oldValues.filter(transc => transc.id !== transactionId)])
        setFilter((oldValues) => [...oldValues.filter(transc => transc.id !== transactionId)])
        localStorage.setItem('@NuKenzie: transactions', JSON.stringify(list));

    }

    return (
       
        < li className={`${styles.cardContainer} ${type==='deposit' && styles.depositType}`}>
        
            <div className={styles.topContainer}>
                <h3>{transaction.toLowerCase()}</h3>
                <small className={styles.transactionType}>{type}</small>
            </div>
            <div className={styles.amountButtonContainer}>
                <span className={styles.amount}>U$ {amount}</span>
                <button className={styles.deleteButton} onClick={() => {deleteTransaction(id)}}><MdDelete/></button>
            </div>
        
        </li>
        
    )
}

export default Card;