package lt.it.akademija.Useriai;


import io.swagger.annotations.ApiOperation;

import lt.it.akademija.CreateProductCommand;
import lt.it.akademija.Product;
import lt.it.akademija.ProductRepository;
import lt.it.akademija.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private  UserServices userServices;
//In real application i should use Principal?
    private static String prisijungesVartotojas;


    //Connects
    @RequestMapping(path = "/{nickname}", method= RequestMethod.POST)
    public void createUser( @PathVariable String nickname) {
        prisijungesVartotojas=nickname;
        if (userServices.userExists(nickname)){

        }else {
            userServices.createUser(nickname);
        }

    }



//adds product to cart
    @RequestMapping(path = "/buy/{id}", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void addToCart(@PathVariable final Long id) {
        userServices.UsersProducts(id,prisijungesVartotojas);
    }
//returns user cart
    @RequestMapping(path = "/user/cart", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Product> findUserProducts() {
        User prisijungesUser=userServices.findUser(prisijungesVartotojas);
        return prisijungesUser.getProducts();
    }
  //returns product number in cart
    @RequestMapping(path = "/productcount", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public int findUserProductCount() {
        User prisijungesUser=userServices.findUser(prisijungesVartotojas);
        return prisijungesUser.getProducts().size();
    }

//removes product
    @RequestMapping(path = "/user/cart/remove/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void removeFromCart(@PathVariable final Long id) {
        System.out.println("Deletinama preke is krepselio");
        userServices.deleteProductFromUser(id,prisijungesVartotojas);
    }
//returns connected userName. In real application I should use PRINCIPAL
    @GetMapping("/connected")
    public String getConnectedUserName(){
        return prisijungesVartotojas;
    }











}
