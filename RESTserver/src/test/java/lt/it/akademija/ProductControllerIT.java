//package lt.it.akademija;
//
//import org.hamcrest.CoreMatchers;
//import org.junit.Assert;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.List;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment
//        =SpringBootTest.WebEnvironment.RANDOM_PORT,classes = {App.class})
//public class ProductControllerIT {
//    private static final String URI="/api/users";
//    @Autowired
//    private TestRestTemplate rest;
//
//
//
//    @Test
//    public void createsProductThenRetrievesProductListAndThenDeletesUser(){
//        final String username=null;
//        CreateProductCommand product = new CreateProductCommand();
//        product.setTitle(username);
//        product.setPrice(8);
//        List<Product> products = rest.getForEntity(URI,List.class).getBody();
//        rest.postForLocation(URI,product);
//
//
//
//
//
//        products=rest.getForEntity(URI,List.class).getBody();
//        Assert.assertThat(products.size(),CoreMatchers.is(5));
//
//
//    }
//
//    @Test
//    public void checkProductUpdate(){
//        String title="akmuo";
//        int price =800;
//        int quantity=115;
//
//        CreateProductCommand atnaujinamasProduktas = new CreateProductCommand();
//        atnaujinamasProduktas.setTitle(title);
//        atnaujinamasProduktas.setPrice(price);
//        atnaujinamasProduktas.setQuantity(quantity);
//
//
//    }
//
//}
