import React, {useState, useEffect, use} from 'react'
import Header from '../../components/Header.jsx'
import { Container, Row, Col, Button} from 'react-bootstrap';
import ProductCard from '../../components/ProductCard.jsx';
import ProductModel from './ProductModel.jsx';
import EmptyComponent from '../../components/Empty.jsx';
import { useDispatch, useSelector} from 'react-redux';
import { fetchProducts, deleteProduct, createProduct, updateProduct } from '../../redux/actions/productActions.js';

export const Product = () => {

  const [showModel, setShowModel] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();

  const {items, loading} = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products from API or database here
    dispatch(fetchProducts());
  }, [dispatch]);
  // const sampleProducts = [
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     description: "Noise cancelling over-ear headphones",
  //     banner:
  //       "https://res.cloudinary.com/da3w329cx/image/upload/v1683056487/samples/landscapes/nature-mountains.jpg",
  //     price: 120,
  //   },
  //   {
  //     id: 2,
  //     name: "Smart Watch",
  //     description: "Smart wearable with health tracking",
  //     banner:
  //       "https://res.cloudinary.com/da3w329cx/image/upload/v1683056500/cld-sample-5.jpg",
  //     price: 80,
  //   },
  //   {
  //     id: 3,
  //     name: "Laptop",
  //     description: "14-inch Full HD display, 256GB SSD",
  //     banner:
  //       "https://res.cloudinary.com/da3w329cx/image/upload/v1683056499/cld-sample-3.jpg",
  //     price: 600,
  //   },
  // ];

  const sampleProducts = [];

  const handleAdd = () => {
    setShowModel(!showModel);
    setEditItem(null);
  };

  const handleEdit = (product) => {
    setEditItem(product);
    setShowModel(true);
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  }

  const handleSubmit = (values) => {
    if(editItem){
      dispatch(updateProduct(values));
    }
    else{
      dispatch(addProduct(values));
    }
      
  }



  return (
    <section>
      <Header/>
      {loading && <div>Fetching data...</div>}
      <Container className="mt-5">
        <div className="d-flex justify-content-end mb-4">
          <Button variant="primary" onClick={handleAdd}>
              <i className="bi bi-plus-circle me-2"></i>Add Product
          </Button>
        </div>

        {items.length === 0 ? (
           <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "200px" }}
            >
              <EmptyComponent message="We're currently out of stock" />
            </div>
        )
        : (
          <Row className="g-4">
            {items.map((product) => (
              <Col key={product.id} xs={6} sm={6} md={5} lg={3} className="mb-4 mx-3">
                <ProductCard product={product} 
                onEdit={() => handleEdit(product)}
                onDelete={() => handleDelete(product.id)}
                />
              </Col>
            ))}
          </Row>
        )}

      </Container>
      <ProductModel
      show={showModel} 
      onClose={() => setShowModel(!showModel)} 
      initialValues={
        editItem || {
          title: "",
          image: "",
          description: "",
          price: 0,
        }
      }
      isEdit={!!editItem}
      onSubmit={handleSubmit}
      />
    </section>
  )
}

export default Product;
