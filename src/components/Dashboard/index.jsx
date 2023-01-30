import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalMoney from "../TotalMoney";
import styles from './style.module.css'
import { useState } from "react";
import Font from "react-font";


function Dashboard({click, setList, list}){

    const [filter, setFilter] = useState([...list]);

    return (
        <>
            <Font family="Nunito">
                <Header click={click}/>
                <main className={styles.mainContainer}>
                    <div className={styles.formTotalContainer}>
                        <Form setList={setList} list={list} filter={filter} setFilter={setFilter}/>
                        {list.length > 0 && <TotalMoney list={list}/>}
                    </div>
                    <List list={list} setList={setList} setFilter={setFilter} filter={filter}/>
                </main>
            </Font>

        </>
        
    )
}

export default Dashboard;