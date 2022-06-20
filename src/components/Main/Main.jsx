import React, {useEffect, useState} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Product from "../../UI/Product/Product";
import Modal from "../../UI/Modal/Modal";
import AddWarehouse from "../AddWarehouse/AddWarehouse";
import AddProductStepOne from "../AddProduct/AddProductStepOne";
import AddProductStepTwo from "../AddProduct/addProductStepTwo";
import AddProductStepThree from "../AddProduct/AddProductStepThree";
import Footer from "../../UI/Footer/Footer";
import classes from "./Main.module.css";
import houseModal from "../../assets/svg/houseModal.svg";
import waybill from "../../assets/svg/waybill.svg";
import warehouses from "../Warehouses/Warehouses";


const Main = ({data, setWarehouse}) => {
  const {userAuth, setUserAuth,setProductsCheck,productsCheck,activeWarehouse} = useUserContext()
  const [stepModal, setStepModal] = useState(0)
  const key = data.warehouses && 'warehouses' || data.products && 'products'

  const allChecked = data[key].every(({checked}) => checked)

  const checkAll = (element) => {
    console.log(data[key])
    data[key].length && setWarehouse(data => {
      return {
        ...data,
        [key]: data[key].map(item => ({...item, checked: !allChecked,}))
      }
    })
    element.checked ? setProductsCheck(data[key]) : setProductsCheck([])
  }
  const checkCur = (element, dataProduct, id) => {
    console.log(data[key])
    setWarehouse(data => {
      return {
        ...data,
        [key]: data[key].map((item) => item.id === id ? {...item, checked: !item.checked} : item)
      }
    })
    const deleteProduct = productsCheck.filter(product => product.id !== id)
    element.checked ? setProductsCheck([...productsCheck, dataProduct]) : setProductsCheck(deleteProduct)
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


  const deleteProd = () =>{
    const deleteProduct = data[key].filter(element=>{
      return !productsCheck.some(elementDel=>{
        return element.id === elementDel.id;
      });
    })
    key === 'warehouses' && setUserAuth( userAuth => {
      return {
        ...userAuth,
        [key]: deleteProduct
      }})
    
    key === 'products' && setUserAuth( userAuth => {
        return {
          ...userAuth,
          warehouses:
            userAuth.warehouses.map(warehouse=> warehouse.id === activeWarehouse.id
            ?
            {...warehouse, products: deleteProduct}
            :
            warehouse
          )
        }
      }
    )
    setWarehouse({...data,[key]: deleteProduct})
    setProductsCheck([])
  }

  return (
    <>
      <main className={classes.main} >
        <section className={classes.main_title}>
          <h1 className={classes.main_title_h1}>{data.characteristic.title}</h1>
          <div className={classes.main_title_content}>
            <Select/>
            <Button
              text={data.characteristic.button_text}
              onClick={() => data.warehouses && setStepModal(1) || data.products && setStepModal(3)}
              fontSize={'0.75rem'}
            />
          </div>
        </section>
        <section className={classes.main_content}>
          <div className={classes.main_content_title}>
            <div className={classes.main_content_title_products} >
              <Checkbox
                onChangeCheckbox={checkAll}
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
          <div className={classes.main_content_products} style={{ maxHeight : productsCheck.length!==0 ? 'calc(100vh - 422px)' : '100%'}}>
            {data[key].map((element) =>
              <Product
                key={`${element.id}_${key}`}
                data={element}
                onChangeCheckbox={checkCur}
                isChecked={element.checked}
                idCheckbox={element.id}
              />)}
          </div>
        </section>
        {productsCheck.length !== 0 && <Footer products={productsCheck} onClickDel={()=>deleteProd()} onClickMove={key==='products' && (()=>setStepModal(7))}/>}
      </main>


      {stepModal !== 0
        &&
        <Modal {...dataStepModal[stepModal]}>
          {stepModal === 1 && <AddWarehouse setStepModal={setStepModal} setWarehouse={setWarehouse} warehouse={data}/>}
          {stepModal === 3 && <AddProductStepOne setStepModal={setStepModal}/>}
          {stepModal === 4 && <AddProductStepTwo setStepModal={setStepModal}/>}
          {stepModal === 5 && <AddProductStepThree setStepModal={setStepModal} setWarehouse={setWarehouse} warehouse={data}/>}
          {/*{stepModal === 7 && <AddWarehouse setStepModal={setStepModal}/>}*/}
          {/*{stepModal === 8 && <AddProductStepOne/>}*/}
          {/*{stepModal === 9 && <AddWarehouse setStepModal={setStepModal}/>}*/}
        </Modal>
      }
    </>
  );
};

export default Main;