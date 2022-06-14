import React, {useEffect, useState} from 'react';
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Product from "../../UI/Product/Product";
import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";
import classes from "./Main.module.css";
import houseModal from '../../assets/svg/houseModal.svg'

const Main = ({data, onClick , setWarehouse}) => {
    const [isModal,setIsModal] = useState({
        processing: false,
        continue: false
    })

    useEffect(()=>{
        console.log(isModal)
    },[isModal])
    const modalUpdate = (keys,boolean,keys2) => {
        setIsModal({
            ...isModal,
            [keys]: boolean,
            [keys2 && keys2]: !boolean
        })
    }
    return (
        <>
            <main className={classes.main}>
                <section className={classes.main_title}>
                    <h1 className={classes.main_title_h1}>{data.characteristic.title}</h1>
                    <div className={classes.main_title_content}>
                        <Select/>
                        <Button text={data.characteristic.button_text} onClick={()=>modalUpdate('processing', true)} fontSize={'0.75rem'} />
                    </div>
                </section>
                <section className={classes.main_content}>
                    <div className={classes.main_content_title}>
                        <div className={classes.main_content_title_products}>
                            <Checkbox onClick={()=>console.log(true)} idCheckbox={'All_checkbox'}/>
                            <p>{data.characteristic.one}</p>
                        </div>
                        <div className={classes.main_content_title_category}>
                            <p>{data.characteristic.two}</p>
                        </div>
                        <div className={classes.main_content_title_category}>
                            <p>{data.characteristic.three}</p>
                        </div>
                        <div className={classes.main_content_title_category}>
                            <p>{data.characteristic.four}</p>
                        </div>
                        <div className={classes.main_content_title_category}>
                            <p>{data.characteristic.five}</p>
                        </div>
                    </div>
                    <div className={classes.main_content_products}>
                        {data.warehouses && data.warehouses.map(element=><Product data={element} onClick={()=>setWarehouse(element)} onChecked={()=>console.log(true)}/>)}
                        {data.products && data.products.map(element=><Product data={element} onClick={()=>console.log(true)}/>)}
                    </div>
                </section>
            </main>

    {(isModal.continue) || (isModal.processing)  && (
        <Modal
            title ={(isModal.processing && 'Adding a warehouse') || (isModal.continue && 'Warehouse successfully added')}
            buttonText ={(isModal.processing && 'Adding a warehouse') || (isModal.continue && 'Continue')}
            buttonOnclick={
            () =>
                (isModal.processing && modalUpdate('processing', false, 'continue'))
                ||
                (isModal.continue && modalUpdate('continue', false))}
            close={() => (isModal.processing && modalUpdate('processing', false)) || (isModal.continue && modalUpdate('continue', false))}
            src= {isModal.continue && houseModal}
        >

            <Input label={'Name of the warehouse'} placeholder={'Enter a name'}/>
            <Input label={'Length, m'} placeholder={'Enter the length'}/>
            <Input label={'Width, m'} placeholder={'Enter the width'}/>
            <Input label={'Height, m'} placeholder={'Enter the height'}/>
        </Modal>
    )
    }
    {/*{*/}
    {/*    isModal.continue && (*/}
    {/*    <Modal title={'Warehouse successfully added'}*/}
    {/*           buttonOnclick={()=>modalUpdate('continue', false)}*/}
    {/*           buttonText={'Continue'}*/}
    {/*           close={() => modalUpdate('continue', false)}*/}
    {/*           src={houseModal}*/}
    {/*    >*/}
    {/*    </Modal>*/}
    {/*    )*/}
    {/*}*/}
    </>
    );
};

export default Main;