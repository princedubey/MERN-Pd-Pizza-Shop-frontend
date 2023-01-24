import React, { useState } from "react";
import { Form, Col, Row, Button,Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../action/pizzaAction";
const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (

    <Container>
    <div className="p-4 bg-danger mt-2">
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="search pizza"
            />
          </Col>
          <Col>
          <select class="custom-select" id="inputGroupSelect01"  
          value={category}
          onChange={(e) => setcategory(e.target.value)}>
              <option selected>All</option>
              <option>veg</option>
              <option>nonveg</option>
           </select>
        </Col>

          <Col>

            <Button className="button-33 w-100" role="button"
              onClick={() => {
                dispatch(filterPizza(searchkey,category));
              }}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
    </Container>
  );
};

export default Filters;
