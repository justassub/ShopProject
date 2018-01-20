package lt.it.akademija.Services;

import lt.it.akademija.Product;
import lt.it.akademija.ProductRepository;
import lt.it.akademija.Useriai.User;
import lt.it.akademija.Useriai.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServices {
    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @Transactional
    public void createUser(String userName){
        User newUser = new User(userName);
        userRepository.save(newUser);

    }

    @Transactional
    public User findUser(String nickname){
        return userRepository.findUserByNickname(nickname);

    }

    @Transactional
    public Product findProductById(Long id){
        return productRepository.findById(id);
    }

    @Transactional
    public void UsersProducts(Long id,String nickname){
        Product perkamaPreke = findProductById(id);
        User prisijunges=findUser(nickname);
        prisijunges.addProduct(perkamaPreke);
        perkamaPreke.addUser(prisijunges);


    }
//checks if user already exist
    @Transactional
    public boolean userExists(String nickname){
        if (findUser(nickname)==null){
            return false;
        }    else return true;

    }

    //deletes product from user cart
    @Transactional
    public void deleteProductFromUser(Long id, String nickname){
        Product atsisakomaPreke=findProductById(id);
        User prisijunges=findUser(nickname);
        prisijunges.removeProduct(atsisakomaPreke);
        atsisakomaPreke.removeUser(prisijunges);

    }


}
