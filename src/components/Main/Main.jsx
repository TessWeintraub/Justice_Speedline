import React, {useState} from 'react';
import {useUserContext} from "../../context/userContext";
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import Product from "../../UI/Product/Product";
import Modal from "../../UI/Modal/Modal";
import AddWarehouse from "../AddWarehouse/AddWarehouse";
import AddProductStepOne from "../AddProduct/AddProductStepOne";
import AddProductStepTwo from "../AddProduct/AddProductStepTwo";
import AddProductStepThree from "../AddProduct/AddProductStepThree";
import Footer from "../../UI/Footer/Footer";
import warehouses from "../Warehouses/Warehouses";
import MoveStepOne from "../Move/MoveStepOne";
import MoveStepTwo from "../Move/MoveStepTwo";
import MoveStepThree from "../Move/MoveStepThree";
import houseModal from "../../assets/svg/houseModal.svg";
import waybill from "../../assets/svg/waybill.svg";
import classes from "./Main.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import EditWarehouse from "../Edit/EditWarehouse";
import EditProductStepOne from "../Edit/EditStepOne";
import EditProductStepTwo from "../Edit/EditProductStepTwo";
import EditProductStepThree from "../Edit/EditProductStepThree";
import ErrorServer from "../../UI/Error/ErrorServer";
import ErrorToken from "../../UI/Error/ErrorToken";

const Main = ({data, setWarehouse}) => {
  const {setUserAuth,setProductsCheck,productsCheck,activeWarehouse, setIsAuth} = useUserContext()
  const [stepModal, setStepModal] = useState(0) // Шаги модального окна
  const key = data?.warehouses && 'warehouses' || data?.products && 'products'
  const allChecked = data && data[key].every(({checked}) => checked)

  const checkAll = (element) => {
    data[key].length && setWarehouse(data => {
      return {
        ...data,
        [key]: data[key].map(item => ({...item, checked: !allChecked,}))
      }
    })
    element.checked ? setProductsCheck(data[key]) : setProductsCheck([])
  }

  const checkCur = (element, dataProduct, id) => {
    setWarehouse(data => {
      return {
        ...data,
        [key]: data[key].map((item) => item._id === id ? {...item, checked: !item.checked} : item)
      }
    })
    const deleteProduct = productsCheck.filter(product => product._id !== id)
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
    },
    11: {
      title: `Edit a ${ productsCheck.length === 1 && productsCheck[0].one}`,
      close: () => setStepModal(0)
    },
    12: {
      title: `Edit a ${productsCheck.length === 1 && productsCheck[0].one}`,
      close: () => setStepModal(0)
    },
    13: {
      title: `Edit a ${productsCheck.length === 1 && productsCheck[0].one}`,
      close: () => setStepModal(0)
    },
    14: {
      title: `Edit a ${productsCheck.length === 1 && productsCheck[0].one}`,
      close: () => setStepModal(0)
    },
    15: {
      close: () => setStepModal(0),
    },
    16: {
      close: () => setIsAuth(false),
    }
  }


  const deleteProd = async () =>{
    if (key === 'warehouses'){
      try {
        const updatedUser = await axios.post('http://localhost:5000/api/warehouses/remove',{
          warehouses: productsCheck.map( element => element._id)
        },{
          headers: {Authorization: `${Cookies.get("TOKEN")}`},
        })
        await setUserAuth( updatedUser.data)
        await setWarehouse(updatedUser.data)
        setProductsCheck([])
        return
      }catch (e) {
        e.response.status === 401 ? setStepModal(16) : setStepModal(15)
      }
    }

    if (key === 'products') {
      try {
        const updatedUser = await axios.post('http://localhost:5000/api/products/remove',{
          warehouseId: activeWarehouse._id,
          removeProducts: productsCheck.map( element => element._id)
        },{
          headers: {Authorization: `${Cookies.get("TOKEN")}`},
        })
        const updatedWarehouse = updatedUser.data.warehouses.find( warehouse => warehouse._id === activeWarehouse._id)
        await setUserAuth(updatedUser.data)
        await setWarehouse(updatedWarehouse)
        setProductsCheck([])
      }catch (e) {
        e.response.status === 401 ? setStepModal(16) : setStepModal(15)
      }
    }
  }


  console.log(key)
  return (
    <>
      <main className={classes.main} >
        <section className={classes.main_title}>
          <h1 className={classes.main_title_h1}>{data?.characteristic?.title}</h1>
          <div className={classes.main_title_content}>
            <Select/>
            <Button
              text={data?.characteristic?.button_text}
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
              <p>{data?.characteristic?.one}</p>
            </div>
            <div className={classes.main_content_title_category}>
              <p>{data?.characteristic?.two}</p>
            </div>
            <div className={classes.main_content_title_category}>
              <p>{data?.characteristic?.three}</p>
            </div>
            <div className={classes.main_content_title_category}>
              <p>{data?.characteristic?.four}</p>
            </div>
            <div className={classes.main_content_title_category}>
              <p>
                {data?.characteristic?.five}</p>
            </div>
          </div>
          <div className={classes.main_content_products}
               style={{ maxHeight : productsCheck.length !== 0 ? 'calc(100vh - 422px)' : '100%'}}>
            {data[key].map((element) =>
              <Product
                key={`${element._id}_${key}`}
                data={element}
                onChangeCheckbox={checkCur}
                isChecked={element.checked}
                idCheckbox={element._id}
              />)}
          </div>
        </section>
        {productsCheck.length !== 0
          &&
          <Footer
            products={productsCheck}
            onClickDel={()=>deleteProd()}
            onClickEdit={()=>
              (key === 'warehouses' && setStepModal(11))
              ||
              (key === 'products' && setStepModal(12))
            }
            onClickMove={key==='products' && (()=>setStepModal(7))}
          />
        }
      </main>

      {stepModal !== 0
        &&
        <Modal {...dataStepModal[stepModal]}>
          {stepModal === 1 && <AddWarehouse setStepModal={setStepModal} setWarehouse={setWarehouse} warehouse={data}/>}
          {stepModal === 3 && <AddProductStepOne setStepModal={setStepModal}/>}
          {stepModal === 4 && <AddProductStepTwo setStepModal={setStepModal}/>}
          {stepModal === 5 && <AddProductStepThree setStepModal={setStepModal} setWarehouse={setWarehouse} warehouse={data}/>}
          {stepModal === 7 && <MoveStepOne setStepModal={setStepModal}/>}
          {stepModal === 8 && <MoveStepTwo setStepModal={setStepModal}/>}
          {stepModal === 9 && <MoveStepThree setStepModal={setStepModal} setWarehouse={setWarehouse} warehouse={data}/>}
          {stepModal === 11 && <EditWarehouse setStepModal={setStepModal} setWarehouse={setWarehouse} warehouse={productsCheck}/>}
          {stepModal === 12 && <EditProductStepOne setStepModal={setStepModal} setWarehouse={setWarehouse} product={productsCheck}/>}
          {stepModal === 13 && <EditProductStepTwo setStepModal={setStepModal} setWarehouse={setWarehouse} product={productsCheck}/>}
          {stepModal === 14 && <EditProductStepThree setStepModal={setStepModal} setWarehouse={setWarehouse} product={productsCheck}/>}
          {stepModal === 15 && <ErrorServer btnOnClick={()=>setStepModal(0)}/>}
          {stepModal === 16 && <ErrorToken/>}
        </Modal>
      }
    </>
  );
};

export default Main;