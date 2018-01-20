package lt.it.akademija.Services;

import lt.it.akademija.CreateProductCommand;
import lt.it.akademija.Product;
import lt.it.akademija.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

//Service for products
@Service
public class ProductServices {

    //Database Repository
    @Autowired
    ProductRepository repository;


//returns All Products
    @Transactional
    public List<Product> getAll(){
        return  repository.findAll();
    }

    //Returns one product as List (FOr react - JSON)
    @Transactional
    public List<Product> getOneList(long id){
        return repository.findProductById(id);
    }
//Returns one product as Object.
    @Transactional
    public Product getOne(long id){
        return repository.findById(id);
    }
//saves product
    @Transactional
    public void saveProduct(@RequestBody CreateProductCommand cpc){
        Product kuriamasProduktas = new Product(cpc.getTitle(),cpc.getImage(),cpc.getDescription(),cpc.getPrice(),cpc.getQuantity(),cpc.getType());
        repository.save(kuriamasProduktas);
    }
//updates Product
    @Transactional
    public void updateProduct(Long id, @RequestBody CreateProductCommand cpc){
        Product productToEdit = getOne(id);
        productToEdit.setTitle(cpc.getTitle());
        productToEdit.setImage(cpc.getImage());
        productToEdit.setDescription(cpc.getDescription());
        productToEdit.setPrice(cpc.getPrice());
        productToEdit.setQuantity(cpc.getQuantity());
        repository.save(productToEdit);
    }
//Deletes product
    @Transactional
    public  void deleteProduct(Long id){
        Product trinamasProduktas= getOne(id);
        repository.delete(trinamasProduktas);
    }









}
