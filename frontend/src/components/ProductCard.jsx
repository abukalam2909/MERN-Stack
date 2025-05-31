import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { name, description, banner, price } = product;

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={banner} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5 className="text-primary">${price}</h5>
        <div className="d-flex justify-content-end gap-2">
          <Button variant="outline-success" size="sm">
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="outline-danger" size="sm">
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
