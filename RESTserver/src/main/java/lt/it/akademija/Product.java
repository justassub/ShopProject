package lt.it.akademija;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lt.it.akademija.Useriai.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    @NotNull
    String title;
    @Column
    String image;
    @Column
    String description;
    @Column
    double price;
    @Column
    int quantity;

    @Column
    String type;


    //Relation between PRoduct And User. Allows us to get specific user products .
    @ManyToMany
    @JoinTable(name = "Product_Users",joinColumns = @JoinColumn(name = "Product_ID"),
    inverseJoinColumns = @JoinColumn(name = "User_ID"))
    public List<User> users;

    @JsonIgnore
    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public Product(){}

    public Product(String title, String image, String description, double price, int quantity,String type) {


        this.title = title;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.type=type;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public void addUser(User user){
        users.add(user);
    }
    public void removeUser(User user){users.remove(user);}


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
