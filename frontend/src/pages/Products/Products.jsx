import { useState } from "react";
import Header from "../../components/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
import EmptyComponent from "../../components/EmptyComponent";
import AddProduct from "./ProductModal";
import ProductModal from "./ProductModal";



const Products = () => {
  const sampleProducts = [];

  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);


  const handleAdd = () => {
    setEditItem(null)

    setShowModal(!showModal);
  };

  const handleSubmit = (values) => {
    if (editItem) {
      // dispatch update product action
    } else {
      // dispatch add product action
    }
  };
  
  console.log("Products page rendered");

  return (
    <>
    <section>
      <Header />
      <Container className="mt-4">
        <div className="d-flex justify-content-end mb-4">

          <Button variant="primary" onClick={handleAdd}>
            <i className="bi bi-plus-circle me-2"></i>
            Add Product
          </Button>
        </div>

        {sampleProducts.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <EmptyComponent message="We're currently out of stock" />
          </div>
        ) : (
          <Row className="g-4">
            {sampleProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={3} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <ProductModal
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        initialValues={
          editItem || {
            title: "",
            image: "",
            description: "",
            price: 0,
          }
        }
        onSubmit={handleSubmit}
      />

    </section>
    </>
  );

  
};

export default Products;
