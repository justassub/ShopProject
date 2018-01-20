package lt.it.akademija;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.it.akademija.Services.ProductServices;
import lt.it.akademija.Useriai.User;
import lt.it.akademija.Useriai.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;


//Controller for products
@RestController
@RequestMapping(value = "/produktai")
@CrossOrigin(origins = "http://localhost:3000")

public class ProductsController {



    private final ProductServices productServices;


    @Autowired
    public ProductsController(ProductServices productServices) {
        this.productServices = productServices;
    }
//Returns All PRoducts
    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Get Product", notes = "Returs Registered products")
    public List<Product> getProducts() {
        return productServices.getAll();
    }


//Returns One product as List by title
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "Get Single Product", notes = "returns single Product by title")
    public List<Product> singleProduct(@PathVariable Long id) {
        return productServices.getOneList(id);
    }

//Saves product into Database
    @PostMapping("/add")
    @ApiOperation(value = "create product", notes = "Creates product with Data")
    public void createProduct(@Valid @RequestBody final CreateProductCommand cpc) {;
    productServices.saveProduct(cpc);
    }

//Updates product
    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    @ApiOperation(value = "Update product", notes = "updates product from list by title")
    public void updateProduct( @PathVariable Long id, @RequestBody CreateProductCommand cmd) {
        productServices.updateProduct(id,cmd);

    }

//Deletes product
    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ApiOperation(value = "Delete product", notes = "Deletes product from list by title")
    public void deleteProduct(@PathVariable final Long id) {
        productServices.deleteProduct(id);
    }










}
