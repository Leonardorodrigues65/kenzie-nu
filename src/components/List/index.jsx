import styles from './style.module.css';
import noCard from '../../assets/NoCard.svg'
import Font from 'react-font'
import Card from '../Card';
import { useState } from 'react';

function List({list, setList, setFilter, filter}){
    const [allButton, setAllButton] = useState(true);
    const [depositsButton, setDepositsButton] = useState(false);
    const [expenseButton, setExpensesButton] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(1);


    function handleFilter(filterName, id){

        if(filterName === 'all'){
            setFilter([...list])
            
        } else {
            const filteredList = list.filter(trans => trans.type === filterName);  
            
            setFilter([...filteredList])
        }

        handleFilterSelection(id)
    }

    function handleFilterSelection(id){
        setSelectedFilter(id);
    }
   

    return (
        
            <ul className={styles.listContainer}>
                
                <div className={styles.titleButtonsContainer}>
                    <h3 className={styles.listTitle}>Account activity</h3>
                    <div className={styles.filterButtonsContainer}>
                        <button className={selectedFilter === 1 ?  styles.selectedFilterButton : styles.nonSelectedButton} onClick={(event) => handleFilter('all', 1)} >All</button>
                        <button className={selectedFilter === 2 ?  styles.selectedFilterButton : styles.nonSelectedButton} onClick={(event) => handleFilter('deposit', 2)} data-id='deposit' >Deposits</button>
                        <button className={selectedFilter === 3 ?  styles.selectedFilterButton : styles.nonSelectedButton} onClick={() => handleFilter('expense', 3)} >Expenses</button>
                    </div>
                </div>

                {!list.length > 0 
                    ? 
                    (<>
                        <h2>You don't have any transactions yet.</h2>
                        <img src={noCard} alt="No cards image" />
                    </>)
                    :
                    filter.map((item) => <Card {...{...item, setList, list, setFilter}} key={item.id}/>)
                }
                
                
            </ul>
        
    )
}

export default List;

{/* <button className={`${styles.allTranscButton} ${selectedFilter === 1 && styles.selectedFilterButton }`} onClick={(event) => handleFilter('all', 1)} >All</button>
                        <button className={`${styles.depositsButton} ${selectedFilter === 2 && styles.selectedFilterButton}`} onClick={(event) => handleFilter('deposit', 2)} data-id='deposit' >Deposits</button>
                        <button className={styles.expensesButton} onClick={() => handleFilter('expense')} >Expenses</button> */}