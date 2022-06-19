import React, {useEffect, useState} from 'react';
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Product from "../../UI/Product/Product";
import Modal from "../../UI/Modal/Modal";
import AddWarehouse from "../AddWarehouse/AddWarehouse";
import classes from "./Main.module.css";
import AddProductStepOne from "../AddProduct/AddProductStepOne";
import {useUserContext} from "../../context/userContext";
import houseModal from "../../assets/svg/houseModal.svg";
import waybill from "../../assets/svg/waybill.svg"
import AddProductStepTwo from "../AddProduct/addProductStepTwo";
import AddProductStepThree from "../AddProduct/AddProductStepThree";


const Main = ({data, setWarehouse}) => {
  const [stepModal, setStepModal] = useState(0)
  const [products, setProducts] = useState([])
  const {userAuth, setUserAuth, setActiveWarehouse} = useUserContext()


  const allChecked = data.warehouses.every(({checked}) => checked)

  const checkAll = (element) => {
    data.warehouses && setUserAuth(userAuth => {
      return {
        ...userAuth,
        warehouses: userAuth.warehouses.map(item => ({...item, checked: !allChecked,}))
      }
    })
    element.checked ? setProducts(data.warehouses) : setProducts([])
  }
  const checkCur = (element, dataProduct, id) => {
    setUserAuth(userAuth => {
      return {
        ...userAuth,
        warehouses: userAuth.warehouses.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
      }
    })
    const deleteProduct = products.filter(product => product.id !== id)
    element.checked ? setProducts([...products, dataProduct]) : setProducts(deleteProduct)
  }

  const dataStepModal = {
    1: {
      title: 'Adding a warehouse',
      close: () => setStepModal(0)
    },
    2: {
      title: 'Warehouse successfully added',
      btnText: 'Continue',
      src: houseModal,
      btnOnClick: () => setStepModal(0),
      close: () => setStepModal(0)
    },
    3: {
      title: 'Adding a product',
      close: () => setStepModal(0)
    },
    4: {
      title: 'Shipping method',
      close: () => setStepModal(0)
    },
    5: {
      title: 'Payment method',
      close: () => setStepModal(0)
    },
    6: {
      title: 'The cargo was successfully created',
      btnText: 'Continue',
      src: waybill,
      btnOnClick: () => setStepModal(0),
      close: () => setStepModal(0)
    },
    7: {
      title: 'Move cargo',
      close: () => setStepModal(0)
    },
    8: {
      title: 'Move cargo',
      close: () => setStepModal(0)
    },
    9: {
      title: 'Move cargo',
      close: () => setStepModal(0)
    },
    10: {
      title: 'Cargo was successfully moved ',
      btnText: 'Continue',
      src: houseModal,
      btnOnClick: () => setStepModal(0),
      close: () => setStepModal(0)
    }
  }


  return (
    <>
      <main className={classes.main}>
        <section className={classes.main_title}>
          <h1 className={classes.main_title_h1}>{data.characteristic.title}</h1>
          <div className={classes.main_title_content}>
            <Select/>
            <Button
              text={data.characteristic.button_text}
              onClick={() => data.warehouses && setStepModal(3) || data.products && setStepModal(3)}
              fontSize={'0.75rem'}
            />
          </div>
        </section>
        <section className={classes.main_content}>
          <div className={classes.main_content_title}>
            <div className={classes.main_content_title_products}>
              <Checkbox
                onClickCheckbox={checkAll}
                isChecked={allChecked}
                idCheckbox={'all'}
              />
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
            {data.warehouses && data.warehouses.map((element, idx) =>
              <Product
                data={element}
                onClickCheckbox={checkCur}
                isChecked={element.checked}
                idCheckbox={element.id}
              />)}
            {data.products && data.products.map(element =>
              <Product
                data={element}
                onClickCheckbox={checkCur}
                isChecked={element.checked}
                idCheckbox={element.id}
              />)}
          </div>
        </section>
      </main>


      {stepModal
        &&
        <Modal {...dataStepModal[stepModal]}>
          {stepModal === 1 && <AddWarehouse setStepModal={setStepModal}/>}
          {stepModal === 3 && <AddProductStepOne setStepModal={setStepModal}/>}
          {stepModal === 4 && <AddProductStepTwo setStepModal={setStepModal}/>}
          {stepModal === 5 && <AddProductStepThree setStepModal={setStepModal}/>}
          {/*{stepModal === 7 && <AddWarehouse setStepModal={setStepModal}/>}*/}
          {/*{stepModal === 8 && <AddProductStepOne/>}*/}
          {/*{stepModal === 9 && <AddWarehouse setStepModal={setStepModal}/>}*/}
        </Modal>
      }
    </>
  );
};

export default Main;