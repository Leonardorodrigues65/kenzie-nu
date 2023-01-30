import styles from './style.module.css'
import Font from 'react-font';
import { useState } from 'react';
import {v4 as id} from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({setList, list, filter, setFilter}) {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('')

    const showSuccessMessage = () => {
        toast.success('A new transactin was added to your account', {
            position: "top-right",
            autoClose: 3000
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        const newTransaction = {
            transaction,
            amount: +(amount.toFixed(2)), 
            type,
            id: id()
        }

        const transType = filter.find(trans => trans.type !== '')?.type;

        if(JSON.stringify(list) === JSON.stringify(filter)){
            setFilter([...list, newTransaction]);

        } else if(transType === newTransaction.type){

            setFilter([...filter, newTransaction]);

        }


        setList((oldValues) => [...oldValues, newTransaction]);

        setTransaction('');
        setAmount('')
        setType('')
        showSuccessMessage()

    }

    localStorage.setItem('@NuKenzie: transactions', JSON.stringify(list));


    return (
        
            <form className={styles.formContainer} onSubmit={handleSubmit}>

                <Font family='Inter'>
                    <div className={styles.descriptionContainer}>
                        <label htmlFor="description">Descrição</label>
                        <input type="text" name="description" id="description" placeholder="Digite aqui sua descrição" value={transaction} onChange={(event) => setTransaction(event.target.value)} required autoComplete='off'/>
                        <small>Ex: Compras de roupas</small>
                    </div>
                    <div className={styles.amountAndTypeContainer}>
                        <div className={styles.amountContainer}>
                            <label htmlFor="amount">Valor</label>
                            <div className={styles.inputAmountContainer}>
                                <input type="number" name="amount" id="amount" value={amount} onChange={(event) => setAmount(Number(event.target.value))} required autoComplete='off'/>
                                <span className={styles.dollarSymbol}>R$</span>
                            </div>
                        </div>
                        <div className={styles.typeContainer}>
                            <label htmlFor="type">Tipo de Valor</label>

                            <select  name="type" id="type" value={type} onChange={(event) => setType(event.target.value)} required>

                                <option value="" disabled>Entrada</option>
                                <option value="deposit">Deposito</option>
                                <option value="expense">Despesa</option>
                                
                            </select>
                        </div>
                    </div>
                    <button type='submit' className={styles.addTransactionButton}>Inserir valor</button>
                    <ToastContainer />
                </Font>

            </form>
        
        
    )
}

{/* <select  name="type" id="type" required value={type} onChange={(event) => setType(event.target.value)}></select> */}
export default Form;